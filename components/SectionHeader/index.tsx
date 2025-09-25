export function SectionHeader({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="text-center mb-16">
			<h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
			<p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
		</div>
	);
}