import {
  python,
  java,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  sqlserver,
  postgres,
  mongodb,
  django,
  outsystems,
  work,
} from "../assets";

import { wizardBattle, techHaven, localCompass } from "../assets/index.js";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Java", icon: java },
  { title: "React", icon: reactjs },
  { title: "JavaScript", icon: javascript },
  { title: "TypeScript", icon: typescript },
  { title: "HTML5", icon: html },
  { title: "CSS3", icon: css },
  { title: "Python", icon: python },
  { title: "Django", icon: django },
  { title: "React Native", icon: reactjs },
  { title: "Microsoft SQL Server", icon: sqlserver },
  { title: "PostgreSQL", icon: postgres },
  { title: "MongoDB", icon: mongodb },
  { title: "Express.js", icon: nodejs },
  { title: "OutSystems", icon: outsystems },
  { title: "Git", icon: git },
  { title: "Tailwind", icon: tailwind }
];

export const technologies = [
  { name: "Java", icon: java },
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "React", icon: reactjs },
  { name: "Django", icon: django },
  { name: "React Native", icon: reactjs },
  { name: "Microsoft SQL Server", icon: sqlserver },
  { name: "PostgreSQL", icon: postgres },
  { name: "MongoDB", icon: mongodb },
  { name: "Express.js", icon: nodejs },



];

export const experiences = [
  {
    title: "React Native Developer",
    company_name: "Findmore Solutions",
    icon: reactjs,
    iconBg: "#161329",
    date: "2025",
    points: [
      "Developed an App in React Native.",
      "Integration with Microsoft Services (Dataverse, Auth, Power Apps).",
    ],
  },
  {
    title: "OutSystems Developer",
    company_name: "Deloitte",
    icon: work,
    iconBg: "#161329",
    date: "2020 - 2024",
    points: [
      "Specializing in Outsystems development (Traditional, Reactive, Mobile).",
      "Engaged in diverse projects across various domains, focusing on delivering high-quality results.",
      "Proficient in Agile methodologies, particularly Scrum.",
      "Experienced in resolving complex challenges, fostering teamwork, and enhancing personal and professional growth.",
    ],
  },
];


export const projects = [
  {
    name: "Tech Haven",
    description:
      "A full-stack manufacturing platform built with Django and a hybrid database architecture (PostgreSQL & MongoDB). It manages complex supply chain workflows, including component ordering, real-time warehouse stock tracking, and production line management, ensuring seamless integration between raw materials and finished electronic goods.",
    tags: [
      { name: "python", color: "blue" },
      { name: "django", color: "green" },
      { name: "mongodb", color: "pink" },
      { name: "postgresql", color: "blue" },
      { name: "html", color: "green" },
      { name: "css", color: "pink" },
      { name: "javascript", color: "blue" },
    ],
    image: techHaven,
    source_code_link: "https://github.com/MasterBlaze9/Tech-Haven",
  },
  {
    name: "Local Compass",
    description:
      "LocalCompass is a web application designed to connect local communities by enabling users to share events, posts, and reports. The platform aims to foster engagement, communication, and collaboration within neighborhoods or interest groups.",
    tags: [
      { name: "java", color: "blue" },
      { name: "spring boot", color: "green" },
      { name: "postgresql", color: "pink" },
      { name: "html", color: "blue" },
      { name: "css", color: "green" },
      { name: "javascript", color: "pink" },
    ],
    image: localCompass, // Add image import if available
    source_code_link: "https://github.com/MasterBlaze9/localCompass",
  },
  {
    name: "Wizard Battle",
    description:
      "A battle game between two wizards developed in Java, where players control characters who cast spells, collect power-ups, and compete to defeat their opponent.",
    tags: [
      { name: "java", color: "blue" },
      { name: "simplegraphics", color: "green" },
      { name: "apache ant", color: "pink" },
    ],
    image: wizardBattle,
    source_code_link: "https://github.com/MasterBlaze9/wizzard-battle",
  },
];
