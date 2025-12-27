// src/services/githubServices.ts

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  homepage?: string;
  owner: {
    login: string;
  };
  fork: boolean;
}

export async function fetchGithubRepos(username: string, limit: number = 6): Promise<Repo[]> {
  // We fetch more than the limit (30) to ensure we have enough after filtering out forks
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`
  );

  if (!response.ok) {
    if (response.status === 403) {
      throw new Error('GitHub API rate limit exceeded. Please try again later.');
    }
    throw new Error('Failed to fetch repositories');
  }

  const repos: Repo[] = await response.json();

  return repos
    .filter((repo) => !repo.fork && repo.owner.login === username)
    .slice(0, limit);
}