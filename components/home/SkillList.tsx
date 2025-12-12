"use client"

import { skills } from "@/public/data/skills"
import SkillTag from "@/components/home/SkillTag";

export default function SkillList() {
	return (
    <div className="flex flex-col my-8 w-full">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="font-display text-2xl font-bold text-brand-charcoal">
          Skills
        </h2>
        <div className="h-1 flex-1 bg-brand-light rounded-full"></div>
      </div>
      <ul className="flex flex-wrap gap-4 justify-center sm:justify-start">
        {skills.map((skillItem) => (
          <SkillTag key={skillItem.id} skill={skillItem} />
        ))}
      </ul>
    </div>
  );
}