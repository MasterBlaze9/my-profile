"use client"

import { skills } from "@/public/data/skills"
import SkillTag from "@/components/home/SkillTag";

export default function SkillList() {
	return (
    <div className="flex flex-col my-5 justify-center align-middle text-center">
      <h1>Skills</h1>
      <div className="flex flex-row gap-1 px-2 justify-center align-middle text-center">
        {skills.map((skillItem) => (
          <SkillTag key={skillItem.id} skill={skillItem} />
        ))}
      </div>
    </div>
  );
}