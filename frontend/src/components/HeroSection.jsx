import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Wrench } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1626005592101-018b4e09eb5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwdmMlMjB3aW5kb3dzfGVufDB8fHx8MTc2MTA0MTE5OXww&ixlib=rb-4.1.0&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-slate-900/85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
            data-testid="hero-badge"
          >
            <Award className="w-4 h-4 text-blue-300" />
            <span className="text-white text-sm font-medium">
              Plus de 35 ans d'expertise
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
            data-testid="hero-title"
          >
            Menuiseries PVC, Alu & Bois
            <br />
            <span className="text-blue-300">Sur Mesure</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed"
            data-testid="hero-subtitle"
          >
            Conception, fabrication et pose de fenêtres, portes, volets, pergolas
            et stores. Un savoir-faire artisanal au service de votre confort.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all group"
              data-testid="hero-cta-devis"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-8 py-6 text-lg rounded-full font-semibold transition-all"
              data-testid="hero-cta-contact"
            >
              Nous contacter
            </Button>
          </div>

          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Shield, text: "Garantie 10 ans" },
              { icon: Award, text: "Partenaire agréé SOMFY" },
              { icon: Wrench, text: "Fabrication sur mesure" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20"
                data-testid={`hero-feature-${idx}`}
              >
                <feature.icon className="w-5 h-5 text-blue-300" />
                <span className="text-white font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10" />
    </section>
  );
};

export default HeroSection;