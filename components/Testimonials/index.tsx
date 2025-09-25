import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export function Testimonials() {
	const testimonials = [
		{
			text: "Muy pronto aquí podrás leer lo que opinan nuestras usuarias.",
			type: "Experiencias reales",
		},
		{
			text: "Estamos recopilando las primeras historias de mamás que confían en MaterniCo.",
			type: "Historias reales",
		},
		{
			text: "Pronto podrás conocer experiencias reales que inspiran y acompañan.",
			type: "Testimonios reales",
		},
	];

	return (
		<section
			id="testimonios"
			className="py-20 bg-gradient-to-r from-[#F4D1BA]/20 to-[#3BC1C1]/10"
		>
			<div className="container mx-auto px-4">
				<SectionHeader
					title="Testimonios próximamente"
					description="Muy pronto compartiremos las experiencias de mamás que ya están usando MaterniCo"
				/>

				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<TestimonialCard key={index} {...testimonial} />
					))}
				</div>
			</div>
		</section>
	);
}

function TestimonialCard({ text, type }: { text: string; type: string }) {
	return (
		<Card className="bg-white/80 backdrop-blur-sm">
			<CardContent className="p-6 text-center">
				<div className="flex items-center justify-center mb-4">
					{[...Array(5)].map((_, i) => (
						<Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
					))}
				</div>
				<p className="text-gray-700 mb-4 italic">{text}</p>
				<div className="flex items-center justify-center">
					<div>
						<p className="font-semibold text-gray-400">Próximamente</p>
						<p className="text-sm text-gray-400">{type}</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}