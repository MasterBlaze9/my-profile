import React from "react";
import { hobbies } from "../../data/profile";

const Hobbies: React.FC = () => (
	<section className="w-full max-w-3xl bg-white text-gray-900 rounded-2xl shadow-lg border-t-4 border-brand p-8 mb-4 border border-gray-100">
		<h3 className="text-xl font-semibold mb-4">Hobbies and Interests</h3>
		<ul className="list-disc list-inside space-y-2">
			{hobbies.map((hobby, idx) => (
				<li key={idx}>
					<span className="font-semibold">{hobby.title}:</span> {hobby.description}
				</li>
			))}
		</ul>
	</section>
);

export default Hobbies;
