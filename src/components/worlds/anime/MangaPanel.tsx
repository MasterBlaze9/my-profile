import type { Project } from '../../../types/Project';

export const MangaPanel = ({ project, index }: { project: Project, index: number }) => {
	// Cria variação visual: alguns painéis são largos, outros altos
	const panelType = index % 3 === 0 ? 'panel-large' : index % 2 === 0 ? 'panel-tall' : 'panel-standard';

	return (
		<article className={`manga-project-panel panel ${panelType}`}>
			<div className="panel-inner">

				{/* Onomatopeia estilo manga (DON! DOOM! FLASH!) */}
				<div className="sfx-text">
					{project.category === 'fullstack' ? 'GOGOGO!!' : 'BAM!'}
				</div>

				<header className="panel-header">
					<h3>{project.title}</h3>
				</header>

				<div className="panel-content">
					<p>{project.description}</p>
				</div>

				<footer className="panel-tech">
					{project.technologies.map(tech => (
						<span key={tech} className="manga-tag">[{tech}]</span>
					))}
				</footer>

			</div>
		</article>
	);
};