import React from "react";
import { aboutMe } from "../../data/profile";
import profilePic from "../../../public/images/profile-image.png"
import Contact from "./Contact";

const AboutMe: React.FC = () => (
	<section className="w-full max-w-3xl bg-white text-gray-900 rounded-2xl shadow-lg border-t-4 border-brand p-8 mb-4 flex flex-col items-center text-center border border-gray-100">
		<h2 className="flex flex-col text-2xl font-bold mb-2 items-center justify-center gap-2">
			Hi there / Olá
			<div className="rounded-full border-4 border-primary w-64 h-64 overflow-hidden flex items-center justify-center">
				<img src={profilePic} alt="profile-pic" className=" object-cover rounded-full" />
			</div>
		</h2>
		<p className="mb-2 text-lg">I'm {aboutMe.name}. {aboutMe.intro}</p>
		<div className="flex items-center justify-center gap-2 mb-2">
			<span className="font-semibold">Home:</span>
			<span>I'm based in {aboutMe.location}.</span>
			<img src={aboutMe.flag} alt="Portugal Flag" width={25} height={20} className="inline ml-1" />
		</div>
		<div>
			<Contact />
		</div>
	</section>
);

export default AboutMe;
