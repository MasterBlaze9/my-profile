import type { Project } from '../../types/Project';
import './TcgCard.css'; 

export const TcgCard = ({ project }: { project: Project }) => (
	<div className="tcg-card">
		<div className="tcg-card-border">
			<h3 className="tcg-title">{project.title}</h3>
			<div className="tcg-image-placeholder">
				{/* Simula a arte da carta */}
				<span>{project.technologies[0]} Artifact</span>
			</div>
			<div className="tcg-description">
				<p>{project.description}</p>
			</div>
			<div className="tcg-stats">
				<span>PWR {project.stats?.power || 100}</span>
				<span>{project.technologies.join(' / ')}</span>
			</div>
		</div>
	</div>
);