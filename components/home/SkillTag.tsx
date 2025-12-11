import { Skill } from "@/public/data/skills";
import Image from "next/image";

interface SkillTagProps {
  skill: Skill;
}

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <li className="flex flex-1 items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      {/* Icon */}
      <Image
        src={skill.icon}
        alt={skill.name}
        width={32}
        height={32}
        className="object-contain"
      />

      {/* Name + Level */}
      <div className="flex flex-col">
        <span className="font-medium text-gray-800">{skill.name}</span>

        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              className={`w-2 h-2 rounded-full ${
                n <= skill.level ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </li>
  );
}
