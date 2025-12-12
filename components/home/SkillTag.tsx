import { Skill } from "@/public/data/skills";
import Image from "next/image";

interface SkillTagProps {
  skill: Skill;
}

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-transparent hover:border-brand hover:bg-white hover:shadow-md transition-all duration-300 cursor-default group min-w-[200px]">
  
      <div className="p-2 bg-white rounded-md shadow-sm group-hover:shadow-none transition-shadow">
        <Image
          src={skill.icon}
          alt={skill.name}
          width={24}
          height={24}
          className="object-contain"
        />
      </div>

    
      <div className="flex flex-col flex-1">
        <span className="font-sans font-semibold text-brand-charcoal text-sm mb-1">
          {skill.name}
        </span>

     
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                n <= skill.level
                  ? "bg-brand"
                  : "bg-gray-200" 
              }`}
            />
          ))}
        </div>
      </div>
    </li>
  );
}
