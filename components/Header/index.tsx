import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
	return (
		<header className="container mx-auto px-4 py-6">
			<nav className="flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<Image
						src="/MaternicoLetra.svg"
						alt="MaterniCo Logo"
						width={300}
						height={300}
					/>
				</div>
				<div className="hidden md:flex items-center space-x-6">
					<NavLink href="#caracteristicas">Características</NavLink>
					<NavLink href="#testimonios">Testimonios</NavLink>
					<NavLink href="#descarga">Descargar</NavLink>
					<Button className="bg-[#10B9A7] hover:bg-[#3BC1C1] text-white">
						Comenzar mi Viaje Maternal
					</Button>
				</div>
			</nav>
		</header>
	);
}

function NavLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<a
			href={href}
			className="text-gray-700 hover:text-[#F283B5] transition-colors"
		>
			{children}
		</a>
	);
}
