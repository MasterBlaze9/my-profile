export interface Skill {
  id: number;
  name: string;
  level: 1 | 2 | 3 | 4 | 5; 
  icon: string;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "React Native",
    level: 4, // Experiência profissional na Findmore Solutions [cite: 8, 9]
    icon: "/images/react-native-icon.svg",
  },
  {
    id: 2,
    name: "OutSystems",
    level: 5, // Desenvolveu +10 aplicações na Deloitte [cite: 14, 18]
    icon: "/images/outsystems-icon.svg",
  },
  {
    id: 3,
    name: "React",
    level: 4, // Especializado em tecnologias modernas [cite: 4]
    icon: "/images/react-icon.svg",
  },
  {
    id: 4,
    name: "Java",
    level: 4, // Formação intensiva na Code for All e competência técnica [cite: 6, 24, 32]
    icon: "/images/java-icon.svg",
  },
  {
    id: 5,
    name: "JavaScript",
    level: 4, // Utilização profissional em soluções enterprise [cite: 19, 32]
    icon: "/images/javascript-icon.svg",
  },
  {
    id: 6,
    name: "TypeScript",
    level: 3, // Listado como competência técnica [cite: 32]
    icon: "/images/typescript-icon.svg",
  },
  {
    id: 7,
    name: "SQL Server",
    level: 4,
    icon: "/images/microsoftsqlserver-icon.svg",
  },
   {
    id: 8,
    name: "PostgreSQL",
    level: 4,
    icon: "/images/postgresql-icon.svg",
  },
  {
    id: 9,
    name: "CSS3",
    level: 4, // Interfaces web responsivas [cite: 19, 32]
    icon: "/images/css-icon.svg",
  },

];