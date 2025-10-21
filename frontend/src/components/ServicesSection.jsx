import React from "react";
import { Card } from "@/components/ui/card";
import { DoorOpen, Blinds, SunMedium, Home, Fence, SquareDashedBottom } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Fenêtres",
    description:
      "Fenêtres PVC, aluminium et bois sur mesure. Isolation thermique et phonique optimale.",
    image:
      "https://images.unsplash.com/photo-1626005592101-018b4e09eb5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwdmMlMjB3aW5kb3dzfGVufDB8fHx8MTc2MTA0MTE5OXww&ixlib=rb-4.1.0&q=85",
  },
  {
    icon: DoorOpen,
    title: "Portes",
    description:
      "Portes d'entrée et portes de garage personnalisées. Sécurité et esthétique garanties.",
    image:
      "https://images.unsplash.com/photo-1758998202918-d921125a700f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBkb29yc3xlbnwwfHx8fDE3NjEwNDEyMTJ8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    icon: Blinds,
    title: "Volets",
    description:
      "Volets battants, roulants et coulissants. Protection et confort au quotidien.",
    image:
      "https://images.unsplash.com/photo-1664284534101-174ad3c28587?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHx3b29kZW4lMjBzaHV0dGVyc3xlbnwwfHx8fDE3NjEwNDEyMjB8MA&ixlib=rb-4.1.0&q=85",
  },
  {
    icon: SunMedium,
    title: "Pergolas",
    description:
      "Pergolas bioclimatiques Brustor. Profitez de votre extérieur toute l'année.",
    image:
      "https://images.unsplash.com/photo-1696846912973-3233cc80bf86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwZXJnb2xhfGVufDB8fHx8MTc2MTAwNDI0M3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    icon: SquareDashedBottom,
    title: "Stores",
    description:
      "Stores intérieurs et extérieurs. Solutions d'ombrage élégantes et pratiques.",
    image:
      "https://images.unsplash.com/photo-1696846912293-9a8013e17403?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxwZXJnb2xhfGVufDB8fHx8MTc2MTAwNDI0M3ww&ixlib=rb-4.1.0&q=85",
  },
  {
    icon: Fence,
    title: "Clôtures & Portails",
    description:
      "Clôtures et portails sur mesure. Délimitez votre propriété avec style.",
    image:
      "https://images.unsplash.com/photo-1740131371833-81eacf64356b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBwdmMlMjB3aW5kb3dzfGVufDB8fHx8MTc2MTA0MTE5OXww&ixlib=rb-4.1.0&q=85",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-24 bg-white"
      data-testid="services-section"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
            data-testid="services-title"
          >
            Nos <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Une gamme complète de menuiseries pour tous vos projets de
            rénovation et construction
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              data-testid={`service-card-${idx}`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-2xl font-bold text-slate-900 mb-3"
                  data-testid={`service-title-${idx}`}
                >
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;