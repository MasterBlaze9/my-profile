export interface Project {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	category: 'frontend' | 'backend' | 'fullstack'
	stats: {
		power: number;
		duration: string;
	};
}