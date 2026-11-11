import type { BioData } from "./BioData";
import type {  Project } from "./Project";

export interface PortfolioData {
	name: string;
	title: string;
	bio: BioData;
	skills: {
		primary: string[];
		secondary: string[];
	};
	projects: Project[];
}