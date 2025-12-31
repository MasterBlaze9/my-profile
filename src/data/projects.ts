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
		id: "tech-haven",
		name: "Tech Haven",
		description: "A full-stack manufacturing platform built with Django and a hybrid database architecture (PostgreSQL & MongoDB). It manages complex supply chain workflows, including component ordering, real-time warehouse stock tracking, and production line management, ensuring seamless integration between raw materials and finished electronic goods.",
		techStack: ["Python", "Django","MongoDB", "PostgreSQL","HTML","CSS", "JavaScript" ],
		githubUrl: "https://github.com/MasterBlaze9/Tech-Haven"
	},
	{
		id: "local-compass",
		name: "Local Compass",
		description: "LocalCompass is a web application designed to connect local communities by enabling users to share events, posts, and reports. The platform aims to foster engagement, communication, and collaboration within neighborhoods or interest groups.",
		techStack: ["Java","Spring Boot" ,"PostgreSQL", "HTML", "CSS", "JavaScript"],
		githubUrl: "https://github.com/MasterBlaze9/localCompass"
	},
	{
		id: "wizard-battle",
		name: "Wizard Battle",
		description: "A battle game between two wizards developed in Java, where players control characters who cast spells, collect power-ups, and compete to defeat their opponent.",
		techStack: ["Java","SimpleGraphics", "Apache Ant"],
		githubUrl: "https://github.com/MasterBlaze9/wizzard-battle"
	},
];
