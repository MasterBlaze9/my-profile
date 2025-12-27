
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/app/Navbar';
import ProfileCard from './components/home/ProfileCard';
import SkillList from './components/home/SkillList';
import SocialCard from './components/home/SocialCard';
import Games from './pages/Games';
import Entertainment from './pages/Entertainment';

import NotFound from './pages/NotFound';
import Github from './pages/Github';

const githubIcon = "/my-profile/images/github-icon.svg";
const linkedinIcon = '/my-profile/images/linkedin-icon.svg';

function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-light font-sans p-4">
      <main className="w-full max-w-3xl">
        <div className="bg-white flex flex-col rounded-2xl shadow-2xl overflow-hidden border-t-8 border-brand">
          <div className="p-10 md:p-16 flex flex-col items-center">
            <ProfileCard />
            <div className="flex flex-row gap-4 my-8 w-full justify-center">
              <SocialCard
                href="https://github.com/MasterBlaze9"
                label="Github"
                icon={githubIcon}
              />
              <SocialCard
                href="https://www.linkedin.com/in/ruissimoes/"
                label="LinkedIn"
                icon={linkedinIcon}
              />
            </div>
            <SkillList />
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/github" element={<Github />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;