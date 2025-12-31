
import { skills } from "../../data/skills";


const SkillList: React.FC = () => {
	return (
		<section className="w-full max-w-3xl bg-white text-gray-900 rounded-2xl shadow-lg border-t-4 border-brand p-8 mb-4 border border-gray-100">
			<h3 className="text-xl font-semibold mb-4">Skills</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
				{skills.map((skill) => (
					<div key={skill.id} className="flex items-center gap-3 p-4 bg-gray-50 text-gray-900 rounded-xl border border-gray-100 shadow-sm">
						{skill.icon ? (
							<img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" />
						) : (
							<div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-xs text-gray-500">
								{skill.name[0]}
							</div>
						)}
						<div className="text-left">
							<p className="font-bold text-sm">{skill.name}</p>
							<p className="text-xs">Level: {skill.level}/5</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default SkillList;