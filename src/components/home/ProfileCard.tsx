import React from "react";

const profileImage = "/images/profile-image.png";

const ProfileCard: React.FC = () => {
	return (
		<div className="flex flex-col items-center text-center p-6 bg-white rounded-xl w-full">
			<img
				src={profileImage}
				alt="Profile"
				className="w-24 h-24 rounded-full border-4 border-brand mb-4 object-cover"
			/>
			<h2 className="text-2xl font-bold mb-1 text-gray-800">Rui Simões</h2>
			<p className="text-brand text-lg font-medium mb-2">Full Stack Developer</p>
			<p className="text-gray-600 max-w-md">
				Passionate about building scalable web and mobile applications.
				Always learning and exploring new technologies.
			</p>
		</div>
	);
};

export default ProfileCard;