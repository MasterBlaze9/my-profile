import ProfileCard from "@/components/home/ProfileCard";
import SkillList from "@/components/home/SkillList";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-light font-sans p-4">
      <main className="w-full max-w-3xl">
        <div className="bg-white flex flex-col rounded-2xl shadow-2xl overflow-hidden border-t-8 border-brand">
          <div className="p-10 md:p-16 flex flex-col items-center text-center">
            <ProfileCard />

            <div className="w-24 h-1 bg-brand-light rounded-full my-10"></div>

            <SkillList />
          </div>
        </div>
      </main>
    </div>
  );
}
