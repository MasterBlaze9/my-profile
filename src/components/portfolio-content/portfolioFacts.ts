import type { PortfolioData } from '../../types/PortfolioData';

export const getPortfolioFacts = (data: PortfolioData) => ({
	name: data.name,
	title: data.title,
	hometown: data.bio.hometown,
	currentLocation: data.bio.currentLocation,
	education: data.bio.education,
	background: data.bio.background,
	currentFocus: data.bio.currentFocus,
	primarySkills: data.skills.primary,
	secondarySkills: data.skills.secondary,
	allSkills: [...data.skills.primary, ...data.skills.secondary],
	projects: data.projects,
});
