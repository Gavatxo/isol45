import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Ruler,
  Package,
  Award,
  Shield,
  Clock,
  ThumbsUp,
  Star,
  Wrench,
  Home,
  CheckCircle2,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const AtoutsPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainStrengths = [
    {
      icon: Users,
      title: "Le professionnalisme",
      description:
        "Nous étudions vos demandes avec attention et vous conseillons sur les meilleures solutions adaptées à vos besoins. Notre équipe d'experts est à votre écoute pour vous accompagner tout au long de votre projet.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Ruler,
      title: "Le sur-mesure",
      description:
        "Chaque projet est unique. Nous réalisons un travail entièrement sur mesure, adapté à vos contraintes et envies. De la conception à l'installation, chaque détail compte.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Package,
      title: "Les produits proposés",
      description:
        "Une gamme complète de menuiseries pour tous les besoins : PVC, aluminium, bois, garantis 10 ans. Nous sélectionnons uniquement des matériaux de qualité supérieure.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Award,
      title: "Les agréments",
      description:
        "Nous sommes partenaires agréés pour la distribution et l'installation de produits SOMFY et DICKSON. Des certifications qui garantissent notre expertise.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: "Garantie 10 ans",
      description: "Tous nos produits sont garantis 10 ans pièces et main d'œuvre",
    },
    {
      icon: Clock,
      title: "35 ans d'expérience",
      description: "Plus de trois décennies d'expertise dans la menuiserie",
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction client",
      description: "95% de clients satisfaits recommandent nos services",
    },
    {
      icon: Star,
      title: "Produits premium",
      description: "Nous travaillons avec les meilleures marques du marché",
    },
    {
      icon: Wrench,
      title: "Installation experte",
      description: "Pose réalisée par des artisans qualifiés et expérimentés",
    },
    {
      icon: Home,
      title: "Showroom",
      description: "Visitez nos showrooms pour découvrir nos produits",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Notre mission",
      description:
        "Offrir des solutions de menuiserie sur mesure qui améliorent le confort, la sécurité et l'esthétique de votre habitat, tout en garantissant des performances énergétiques optimales.",
    },
    {
      icon: CheckCircle2,
      title: "Notre engagement",
      description:
        "Respecter nos délais, assurer un suivi personnalisé, utiliser des matériaux de qualité supérieure et garantir votre satisfaction totale à chaque étape du projet.",
    },
    {
      icon: Star,
      title: "Notre promesse",
      description:
        "Des menuiseries durables, esthétiques et performantes, installées par des artisans passionnés qui mettent leur expertise au service de votre confort.",
    },
  ];

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
              Nos <span className="text-blue-400">Atouts</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Découvrez ce qui fait de nous un partenaire de confiance pour vos
              projets de menuiserie depuis plus de 35 ans.
            </p>
          </div>
        </div>

        {/* Main Strengths */}
        <div className="container mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainStrengths.map((strength, idx) => (
              <Card
                key={idx}
                className="group relative overflow-hidden p-8 hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${strength.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${strength.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <strength.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {strength.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-white py-16 mb-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              Ce qui nous distingue
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalFeatures.map((feature, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 py-16 mb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-blue-400 mb-2">35+</div>
                <div className="text-slate-300">Années d'expérience</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-400 mb-2">
                  2000+
                </div>
                <div className="text-slate-300">Projets réalisés</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-slate-300">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-400 mb-2">10</div>
                <div className="text-slate-300">Ans de garantie</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Profitez de notre expertise et de notre savoir-faire pour
              concrétiser vos idées
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-slate-100 rounded-full"
                >
                  Demander un devis gratuit
                </Button>
              </Link>
              <Link to="/realisations">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 rounded-full"
                >
                  Voir nos réalisations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AtoutsPage;