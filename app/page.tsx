import ProfileCard from "@/components/home/ProfileCard";
import SkillList from "@/components/home/SkillList";
import SocialCard from "@/components/home/SocialCard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-light font-sans p-4">
      <main className="w-full max-w-3xl">
        <div className="bg-white flex flex-col rounded-2xl shadow-2xl overflow-hidden border-t-8 border-brand">
          <div className="p-10 md:p-16 flex flex-col items-center">
            <ProfileCard />

            <div className="flex flex-row gap-4 my-8 w-full justify-center">
              <SocialCard href={"https://github.com/MasterBlaze9"} label={"Github"} iconSrc={
                "/images/github-icon.svg"
              }              
              />
            
           
              <SocialCard href={"https://www.linkedin.com/in/ruissimoes/"} label={"LinkedIn"} iconSrc={"/images/linkedin-icon.svg"}
              />
            </div>

            <SkillList />
          </div>
        </div>
      </main>
    </div>
  );
}
