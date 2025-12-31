import React from "react";
import { education } from "../../data/profile";

const Education: React.FC = () => (
	<section className="w-full max-w-3xl bg-white text-gray-900 rounded-2xl shadow-lg border-t-4 border-brand p-8 mb-4 border border-gray-100">
		<h3 className="text-xl font-semibold mb-4">Education</h3>
		<ul className="space-y-3">
			{education.map((edu, idx) => (
				<li key={idx}>
					<span className="font-semibold">{edu.level}:</span>
					<ul className="list-disc list-inside ml-6">
						{edu.details.map((detail, i) => (
							<li key={i}>{detail}</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	</section>
);

export default Education;
