import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar } from "lucide-react";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const RealizationsPage = () => {
  const [realizations, setRealizations] = useState([]);
  const [filteredRealizations, setFilteredRealizations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const categories = [
    "Toutes",
    "Fenêtres",
    "Portes",
    "Volets",
    "Pergolas",
    "Atelier",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchRealizations();
  }, []);

  useEffect(() => {
    if (selectedCategory === "Toutes") {
      setFilteredRealizations(realizations);
    } else {
      setFilteredRealizations(
        realizations.filter((r) => r.category === selectedCategory)
      );
    }
  }, [selectedCategory, realizations]);

  const fetchRealizations = async () => {
    try {
      const response = await axios.get(`${API}/realizations`);
      setRealizations(response.data);
      setFilteredRealizations(response.data);
    } catch (error) {
      console.error("Error fetching realizations:", error);
      toast.error("Erreur lors du chargement des réalisations");
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
              Nos <span className="text-blue-400">Réalisations</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Découvrez nos projets récents et notre savoir-faire artisanal.
              Plus de 35 ans d'expertise au service de votre satisfaction.
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full ${
                  selectedCategory === category
                    ? "bg-blue-600 hover:bg-blue-700"
                    : ""
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Realizations Grid */}
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-20">
              <div className="text-xl">Chargement des réalisations...</div>
            </div>
          ) : filteredRealizations.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-xl text-slate-600">
                Aucune réalisation dans cette catégorie
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRealizations.map((realization) => (
                <Link
                  key={realization.id}
                  to={`/realisations/${realization.slug}`}
                >
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={realization.main_image}
                        alt={realization.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

                      {/* Badge Category */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600 text-white">
                          {realization.category}
                        </Badge>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-3">
                          {realization.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{realization.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{realization.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="p-6">
                      <p className="text-slate-600 line-clamp-2">
                        {realization.short_description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Votre projet mérite le meilleur
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Faites confiance à notre expertise pour réaliser vos menuiseries sur
              mesure
            </p>
            <Link to="/#contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-slate-100 rounded-full"
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

export default RealizationsPage;