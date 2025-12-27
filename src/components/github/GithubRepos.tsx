// src/components/home/GithubRepos.tsx

import React, { useEffect, useState } from 'react';
import { fetchGithubRepos,type Repo } from '../../services/githubServices';

// --- Sub-Component: Repo Card ---
const RepoCard = ({ repo }: { repo: Repo }) => (
	<div className="group flex flex-col justify-between p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md hover:border-blue-200 transition-all duration-200">
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

// --- Sub-Component: Skeleton Loader ---
const Skeleton = () => (
	<div className="animate-pulse flex flex-col p-6 bg-slate-50 border border-slate-100 rounded-xl">
		<div className="h-5 w-2/3 bg-slate-200 rounded mb-4" />
		<div className="h-4 w-full bg-slate-200 rounded mb-2" />
		<div className="h-4 w-5/6 bg-slate-200 rounded mb-6" />
		<div className="mt-auto flex gap-3">
			<div className="h-9 flex-1 bg-slate-200 rounded-lg" />
			<div className="h-9 flex-1 bg-slate-200 rounded-lg" />
		</div>
	</div>
);

// --- Main Component ---
interface GithubReposProps {
	username: string;
	perPage?: number;
}

const GithubRepos: React.FC<GithubReposProps> = ({ username, perPage = 6 }) => {
	const [repos, setRepos] = useState<Repo[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let isMounted = true;
		setLoading(true);

		fetchGithubRepos(username, perPage)
			.then((data) => {
				if (isMounted) setRepos(data);
			})
			.catch((err) => {
				if (isMounted) setError(err.message);
			})
			.finally(() => {
				if (isMounted) setLoading(false);
			});

		return () => { isMounted = false; };
	}, [username, perPage]);

	if (error) return (
		<div className="max-w-6xl mx-auto px-4 py-12">
			<div className="p-8 text-center text-red-500 bg-red-50 rounded-xl border border-red-100">
				{error}
			</div>
		</div>
	);

	return (
		<section className="max-w-6xl mx-auto px-4 py-12">
			<header className="mb-10">
				<h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Open Source Projects</h2>
				<p className="mt-2 text-slate-500">A collection of my recent work on GitHub</p>
			</header>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{loading
					? Array.from({ length: perPage }).map((_, i) => <Skeleton key={i} />)
					: repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)
				}
			</div>

		
		</section>
	);
};

export default GithubRepos;