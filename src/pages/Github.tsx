// src/pages/Github.tsx
import React from 'react';
import GithubRepos from '../components/github/GithubRepos';

const Github: React.FC = () => {
	return (
		<div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
			
			<GithubRepos username="MasterBlaze9" perPage={8} />
		</div>
	);
};

export default Github;
