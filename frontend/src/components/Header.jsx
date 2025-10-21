import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Header = ({ isScrolled }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-testid="logo"
          >
            <div className="text-2xl font-bold text-blue-900">
              ISOL<span className="text-blue-600">45</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8" data-testid="nav">
            <button
              onClick={() => scrollToSection("services")}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              data-testid="nav-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("realisations")}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              data-testid="nav-realisations"
            >
              Réalisations
            </button>
            <button
              onClick={() => scrollToSection("atouts")}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              data-testid="nav-atouts"
            >
              Nos atouts
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="tel:0974567710"
              className="hidden lg:flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors"
              data-testid="phone-link"
            >
              <Phone size={18} />
              <span className="font-medium">09 74 56 77 10</span>
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
              data-testid="devis-button"
            >
              Devis gratuit
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;