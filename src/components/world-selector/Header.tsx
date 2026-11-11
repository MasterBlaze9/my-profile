const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => (
	<div className="world-selector-header">
		<h2>{title}</h2>
		{subtitle && <p>{subtitle}</p>}
	</div>
);

export { Header };

