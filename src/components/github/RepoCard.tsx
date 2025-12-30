import { type Repo } from '../../services/githubServices';

const RepoCard = ({ repo }: { repo: Repo }) => (
	<div className="group flex flex-col justify-between p-6 bg-white border rounded-xl hover:shadow-md hover:border-blue-200 transition-all duration-200">
		<div>
			<div className="flex justify-between items-start mb-2">
				<h3 className="text-lg font-bold text-slate-800 truncate group-hover:text-blue-600 transition-colors">
					{repo.name}
				</h3>
				{repo.language && (
					<span className="text-[10px] px-2 py-1 rounded-full bg-slate-100 text-slate-600 font-bold uppercase tracking-wider">
						{repo.language}
					</span>
				)}
			</div>

			<p className="text-sm text-slate-500 line-clamp-2 mb-4 h-10">
				{repo.description || "No description provided."}
			</p>

			<div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
				<span className="flex items-center gap-1">⭐ {repo.stargazers_count}</span>
				<span className="flex items-center gap-1">🍴 {repo.forks_count}</span>
			</div>
		</div>

		<div className="mt-6 flex gap-3">
			<a
				href={repo.html_url}
				target="_blank"
				rel="noopener noreferrer"
				className="flex-1 text-center py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
			>
				Code
			</a>
			{repo.homepage && (
				<a
					href={repo.homepage}
					target="_blank"
					rel="noopener noreferrer"
					className="flex-1 text-center py-2 text-sm font-semibold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
				>
					Demo
				</a>
			)}
		</div>
	</div>
);

export default RepoCard;