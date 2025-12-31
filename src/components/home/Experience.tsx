import React from "react";
import { experience } from "../../data/profile";

const Experience: React.FC = () => (
	<section className="w-full max-w-3xl bg-white text-gray-900 rounded-2xl shadow-lg border-t-4 border-brand p-8 mb-4 border border-gray-100">
		<h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
		<ul className="space-y-3">
			{experience.map((exp, idx) => (
				<li key={idx}>
					<span className="font-semibold">{exp.company} ({exp.period}):</span>
					<ul className="list-disc list-inside ml-6">
						{exp.roles.map((role, i) => (
							<li key={i}>{role}</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	</section>
);

export default Experience;
