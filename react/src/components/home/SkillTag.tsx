import React from "react";

interface SkillTagProps {
	name: string;
	icon: string;
	level: number;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, icon, level }) => {
	return (
		<div className="flex items-center gap-3 bg-gray-100 rounded-lg p-3 shadow">
			<img src={icon} alt={name} className="w-8 h-8" />
			<div>
				<div className="font-semibold">{name}</div>
				<div className="text-xs text-gray-500">Level: {level}/5</div>
			</div>
		</div>
	);
};

export default SkillTag;
