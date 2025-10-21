import React from "react";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Zap } from "lucide-react";

const brands = [
  {
    name: "VEKA PRESTIGE",
    description:
      "Gamme créative et personnalisable, esthétique et moderne pour vos fermetures.",
    icon: Star,
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "SOMFY",
    description:
      "Solutions motorisées élégantes et pratiques, pour une sécurité optimale et un confort d'utilisation.",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "BRUSTOR",
    description:
      "Pergolas bioclimatiques et solutions de protection solaire fiables pour un meilleur confort.",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
  },
];

const BrandsSection = () => {
  return (
    <section
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
      data-testid="brands-section"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm font-semibold"
            data-testid="brands-badge"
          >
            Nos Partenaires
          </Badge>
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
            data-testid="brands-title"
          >
            Des marques de <span className="text-blue-600">confiance</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nous travaillons exclusivement avec des marques reconnues pour leur
            qualité et leur innovation
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              data-testid={`brand-card-${idx}`}
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{ padding: "2px" }}
              >
                <div className="w-full h-full bg-white rounded-2xl" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <brand.icon className="w-8 h-8 text-white" />
                </div>

                {/* Brand Name */}
                <h3
                  className="text-2xl font-bold text-slate-900 mb-4"
                  data-testid={`brand-name-${idx}`}
                >
                  {brand.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;