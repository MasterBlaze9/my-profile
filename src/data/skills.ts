export interface Skill {
  id: number;
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  icon?: string;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "Python",
    level: 4,
    icon: "/my-profile/images/python-icon.svg",
  },
 
  { id: 3, name: "Java", level: 4, icon: "/my-profile/images/java-icon.svg" },
  {
    id: 4,
    name: "JavaScript",
    level: 4,
    icon: "/my-profile/images/javascript-icon.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    level: 3,
    icon: "/my-profile/images/typescript-icon.svg",
  },
  { id: 6, name: "HTML5", level: 4, icon: "/my-profile/images/html5-icon.svg" },
  { id: 7, name: "CSS3", level: 4, icon: "/my-profile/images/css-icon.svg" },
  { id: 8, name: "React", level: 4, icon: "/my-profile/images/react-icon.svg" },
  {
    id: 9,
    name: "Django",
    level: 3,
    icon: "/my-profile/images/django-icon.svg",
  },
  {
    id: 10,
    name: "React Native",
    level: 4,
    icon: "/my-profile/images/react-native-icon.svg",
  },

  {
    id: 12,
    name: "Microsoft SQL Server",
    level: 4,
    icon: "/my-profile/images/microsoftsqlserver-icon.svg",
  },
  {
    id: 13,
    name: "PostgreSQL",
    level: 4,
    icon: "/my-profile/images/postgresql-icon.svg",
  },
  {
    id: 14,
    name: "MongoDB",
    level: 3,
    icon: "/my-profile/images/mongodb-icon.svg",
  },

  {
    id: 16,
    name: "Express.js",
    level: 3,
    icon: "/my-profile/images/express-icon.svg",
  },
  {
    id: 17,
    name: "OutSystems",
    level: 5,
    icon: "/my-profile/images/outsystems-icon.svg",
  },
 
 
 
];
