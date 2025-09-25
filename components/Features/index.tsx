import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { Calendar, BookOpen, MapPin, Users } from "lucide-react";

export function Features() {
	const features = [
		{
			icon: Calendar,
			title: "Calendario Inteligente",
			description:
				"Recordatorios de citas médicas, vacunas, alimentación y desarrollo personalizado",
			color: "#F283B5",
		},
		{
			icon: BookOpen,
			title: "Biblioteca Especializada",
			description:
				"Revistas mensuales, videos informativos y contenido respaldado por profesionales",
			color: "#10B9A7",
		},
		{
			icon: MapPin,
			title: "Centros de Salud",
			description:
				"Localiza centros médicos cercanos con información de contacto y especialidades",
			color: "#3BC1C1",
		},
		{
			icon: Users,
			title: "Comunidad de Apoyo",
			description:
				"Conecta con otras madres, comparte experiencias y recibe apoyo profesional",
			color: "#F4D1BA",
		},
	];

	return (
		<section id="caracteristicas" className="py-20 bg-white">
			<div className="container mx-auto px-4">
				<SectionHeader
					title="Todo lo que necesitas en una sola app"
					description="Funcionalidades diseñadas específicamente para acompañarte en la crianza de tu hijo"
				/>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<FeatureCard key={index} {...feature} />
					))}
				</div>
			</div>
		</section>
	);
}

function FeatureCard({
	icon: Icon,
	title,
	description,
	color,
}: {
	icon: React.ComponentType<{ className?: string }>;
	title: string;
	description: string;
	color: string;
}) {
	return (
		<Card
			className={`border-[${color}]/20 hover:border-[${color}]/40 transition-colors`}
		>
			<CardContent className="p-6 text-center">
				<div
					className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
					style={{ backgroundColor: `${color}10` }}
				>
					<Icon className="h-8 w-8" style={{ color }} />
				</div>
				<h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
				<p className="text-gray-600 text-sm">{description}</p>
			</CardContent>
		</Card>
	);
}
