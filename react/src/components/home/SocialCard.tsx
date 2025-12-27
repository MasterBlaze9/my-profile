import React from "react";

interface SocialCardProps {
	href: string;
	label: string;
	icon: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ href, label, icon }) => {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
			<img src={icon} alt={label} className="w-6 h-6" />
			<span>{label}</span>
		</a>
	);
};

export default SocialCard;
