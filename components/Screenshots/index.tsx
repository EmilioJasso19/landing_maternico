import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";

export function Screenshots() {
  const features = [
    {
      title: "Calendario Personalizado",
      description: "Organiza todas las citas y recordatorios importantes de tu bebé",
      align: "md:text-right"
    },
    {
      title: "Contenido Especializado",
      description: "Accede a información confiable segmentada por edad",
      align: "md:text-right"
    },
    {
      title: "Comunidad Segura",
      description: "Conecta con otras madres en un ambiente moderado y confiable",
      align: "md:text-left"
    },
    {
      title: "Privacidad Total",
      description: "Control completo sobre tus datos con opciones de privacidad avanzadas",
      align: "md:text-left"
    }
  ];

  return (
    <section id="screenshots" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Diseñada para ti"
          description="Interfaz intuitiva y fácil de usar para madres ocupadas"
        />
        
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-12">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <FeatureText key={index} {...feature} isMobile={true} />
            ))}
          </div>
          <ScreenshotImage isMobile={true} />
        </div>
        
        {/* Desktop Layout - Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 xl:gap-12 items-center">
          <div className="space-y-8 xl:space-y-12">
            {features.slice(0, 2).map((feature, index) => (
              <FeatureText key={index} {...feature} isMobile={false} />
            ))}
          </div>
          
          <ScreenshotImage isMobile={false} />
          
          <div className="space-y-8 xl:space-y-12">
            {features.slice(2, 4).map((feature, index) => (
              <FeatureText key={index} {...feature} isMobile={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureText({ title, description, align, isMobile }: {
  title: string;
  description: string;
  align: string;
  isMobile: boolean;
}) {
  return (
    <div className={`text-center ${isMobile ? '' : align}`}>
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
        {title}
      </h3>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function ScreenshotImage({ isMobile }: { isMobile: boolean }) {
  return (
    <div className={`
      flex justify-center items-center bg-white rounded-2xl md:rounded-3xl shadow-xl
      ${isMobile 
        ? 'w-full h-64 md:h-80 mx-auto' 
        : 'w-full h-80 xl:h-96 max-w-md xl:max-w-lg mx-auto'
      }
    `}>
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <Image
          src="/mockups/calendar.png"
          alt="MaterniCo App Screenshots"
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 30vw"
        />
      </div>
    </div>
  );
}