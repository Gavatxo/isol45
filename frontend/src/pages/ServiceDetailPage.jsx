import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Shield, ArrowLeft, Phone } from "lucide-react";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchService();
  }, [slug]);

  const fetchService = async () => {
    try {
      const response = await axios.get(`${API}/services/${slug}`);
      setService(response.data);
    } catch (error) {
      console.error("Error fetching service:", error);
      toast.error("Erreur lors du chargement du service");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Chargement...</div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Service non trouvé</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header isScrolled={isScrolled} />

      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{service.name}</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
              >
                <ArrowLeft size={20} />
                <span>Retour aux services</span>
              </Link>
              
              <Badge className="mb-4">{service.category}</Badge>
              <h1
                className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {service.name}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {service.long_description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/#contact">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                  >
                    Demander un devis
                  </Button>
                </Link>
                <a href="tel:0974567710">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full"
                  >
                    <Phone size={18} className="mr-2" />
                    Nous appeler
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src={service.images[0]}
                alt={service.name}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold">{service.warranty}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-16 mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Caractéristiques techniques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 font-medium">{feature}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Avantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-slate-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        {service.images.length > 1 && (
          <div className="container mx-auto px-4 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Galerie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.images.slice(1).map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`${service.name} ${idx + 2}`}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Intéressé par ce service ?
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un devis gratuit et personnalisé
            </p>
            <Link to="/#contact">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-slate-100 rounded-full text-lg px-8"
              >
                Demander un devis gratuit
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;