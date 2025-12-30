import { type Project } from '../../data/projects';

const ProjectCard = ({ project }: { project: Project }) => (
	<div className="group flex flex-col justify-between p-6 bg-white border border-brand rounded-xl rounded-2xl shadow-xl overflow-hidden border-t-8 border-brand">
		<div>
			<div className="flex justify-between items-start mb-2">
				<h3 className="text-lg font-bold truncate transition-colors">
					{project.name}
				</h3>
			</div>
			<p className="text-sm text-slate-700 mb-2">
				{project.description}
			</p>
			<div className="flex flex-wrap gap-2 mb-2">
				{project.techStack.map((tech) => (
					<span key={tech} className="text-xs px-2 py-1 rounded font-medium bg-brand text-white">{tech}</span>
				))}
			</div>
			{project.image && (
				<img src={project.image} alt={project.name + ' screenshot'} className="w-full h-32 object-cover rounded mb-2" />
			)}
		</div>
		<div className="mt-4 flex gap-3">
			{project.githubUrl && (
				<a
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex-1 text-center py-2 text-sm font-semibold rounded-lg transition-colors"
				>
					Code
				</a>
			)}
			{project.liveDemoUrl && (
				<a
					href={project.liveDemoUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="flex-1 text-center py-2 text-sm font-semibold rounded-lg hover:text-white transition-colors"
				>
					Demo
				</a>
			)}
		</div>
	</div>
);

export default ProjectCard;
