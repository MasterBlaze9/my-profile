import React from "react";

import AboutMe from "../components/home/AboutMe";
import Hobbies from "../components/home/Hobbies";
import Education from "../components/home/Education";
import Experience from "../components/home/Experience";
import SkillList from "../components/home/SkillList";


const Home: React.FC = () => (
	<div className="w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center p-0 m-0">
		<main className="flex flex-col items-center justify-center w-full max-w-5xl p-4 gap-6">
			<AboutMe />
			<SkillList />
			<Experience />
			<Hobbies />
			<Education />
		</main>
	</div>
);

export default Home;
