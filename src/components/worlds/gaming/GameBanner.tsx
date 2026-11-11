import type { Project } from '../../../types/Project';


export const GameBanner = ({ project }: { project: Project, index: number }) => {
	return (
		<article className="game-banner">
			<div className="game-art">
				{/* Placeholder para uma imagem 16:9 */}
				<span className="art-label">Title ID: {project.id.toUpperCase()}</span>
			</div>

			<div className="game-info">
				<h3>{project.title}</h3>
				<p className="game-description">{project.description}</p>

				<div className="game-meta">
					<span className="game-category">Genre: {project.category.toUpperCase()}</span>
					<div className="game-tags">
						{project.technologies.map(tech => (
							<span key={tech} className="tech-tag">{tech}</span>
						))}
					</div>
				</div>

				{/* Simulador de botão de comando (Estilo PS5 "Play") */}
				<button className="play-button">
					<span className="btn-icon">▶</span> Iniciar
				</button>
			</div>
		</article>
	);
};