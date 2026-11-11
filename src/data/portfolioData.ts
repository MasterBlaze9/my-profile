import type { PortfolioData } from '../types/PortfolioData';

const baseData: PortfolioData = {
	name: "Rui Simões",
	title: "Software Engineer",

	bio: {
		hometown: "Viseu",
		currentLocation: "Lisboa",
		education: {
			degrees: "CTeSP e Licenciatura",
			graduationYear: 2025,
			durationYears: 5
		},
		background: {
			role: "Low-code Developer",
			company: "Deloitte",
			program: "BrightStart",
			durationYears: 4
		},
		currentFocus: "Frontend Development com forte aptidão arquitetural (React, TypeScript), mantendo fluidez em operações de Backend e Automação."
	},

	skills: {
		primary: ["React", "TypeScript", "JavaScript", "Java"],
		secondary: ["Spring Boot", "Node.js", "Relational DBs", "NoSQL", "OutSystems (Legacy)"]
	},

	projects: [


	]
};

export const getPortfolioData = (language: 'en' | 'pt'): PortfolioData => {
	if (language === 'pt') {
		return baseData;
	}

	return {
		...baseData,
		bio: {
			...baseData.bio,
			education: {
				...baseData.bio.education,
				degrees: 'Higher Technical Course and Bachelor’s Degree',
			},
			background: {
				...baseData.bio.background,
				role: 'Low-code Developer',
			},
			currentFocus: 'Frontend Development with a strong architectural mindset (React, TypeScript), while staying fluent in Backend operations and Automation.',
		},
	};
};

export const myData = baseData;