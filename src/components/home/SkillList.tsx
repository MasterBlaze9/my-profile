import React from "react";

const skills = [
	{ name: "React Native", icon: "/images/react-native-icon.svg", level: "4/5" },
	{ name: "OutSystems", icon: "/images/outsystems-icon.svg", level: "5/5" },
	{ name: "React", icon: "/images/react-icon.svg", level: "4/5" },
	{ name: "Java", icon: "/images/java-icon.svg", level: "4/5" },
	{ name: "JavaScript", icon: "/images/javascript-icon.svg", level: "4/5" },
	{ name: "TypeScript", icon: "/images/typescript-icon.svg", level: "3/5" },
	{ name: "SQL Server", icon: "/images/microsoftsqlserver-icon.svg", level: "4/5" },
	{ name: "PostgreSQL", icon: "/images/postgresql-icon.svg", level: "4/5" },
	{ name: "CSS3", icon: "/images/css-icon.svg", level: "5/5" },
];

const SkillList: React.FC = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-4">
			{skills.map((skill) => (
				<div key={skill.name} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
					<img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" />
					<div className="text-left">
						<p className="font-bold text-sm text-gray-800">{skill.name}</p>
						<p className="text-xs text-gray-400">Level: {skill.level}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default SkillList;