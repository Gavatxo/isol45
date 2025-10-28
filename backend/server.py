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
env_file = ROOT_DIR / '.env'
if env_file.exists():
    load_dotenv(env_file)

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
    request_type: str
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

class Service(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    name: str
    slug: str
    short_description: str
    long_description: str
    category: str
    features: List[str]
    benefits: List[str]
    warranty: str
    images: List[str]
    icon: str

class Realization(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str
    title: str
    slug: str
    category: str
    short_description: str
    full_description: str
    location: str
    date: str
    images: List[str]
    main_image: str
    testimonial: Optional[str] = None
    client_name: Optional[str] = None

# Routes
@api_router.get("/")
async def root():
    return {"message": "ISOL45 API - Bienvenue"}

# Quote Requests
@api_router.post("/quote-request", response_model=QuoteRequest)
async def create_quote_request(input: QuoteRequestCreate):
    """Créer une nouvelle demande de devis"""
    try:
        quote_dict = input.model_dump()
        quote_obj = QuoteRequest(**quote_dict)
        
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
        
        for req in requests:
            if isinstance(req['timestamp'], str):
                req['timestamp'] = datetime.fromisoformat(req['timestamp'])
        
        return requests
    except Exception as e:
        logging.error(f"Error fetching quote requests: {e}")
        raise HTTPException(status_code=500, detail="Erreur lors de la récupération des demandes")

# Services
@api_router.get("/services", response_model=List[Service])
async def get_services():
    """Récupérer tous les services"""
    try:
        services = await db.services.find({}, {"_id": 0}).to_list(100)
        if not services:
            # Initialize with default data if empty
            await init_services()
            services = await db.services.find({}, {"_id": 0}).to_list(100)
        return services
    except Exception as e:
        logging.error(f"Error fetching services: {e}")
        raise HTTPException(status_code=500, detail="Erreur lors de la récupération des services")

@api_router.get("/services/{slug}", response_model=Service)
async def get_service_by_slug(slug: str):
    """Récupérer un service par son slug"""
    try:
        service = await db.services.find_one({"slug": slug}, {"_id": 0})
        if not service:
            raise HTTPException(status_code=404, detail="Service non trouvé")
        return service
    except HTTPException:
        raise
    except Exception as e:
        logging.error(f"Error fetching service: {e}")
        raise HTTPException(status_code=500, detail="Erreur lors de la récupération du service")

# Realizations
@api_router.get("/realizations", response_model=List[Realization])
async def get_realizations(category: Optional[str] = None):
    """Récupérer toutes les réalisations, avec filtre optionnel par catégorie"""
    try:
        query = {"category": category} if category else {}
        realizations = await db.realizations.find(query, {"_id": 0}).to_list(100)
        if not realizations and not category:
            # Initialize with default data if empty
            await init_realizations()
            realizations = await db.realizations.find({}, {"_id": 0}).to_list(100)
        return realizations
    except Exception as e:
        logging.error(f"Error fetching realizations: {e}")
        raise HTTPException(status_code=500, detail="Erreur lors de la récupération des réalisations")

@api_router.get("/realizations/{slug}", response_model=Realization)
async def get_realization_by_slug(slug: str):
    """Récupérer une réalisation par son slug"""
    try:
        realization = await db.realizations.find_one({"slug": slug}, {"_id": 0})
        if not realization:
            raise HTTPException(status_code=404, detail="Réalisation non trouvée")
        return realization
    except HTTPException:
        raise
    except Exception as e:
        logging.error(f"Error fetching realization: {e}")
        raise HTTPException(status_code=500, detail="Erreur lors de la récupération de la réalisation")

# Initialize default data
async def init_services():
    """Initialiser les services par défaut"""
    services_data = [
        {
            "id": "1",
            "name": "Fenêtres PVC, Alu & Bois",
            "slug": "fenetres",
            "short_description": "Fenêtres sur mesure pour une isolation optimale",
            "long_description": "Nos fenêtres sur mesure en PVC, aluminium ou bois allient esthétique et performance. Grâce à une conception minutieuse et des matériaux de qualité supérieure, elles garantissent une isolation thermique et phonique exceptionnelle. Que vous recherchiez le charme du bois, la robustesse de l'aluminium ou la facilité d'entretien du PVC, nous avons la solution adaptée à votre projet.",
            "category": "Menuiserie",
            "features": [
                "Double ou triple vitrage",
                "Isolation thermique renforcée",
                "Isolation phonique optimale",
                "Large choix de coloris et finitions",
                "Fabrication sur mesure",
                "Conformité RT 2020"
            ],
            "benefits": [
                "Réduction jusqu'à 30% de vos factures de chauffage",
                "Confort acoustique amélioré",
                "Valorisation de votre bien immobilier",
                "Entretien minimal",
                "Sécurité renforcée"
            ],
            "warranty": "Garantie 10 ans",
            "images": [
                "https://images.unsplash.com/photo-1626005592101-018b4e09eb5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwdmMlMjB3aW5kb3dzfGVufDB8fHx8MTc2MTA0MTE5OXww&ixlib=rb-4.1.0&q=85",
                "https://images.unsplash.com/photo-1600320948479-119fec7452f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBwdmMlMjB3aW5kb3dzfGVufDB8fHx8MTc2MTA0MTE5OXww&ixlib=rb-4.1.0&q=85"
            ],
            "icon": "Home"
        },
        {
            "id": "2",
            "name": "Portes d'entrée & Garage",
            "slug": "portes",
            "short_description": "Portes d'entrée et de garage personnalisées et sécurisées",
            "long_description": "Votre porte d'entrée est la première impression de votre maison. Nous concevons et installons des portes d'entrée et de garage alliant sécurité, isolation et design. Disponibles en PVC, aluminium, bois ou acier, nos portes sont équipées des dernières technologies de sécurité et d'isolation.",
            "category": "Menuiserie",
            "features": [
                "Multi-points de verrouillage",
                "Isolation thermique renforcée",
                "Large gamme de designs",
                "Motorisation disponible",
                "Personnalisation complète",
                "Blindage disponible"
            ],
            "benefits": [
                "Sécurité maximale contre les effractions",
                "Économies d'énergie",
                "Esthétique personnalisée",
                "Confort d'utilisation",
                "Durabilité exceptionnelle"
            ],
            "warranty": "Garantie 10 ans",
            "images": [
                "https://images.unsplash.com/photo-1758998202918-d921125a700f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBkb29yc3xlbnwwfHx8fDE3NjEwNDEyMTJ8MA&ixlib=rb-4.1.0&q=85"
            ],
            "icon": "DoorOpen"
        },
        {
            "id": "3",
            "name": "Volets & Stores",
            "slug": "volets-stores",
            "short_description": "Protection et confort avec nos volets et stores",
            "long_description": "Protégez votre intérieur et améliorez votre confort avec nos volets et stores sur mesure. Que vous optiez pour des volets battants traditionnels, des volets roulants motorisés ou des stores intérieurs et extérieurs, nous avons la solution adaptée à vos besoins.",
            "category": "Fermetures",
            "features": [
                "Volets battants, roulants, coulissants",
                "Motorisation SOMFY",
                "Contrôle domotique",
                "Stores intérieurs et extérieurs",
                "Multiples coloris",
                "Installation professionnelle"
            ],
            "benefits": [
                "Protection solaire optimale",
                "Sécurité renforcée",
                "Économies d'énergie",
                "Confort au quotidien",
                "Contrôle de la luminosité"
            ],
            "warranty": "Garantie 10 ans",
            "images": [
                "https://images.unsplash.com/photo-1664284534101-174ad3c28587?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHx3b29kZW4lMjBzaHV0dGVyc3xlbnwwfHx8fDE3NjEwNDEyMjB8MA&ixlib=rb-4.1.0&q=85"
            ],
            "icon": "Blinds"
        },
        {
            "id": "4",
            "name": "Pergolas Bioclimatiques",
            "slug": "pergolas",
            "short_description": "Profitez de votre extérieur toute l'année",
            "long_description": "Transformez votre terrasse en espace de vie supplémentaire avec nos pergolas bioclimatiques Brustor. Grâce à leurs lames orientables, elles s'adaptent à toutes les conditions météorologiques et vous permettent de profiter de votre extérieur en toute saison.",
            "category": "Extérieur",
            "features": [
                "Lames orientables motorisées",
                "Système bioclimatique intelligent",
                "Éclairage LED intégré",
                "Étanchéité parfaite",
                "Design contemporain",
                "Options : stores latéraux, chauffage"
            ],
            "benefits": [
                "Protection solaire et pluie",
                "Ventilation naturelle",
                "Espace de vie supplémentaire",
                "Valorisation de votre propriété",
                "Confort toute l'année"
            ],
            "warranty": "Garantie 10 ans",
            "images": [
                "https://images.unsplash.com/photo-1696846912973-3233cc80bf86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwZXJnb2xhfGVufDB8fHx8MTc2MTAwNDI0M3ww&ixlib=rb-4.1.0&q=85",
                "https://images.unsplash.com/photo-1696846912293-9a8013e17403?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxwZXJnb2xhfGVufDB8fHx8MTc2MTAwNDI0M3ww&ixlib=rb-4.1.0&q=85"
            ],
            "icon": "SunMedium"
        },
        {
            "id": "5",
            "name": "Portails & Clôtures",
            "slug": "portails-clotures",
            "short_description": "Délimitez votre propriété avec style",
            "long_description": "Personnalisez l'entrée de votre propriété avec nos portails et clôtures sur mesure. Disponibles en aluminium, PVC ou bois, ils allient esthétique, sécurité et durabilité.",
            "category": "Extérieur",
            "features": [
                "Portails battants ou coulissants",
                "Motorisation intégrée",
                "Multiples designs",
                "Clôtures assorties",
                "Systèmes de sécurité",
                "Finitions personnalisées"
            ],
            "benefits": [
                "Sécurité de votre propriété",
                "Esthétique valorisante",
                "Durabilité excellente",
                "Confort d'utilisation",
                "Entretien minimal"
            ],
            "warranty": "Garantie 10 ans",
            "images": [
                "https://images.unsplash.com/photo-1740131371833-81eacf64356b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBwdmMlMjB3aW5kb3dzfGVufDB8fHx8MTc2MTA0MTE5OXww&ixlib=rb-4.1.0&q=85"
            ],
            "icon": "Fence"
        }
    ]
    await db.services.insert_many(services_data)

async def init_realizations():
    """Initialiser les réalisations par défaut"""
    realizations_data = [
        {
            "id": "1",
            "title": "Rénovation complète - Villa Montargis",
            "slug": "renovation-villa-montargis",
            "category": "Fenêtres",
            "short_description": "Remplacement de 12 fenêtres PVC avec volets roulants motorisés",
            "full_description": "Projet complet de rénovation pour une villa à Montargis. Nous avons remplacé l'ensemble des menuiseries existantes par des fenêtres PVC double vitrage à isolation renforcée, équipées de volets roulants motorisés SOMFY. Le projet incluait également la pose d'une porte d'entrée blindée. Les travaux ont été réalisés en 5 jours avec un minimum de gêne pour les occupants.",
            "location": "Montargis (45)",
            "date": "Septembre 2024",
            "images": [
                "https://images.unsplash.com/photo-1626005592101-018b4e09eb5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwdmMlMjB3aW5kb3dzfGVufDB8fHx8MTc2MTA0MTE5OXww&ixlib=rb-4.1.0&q=85",
                "https://images.unsplash.com/photo-1600320948479-119fec7452f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBwdmMlMjB3aW5kb3dzfGVufDB8fHx8MTc2MTA0MTE5OXww&ixlib=rb-4.1.0&q=85"
            ],
            "main_image": "https://images.unsplash.com/photo-1626005592101-018b4e09eb5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwdmMlMjB3aW5kb3dzfGVufDB8fHx8MTc2MTA0MTE5OXww&ixlib=rb-4.1.0&q=85",
            "testimonial": "Travail impeccable et équipe très professionnelle. Les délais ont été respectés et le résultat dépasse nos attentes. Nos factures de chauffage ont déjà baissé !",
            "client_name": "M. et Mme D."
        },
        {
            "id": "2",
            "title": "Pergola bioclimatique - Résidence Sens",
            "slug": "pergola-residence-sens",
            "category": "Pergolas",
            "short_description": "Installation d'une pergola bioclimatique 6x4m avec éclairage LED",
            "full_description": "Installation d'une magnifique pergola bioclimatique Brustor pour une résidence à Sens. Cette pergola de 24m² dispose de lames orientables motorisées, d'un éclairage LED intégré et de stores latéraux rétractables. Le système intelligent s'adapte automatiquement aux conditions météorologiques grâce à ses capteurs de vent et de pluie.",
            "location": "Sens (89)",
            "date": "Juillet 2024",
            "images": [
                "https://images.unsplash.com/photo-1696846912973-3233cc80bf86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwZXJnb2xhfGVufDB8fHx8MTc2MTAwNDI0M3ww&ixlib=rb-4.1.0&q=85",
                "https://images.unsplash.com/photo-1696846912293-9a8013e17403?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxwZXJnb2xhfGVufDB8fHx8MTc2MTAwNDI0M3ww&ixlib=rb-4.1.0&q=85"
            ],
            "main_image": "https://images.unsplash.com/photo-1696846912973-3233cc80bf86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwZXJnb2xhfGVufDB8fHx8MTc2MTAwNDI0M3ww&ixlib=rb-4.1.0&q=85",
            "testimonial": "Nous profitons maintenant de notre terrasse toute l'année. La pergola est magnifique et très fonctionnelle. Installation rapide et soignée.",
            "client_name": "Famille R."
        },
        {
            "id": "3",
            "title": "Volets en bois - Maison de caractère",
            "slug": "volets-bois-maison-caractere",
            "category": "Volets",
            "short_description": "Fabrication et pose de volets battants en bois sur mesure",
            "full_description": "Réalisation de volets battants en bois massif pour une maison de caractère. Chaque volet a été conçu sur mesure pour respecter l'architecture traditionnelle tout en apportant une touche de modernité. Traitement insecticide et fongicide, finition peinture microporeuse.",
            "location": "Gien (45)",
            "date": "Mai 2024",
            "images": [
                "https://images.unsplash.com/photo-1664284534101-174ad3c28587?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHx3b29kZW4lMjBzaHV0dGVyc3xlbnwwfHx8fDE3NjEwNDEyMjB8MA&ixlib=rb-4.1.0&q=85",
                "https://images.unsplash.com/photo-1591019231810-4c7301fb4ccb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHx3b29kZW4lMjBzaHV0dGVyc3xlbnwwfHx8fDE3NjEwNDEyMjB8MA&ixlib=rb-4.1.0&q=85"
            ],
            "main_image": "https://images.unsplash.com/photo-1664284534101-174ad3c28587?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHx3b29kZW4lMjBzaHV0dGVyc3xlbnwwfHx8fDE3NjEwNDEyMjB8MA&ixlib=rb-4.1.0&q=85",
            "testimonial": "Un travail artisanal exceptionnel. Les volets s'intègrent parfaitement à notre maison ancienne. Merci pour votre expertise !",
            "client_name": "M. L."
        },
        {
            "id": "4",
            "title": "Porte de garage sectionnelle - Villemandeur",
            "slug": "porte-garage-villemandeur",
            "category": "Portes",
            "short_description": "Installation d'une porte de garage sectionnelle motorisée",
            "full_description": "Pose d'une porte de garage sectionnelle en aluminium avec motorisation SOMFY et commande à distance. Isolation renforcée pour un garage attenant à l'habitation. Finition laquée blanc avec portillon intégré pour un accès piéton pratique.",
            "location": "Villemandeur (45)",
            "date": "Octobre 2024",
            "images": [
                "https://images.unsplash.com/photo-1758998202918-d921125a700f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBkb29yc3xlbnwwfHx8fDE3NjEwNDEyMTJ8MA&ixlib=rb-4.1.0&q=85"
            ],
            "main_image": "https://images.unsplash.com/photo-1758998202918-d921125a700f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBkb29yc3xlbnwwfHx8fDE3NjEwNDEyMTJ8MA&ixlib=rb-4.1.0&q=85",
            "testimonial": "Installation très professionnelle. La porte est silencieuse et le système de motorisation fonctionne parfaitement. Je recommande vivement !",
            "client_name": "Mme P."
        },
        {
            "id": "5",
            "title": "Atelier menuiserie - ISOL45",
            "slug": "atelier-menuiserie-isol45",
            "category": "Atelier",
            "short_description": "Découvrez notre atelier de fabrication moderne",
            "full_description": "Notre atelier de menuiserie est équipé des dernières technologies pour garantir une fabrication précise et de qualité. Chaque menuiserie est conçue sur mesure selon vos besoins et vos contraintes. Nos artisans expérimentés travaillent avec passion pour créer des produits durables et esthétiques.",
            "location": "Villemandeur (45)",
            "date": "Permanent",
            "images": [
                "https://images.unsplash.com/photo-1685320198649-781e83a61de4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxjYXJwZW50cnklMjB3b3Jrc2hvcHxlbnwwfHx8fDE3NjEwNDEyNDJ8MA&ixlib=rb-4.1.0&q=85",
                "https://images.unsplash.com/photo-1624639948977-b54981cf5d5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxjYXJwZW50cnklMjB3b3Jrc2hvcHxlbnwwfHx8fDE3NjEwNDEyNDJ8MA&ixlib=rb-4.1.0&q=85"
            ],
            "main_image": "https://images.unsplash.com/photo-1685320198649-781e83a61de4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxjYXJwZW50cnklMjB3b3Jrc2hvcHxlbnwwfHx8fDE3NjEwNDEyNDJ8MA&ixlib=rb-4.1.0&q=85",
            "testimonial": None,
            "client_name": None
        }
    ]
    await db.realizations.insert_many(realizations_data)

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