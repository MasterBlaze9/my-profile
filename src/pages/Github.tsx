// src/pages/Github.tsx
import React from 'react';
import GithubRepos from '../components/github/GithubRepos';

const Github: React.FC = () => {
	return (
		<div className="flex min-h-screen items-center justify-center bg-white text-gray-900 font-sans p-4">
			<div className="w-full max-w-3xl">
				<GithubRepos username="MasterBlaze9" perPage={8} />
			</div>
		</div>
	);
};

export default Github;
