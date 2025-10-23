import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ServicesPage = () => {
  const [services, setServices] = useState([]);
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
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${API}/services`);
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
      toast.error("Erreur lors du chargement des services");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header isScrolled={isScrolled} />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-900 to-slate-900 text-white py-20 mb-16">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1
              className="text-5xl font-bold mb-6"
              style={{ fontFamily: "'Work Sans', sans-serif" }}
            >
              Nos <span className="text-blue-400">Services</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Découvrez notre gamme complète de menuiseries sur mesure.
              Qualité, expertise et garantie 10 ans sur tous nos produits.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="text-xl">Chargement des services...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.images[0]}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.short_description}
                    </p>

                    <Link to={`/services/${service.slug}`}>
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full group"
                      >
                        En savoir plus
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contactez-nous pour discuter de votre projet sur mesure
            </p>
            <Link to="/#contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-100 rounded-full"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;