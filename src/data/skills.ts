export interface Skill {
	id: number;
	name: string;
	level: 1 | 2 | 3 | 4 | 5;
}

export const skills: Skill[] = [
  { id: 1, name: 'React Native', level: 4 },
  { id: 2, name: 'OutSystems', level: 5 },
  { id: 3, name: 'React', level: 4 },
  { id: 4, name: 'Java', level: 4 },
  { id: 5, name: 'JavaScript', level: 4 },
  { id: 6, name: 'TypeScript', level: 3 },
  { id: 7, name: 'SQL Server', level: 4 },
  { id: 8, name: 'PostgreSQL', level: 4 },
  { id: 9, name: 'CSS3', level: 4 },
];
