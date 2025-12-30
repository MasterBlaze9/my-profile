import React, { useEffect } from 'react';
import { fetchGithubRepos } from '../../services/githubServices';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

interface GithubReposProps {
	username: string;
	perPage?: number;
}

const GithubRepos: React.FC<GithubReposProps> = ({ username, perPage = 6 }) => {

	useEffect(() => {
		let isMounted = true;
		fetchGithubRepos(username, perPage)
		return () => { isMounted = false; };
	}, [username, perPage]);

	return (
		
		<section>
			<header className="mb-10">
				<h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Featured Projects</h2>
				<p className="mt-2 text-slate-500">A selection of my best work and personal favorites.</p>
			</header>
			<div className="grid grid-cols-1 gap-4 mb-12">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>

		</section>
	);
};

export default GithubRepos;