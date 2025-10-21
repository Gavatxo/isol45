import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-slate-900 text-white pt-16 pb-8"
      data-testid="footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold mb-4">
              ISOL<span className="text-blue-400">45</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Plus de 35 ans d'expertise dans la menuiserie PVC, aluminium et
              bois. Votre satisfaction est notre priorité.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                data-testid="facebook-link"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                data-testid="instagram-link"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                data-testid="linkedin-link"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nos Services</h3>
            <ul className="space-y-3">
              {[
                "Fenêtres PVC, Alu & Bois",
                "Portes d'entrée",
                "Volets & Stores",
                "Pergolas bioclimatiques",
                "Portails & Clôtures",
                "Portes de garage",
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-white transition-colors"
                    data-testid={`footer-service-${idx}`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Villemandeur */}
          <div>
            <h3 className="text-lg font-bold mb-4">Villemandeur</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-slate-400">
                  16b Rue Nicéphore Niépce
                  <br />
                  45700 VILLEMANDEUR
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a
                  href="tel:0974567710"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  09 74 56 77 10
                </a>
              </div>
            </div>
          </div>

          {/* Contact Fleury */}
          <div>
            <h3 className="text-lg font-bold mb-4">Fleury-les-Aubrais</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-slate-400">
                  121 Rue André Dessaux
                  <br />
                  45400 FLEURY LES AUBRAIS
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a
                  href="tel:0685209153"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  06 85 20 91 53
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} ISOL 45 SAS. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm transition-colors"
                data-testid="mentions-legales"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm transition-colors"
                data-testid="politique-confidentialite"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white text-sm transition-colors"
                data-testid="cgv"
              >
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;