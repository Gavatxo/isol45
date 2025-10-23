import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import RealizationsPage from "@/pages/RealizationsPage";
import RealizationDetailPage from "@/pages/RealizationDetailPage";
import AtoutsPage from "@/pages/AtoutsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/realisations" element={<RealizationsPage />} />
          <Route path="/realisations/:slug" element={<RealizationDetailPage />} />
          <Route path="/atouts" element={<AtoutsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;