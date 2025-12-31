import React from "react";
import { contact } from "../../data/profile";
import githubIcon from "../../../public/images/github-icon.svg"
import linkedInIcon from "../../../public/images/linkedin-icon.svg"

const Contact: React.FC = () => (
	<section className="w-full bg-white text-center rounded-2xl p-8 mb-4">
		<h3 className="text-xl font-semibold mb-4">Contact Me</h3>
		<div className="flex flex-row gap-4 justify-center">
			<a
				href={contact.github}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-2 p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-105"
			>
				<img
					src={githubIcon}
					alt="GitHub"
					className="w-8 h-8 object-contain"
				/>
			</a>
			<a
				href={contact.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-2 p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-105"
			>
				<img
					src={linkedInIcon}
					alt="LinkedIn"
					className="w-8 h-8 object-contain"
				/>
			</a>
		</div>
	</section>
);

export default Contact;
