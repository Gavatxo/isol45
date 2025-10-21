import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const realizations = [
  {
    image:
      "https://images.unsplash.com/photo-1600320948479-119fec7452f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBwdmMlMjB3aW5kb3dzfGVufDB8fHx8MTc2MTA0MTE5OXww&ixlib=rb-4.1.0&q=85",
    title: "Fenêtres PVC - Villemandeur",
    category: "Fenêtres",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591019231810-4c7301fb4ccb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHx3b29kZW4lMjBzaHV0dGVyc3xlbnwwfHx8fDE3NjEwNDEyMjB8MA&ixlib=rb-4.1.0&q=85",
    title: "Volets bois - Montargis",
    category: "Volets",
  },
  {
    image:
      "https://images.unsplash.com/photo-1696846912973-3233cc80bf86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwZXJnb2xhfGVufDB8fHx8MTc2MTAwNDI0M3ww&ixlib=rb-4.1.0&q=85",
    title: "Pergola bioclimatique - Sens",
    category: "Pergolas",
  },
  {
    image:
      "https://images.unsplash.com/photo-1685320198649-781e83a61de4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxjYXJwZW50cnklMjB3b3Jrc2hvcHxlbnwwfHx8fDE3NjEwNDEyNDJ8MA&ixlib=rb-4.1.0&q=85",
    title: "Notre atelier",
    category: "Fabrication",
  },
  {
    image:
      "https://images.unsplash.com/photo-1624639948977-b54981cf5d5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxjYXJwZW50cnklMjB3b3Jrc2hvcHxlbnwwfHx8fDE3NjEwNDEyNDJ8MA&ixlib=rb-4.1.0&q=85",
    title: "Savoir-faire artisanal",
    category: "Expertise",
  },
];

const RealizationsSection = () => {
  return (
    <section
      id="realisations"
      className="py-24 bg-slate-50"
      data-testid="realizations-section"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
            data-testid="realizations-title"
          >
            Nos <span className="text-blue-600">réalisations</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations et notre savoir-faire
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            data-testid="realizations-carousel"
          >
            <CarouselContent className="-ml-4">
              {realizations.map((realization, idx) => (
                <CarouselItem
                  key={idx}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                  data-testid={`realization-item-${idx}`}
                >
                  <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                    {/* Image */}
                    <img
                      src={realization.image}
                      alt={realization.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="inline-block px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-xs font-semibold mb-3">
                        {realization.category}
                      </div>
                      <h3 className="text-xl font-bold">
                        {realization.title}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RealizationsSection;