from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class QuoteRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    request_type: str  # 'devis', 'tarifs', 'questions', 'autre'
    name: str
    phone: str
    email: EmailStr
    address: str
    city: str
    message: Optional[str] = None
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class QuoteRequestCreate(BaseModel):
    request_type: str
    name: str
    phone: str
    email: EmailStr
    address: str
    city: str
    message: Optional[str] = None

# Routes
@api_router.get("/")
async def root():
    return {"message": "ISOL45 API - Bienvenue"}

@api_router.post("/quote-request", response_model=QuoteRequest)
async def create_quote_request(input: QuoteRequestCreate):
    """Créer une nouvelle demande de devis"""
    try:
        quote_dict = input.model_dump()
        quote_obj = QuoteRequest(**quote_dict)
        
        # Convert to dict and serialize datetime to ISO string for MongoDB
        doc = quote_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        _ = await db.quote_requests.insert_one(doc)
        return quote_obj
    except Exception as e:
        logging.error(f"Error creating quote request: {e}")
        raise HTTPException(status_code=500, detail="Erreur lors de la création de la demande")

@api_router.get("/quote-requests", response_model=List[QuoteRequest])
async def get_quote_requests():
    """Récupérer toutes les demandes de devis"""
    try:
        requests = await db.quote_requests.find({}, {"_id": 0}).to_list(1000)
        
        # Convert ISO string timestamps back to datetime objects
        for req in requests:
            if isinstance(req['timestamp'], str):
                req['timestamp'] = datetime.fromisoformat(req['timestamp'])
        
        return requests
    except Exception as e:
        logging.error(f"Error fetching quote requests: {e}")
        raise HTTPException(status_code=500, detail="Erreur lors de la récupération des demandes")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()