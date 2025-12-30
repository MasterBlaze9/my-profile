export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'my-profile',
    name: 'My Profile',
    description: 'A personal portfolio showcasing my skills, projects, and interests.',
    techStack: ['React', 'TypeScript', 'Vite', 'Leaflet'],
    githubUrl: 'https://github.com/MasterBlaze9/my-profile',
  
  },
	{
		id: "2",
		name: "Factory Manager",
		description: "A full-stack manufacturing platform built with Django and a hybrid database architecture (PostgreSQL & MongoDB). It manages complex supply chain workflows, including component ordering, real-time warehouse stock tracking, and production line management, ensuring seamless integration between raw materials and finished electronic goods.",
		techStack: ["Python", "Django","MongoDB", "PostgreSQL","HTML","CSS", "JavaScript" ],
		githubUrl: "https://github.com/MasterBlaze9/Factory-Manager"
	},
	{
		id: "3",
		name: "LocalCompass",
		description: "",
		techStack: ["Java","Spring Boot" ,"PostgreSQL", "HTML", "CSS", "JavaScript"],
		githubUrl: "https://github.com/MasterBlaze9/localCompass"
	},
];
