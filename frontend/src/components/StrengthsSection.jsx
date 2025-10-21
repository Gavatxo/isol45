import React from "react";
import { Card } from "@/components/ui/card";
import { Users, Ruler, Package, Award } from "lucide-react";

const strengths = [
  {
    icon: Users,
    title: "Le professionnalisme",
    description:
      "Nous étudions vos demandes avec attention et vous conseillons sur les meilleures solutions adaptées à vos besoins.",
  },
  {
    icon: Ruler,
    title: "Le sur-mesure",
    description:
      "Chaque projet est unique. Nous réalisons un travail entièrement sur mesure, adapté à vos contraintes et envies.",
  },
  {
    icon: Package,
    title: "Les produits proposés",
    description:
      "Une gamme complète de menuiseries pour tous les besoins : PVC, aluminium, bois, garantis 10 ans.",
  },
  {
    icon: Award,
    title: "Les agréments",
    description:
      "Nous sommes partenaires agréés pour la distribution et l'installation de produits SOMFY et DICKSON.",
  },
];

const StrengthsSection = () => {
  return (
    <section
      id="atouts"
      className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 relative overflow-hidden"
      data-testid="strengths-section"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
            data-testid="strengths-title"
          >
            Nos <span className="text-blue-400">atouts</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Plus de 35 ans d'expérience au service de votre satisfaction
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, idx) => (
            <Card
              key={idx}
              className="bg-white/10 backdrop-blur-md border-white/20 p-8 hover:bg-white/15 transition-all duration-300 group"
              data-testid={`strength-card-${idx}`}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-300">
                <strength.icon className="w-8 h-8 text-blue-300" />
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold text-white mb-4"
                data-testid={`strength-title-${idx}`}
              >
                {strength.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed text-sm">
                {strength.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;