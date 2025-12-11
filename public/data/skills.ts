export interface Skill {
  id: number;
  name: string;
  level: 1 | 2 | 3 | 4 | 5; 
  icon: string;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "React",
    level: 4,
    icon: "/images/react-svgrepo-com.svg",
  },

  {
    id: 3,
    name: "Tailwind CSS",
    level: 4,
    icon: "/images/tailwind-css-svgrepo-com.svg",
  },
  {
    id: 4,
    name: "Java",
    level: 5,
    icon: "/images/icons8-java.svg",
  },
];