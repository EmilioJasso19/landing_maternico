"use client";

import Link from "next/link";

export function Footer() {
	const handleLegalDownload = (fileName: string, displayName: string) => {
		const link = document.createElement("a");
		link.href = `/downloads/legal/${fileName}`;
		link.download = displayName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-4 gap-8">
					<CompanyInfo />
					<FooterLinks
						title="Características"
						links={[
							"Calendario Inteligente",
							"Biblioteca Especializada",
							"Localizador de Centros",
							"Comunidad de Apoyo",
						]}
					/>
					<FooterLinks
						title="Soporte"
						links={[
							"Centro de Ayuda",
							"Contacto",
							"Soporte Técnico",
						]}
						emailLinks
					/>
					<LegalLinks onDownload={handleLegalDownload} />
				</div>
				<FooterBottom />
			</div>
		</footer>
	);
}

function LegalLinks({
	onDownload,
}: {
	onDownload: (fileName: string, displayName: string) => void;
}) {
	const legalDocuments = [
		{
			fileName: "AVISO_PRIVACIDAD_MATERNICO.pdf",
			displayName: "Política de Privacidad",
		},
		{ fileName: "AVISO_PRIVACIDAD_MATERNICO.pdf", displayName: "Términos de Uso" },
		{
			fileName: "AVISO_PRIVACIDAD_MATERNICO.pdf",
			displayName: "Eliminación de Cuenta",
		},
		{ fileName: "AVISO_PRIVACIDAD_MATERNICO.pdf", displayName: "Cookies" },
	];

	return (
		<div>
			<h4 className="font-semibold mb-4">Legal</h4>
			<ul className="space-y-2 text-sm text-gray-400">
				{legalDocuments.map((doc, index) => (
                    <a
							href={`/download/legal/${doc.fileName}`}
							className="hover:text-white transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            download={doc.displayName}
						>
					<li key={index}>
							{doc.displayName}
					</li>
                    </a>
				))}
			</ul>
		</div>
	);
}

// El resto del componente Footer permanece igual...
function CompanyInfo() {
	return (
		<div>
			<div className="flex items-center space-x-2 mb-4">
				<div className="w-8 h-8 bg-[#F283B5] rounded-full flex items-center justify-center">
					<span className="text-white font-bold">M</span>
				</div>
				<span className="text-xl font-bold">MaterniCo</span>
			</div>
			<p className="text-gray-400 text-sm">
				Tu compañía perfecta en la maternidad, acompañándote en cada paso del
				desarrollo de tu hijo.
			</p>
		</div>
	);
}

function FooterLinks({
	title,
	links,
	emailLinks = false,
}: {
	title: string;
	links: string[];
	emailLinks?: boolean;
}) {
	return (
		<div>
			<h4 className="font-semibold mb-4">{title}</h4>
			<ul className="space-y-2 text-sm text-gray-400">
				{links.map((link, index) => (
					<li key={index}>
						{emailLinks ? (
							<a
								href="mailto:materni.co2025@gmail.com"
								className="hover:text-white transition-colors"
							>
								{link}
							</a>
						) : (
							<a
								href="#caracteristicas"
								className="hover:text-white transition-colors"
							>
								{link}
							</a>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

function FooterBottom() {
	return (
		<div className="border-t border-gray-800 mt-8 pt-8">
			<div className="flex flex-col md:flex-row justify-between items-center">
				<p className="text-sm text-gray-400">
					© 2025 MaterniCo. Todos los derechos reservados.
				</p>
			</div>
		</div>
	);
}
