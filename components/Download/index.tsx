"use client";
import { Button } from "@/components/ui/button";
import {
	Shield,
	Download as DownloadIcon,
	Users,
	Apple,
	Play,
} from "lucide-react";

export function DownloadSection() {
	const handleAPKDownload = () => {
		// Crear un enlace temporal para descargar el APK
		const link = document.createElement("a");
		link.href = "/download/app/maternico-app.apk";
		link.download = "maternico-app.apk";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<section
			id="descarga"
			className="py-20 bg-gradient-to-r from-[#F283B5] to-[#10B9A7]"
		>
			<div className="container mx-auto px-4 text-center">
				<div className="max-w-3xl mx-auto text-white">
					<h2 className="text-4xl font-bold mb-6">
						Comienza tu viaje maternal hoy
					</h2>
					<p className="text-xl mb-8 opacity-90">
						Únete a miles de madres que ya confían en MaterniCo para el cuidado
						de sus hijos
					</p>

					<DownloadButtons onAPKDownload={handleAPKDownload} />
					<FeatureHighlights />
				</div>
			</div>
		</section>
	);
}

function DownloadButtons({ onAPKDownload }: { onAPKDownload: () => void }) {
	return (
		<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
			{/* Botón para descargar APK directamente */}
			<Button
				size="lg"
				className="bg-white text-[#10B9A7] hover:bg-gray-100 px-8 py-4"
				onClick={onAPKDownload}
			>
				<DownloadIcon className="mr-2 h-6 w-6" />
				Descargar APK Directo
			</Button>

			{/* Botón alternativo para Google Play */}
			<Button
				size="lg"
				className="bg-white text-[#3BC1C1] hover:bg-gray-100 px-8 py-4"
				onClick={() => window.open("https://play.google.com", "_blank")}
			>
				<Play className="mr-2 h-6 w-6" />
				Próximamente en Google Play
			</Button>
		</div>
	);
}

function FeatureHighlights() {
	const features = [
		{ icon: Shield, text: "Datos seguros" },
		{ icon: DownloadIcon, text: "Descarga gratuita" },
		{ icon: Users, text: "Comunidad activa" },
	];

	return (
		<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm opacity-80">
			{features.map((feature, index) => (
				<div key={index} className="flex items-center">
					<feature.icon className="h-5 w-5 mr-2" />
					{feature.text}
				</div>
			))}
		</div>
	);
}
