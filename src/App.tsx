import { Routes, Route } from 'react-router-dom';
import Navbar from './components/app/Navbar';
import Games from './pages/Games';
import Entertainment from './pages/Entertainment';
import NotFound from './pages/NotFound';
import Github from './pages/Github';
import Home from './pages/Home';

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