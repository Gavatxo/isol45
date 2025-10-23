import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, Calendar, ArrowLeft, Quote } from "lucide-react";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const RealizationDetailPage = () => {
  const { slug } = useParams();
  const [realization, setRealization] = useState(null);
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
    fetchRealization();
  }, [slug]);

  const fetchRealization = async () => {
    try {
      const response = await axios.get(`${API}/realizations/${slug}`);
      setRealization(response.data);
    } catch (error) {
      console.error("Error fetching realization:", error);
      toast.error("Erreur lors du chargement de la réalisation");
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

  if (!realization) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Réalisation non trouvée</div>
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
            <Link to="/" className="hover:text-blue-600">
              Accueil
            </Link>
            <span>/</span>
            <Link to="/realisations" className="hover:text-blue-600">
              Réalisations
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">
              {realization.title}
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-16">
          <Link
            to="/realisations"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft size={20} />
            <span>Retour aux réalisations</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="mb-4">{realization.category}</Badge>
              <h1
                className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                {realization.title}
              </h1>

              <div className="flex flex-wrap gap-6 mb-8 text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">{realization.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">{realization.date}</span>
                </div>
              </div>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {realization.full_description}
              </p>

              <Link to="/#contact">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                >
                  Un projet similaire ?
                </Button>
              </Link>
            </div>

            <div>
              <img
                src={realization.main_image}
                alt={realization.title}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Gallery */}
        {realization.images.length > 1 && (
          <div className="bg-white py-16 mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                Galerie photos
              </h2>
              <div className="max-w-5xl mx-auto">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {realization.images.map((image, idx) => (
                      <CarouselItem
                        key={idx}
                        className="pl-4 md:basis-1/2 lg:basis-1/2"
                      >
                        <img
                          src={image}
                          alt={`${realization.title} ${idx + 1}`}
                          className="w-full h-96 object-cover rounded-xl shadow-lg"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-12" />
                  <CarouselNext className="-right-12" />
                </Carousel>
              </div>
            </div>
          </div>
        )}

        {/* Testimonial */}
        {realization.testimonial && (
          <div className="container mx-auto px-4 mb-16">
            <div className="max-w-4xl mx-auto bg-blue-50 rounded-2xl p-12 relative">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-200" />
              <div className="relative z-10">
                <p className="text-xl text-slate-700 italic mb-6 leading-relaxed">
                  "{realization.testimonial}"
                </p>
                {realization.client_name && (
                  <p className="text-slate-900 font-semibold">
                    — {realization.client_name}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Vous avez un projet similaire ?
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Parlons de votre projet et trouvons ensemble la solution idéale
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

export default RealizationDetailPage;