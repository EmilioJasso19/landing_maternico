import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Download } from "lucide-react";

export function Hero() {
	return (
		<section className="container mx-auto px-4 py-16 text-center">
			<div className="max-w-4xl mx-auto">
				<Badge className="mb-6 bg-[#F283B5]/10 text-[#F283B5] border-[#F283B5]/20">
					Para madres primerizas con hijos de 0-5 años
				</Badge>
				<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
					Tu compañía perfecta en la
					<span className="text-[#F283B5]"> maternidad</span>
				</h1>
				<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
					MaterniCo te acompaña en cada paso del desarrollo de tu hijo durante
					sus primeros 5 años, brindándote confianza, información confiable y
					una comunidad de apoyo.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<a href="/download/app/maternico-app.apk">
						<Button
							size="lg"
							className="bg-[#F283B5] hover:bg-[#F283B5]/90 text-white px-8 py-4 text-lg"
						>
							<Download className="mr-2 h-5 w-5" />
							Descargar MaterniCo Gratis
						</Button>
					</a>
					<a href="#screenshots">
						<Button
							size="lg"
							variant="outline"
							className="border-[#10B9A7] text-[#10B9A7] hover:bg-[#10B9A7] hover:text-white px-8 py-4 text-lg bg-transparent"
						>
							Ver Características
						</Button>
					</a>
				</div>
			</div>
			<HeroImage />
		</section>
	);
}

function HeroImage() {
	return (
		<div className="mt-16 relative">
			<div className="bg-gradient-to-r from-[#F283B5]/10 to-[#3BC1C1]/10 rounded-3xl p-8">
				<Image
					src="/mockups/login.png"
					alt="MaterniCo App Interface"
					height={800}
					width={400}
					className="mx-auto rounded-2xl shadow-2xl"
				/>
			</div>
		</div>
	);
}
