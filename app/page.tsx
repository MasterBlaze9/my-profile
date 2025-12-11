import ProfileCard from "@/components/home/ProfileCard";
import SkillList from "@/components/home/SkillList";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col  py-32 px-16 bg-red-600">
        <div className="bg-zinc-600 flex flex-col rounded-xl justify-center align-middle text-center">
        <ProfileCard />
        <SkillList/>
          
          </div>
      </main>
    </div>
  );
}
