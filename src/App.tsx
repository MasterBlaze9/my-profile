
import { useState, useEffect } from 'react';
import { LandingScreen } from './components/landing-screen/LandingScreen';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { PortfolioView } from './components/PortfolioView';
import { useWorldStore } from './store/worldStore';
import './index.css';

export default function App() {
  const world = useWorldStore((state) => state.world);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const languageSwitcher = <LanguageSwitcher />;

  // A interceção crucial: Se for null, mostra o menu de escolha!
  if (!world) {
    return <>{languageSwitcher}<LandingScreen /></>;
  }

  // Só chega aqui se o mundo for 'tcg', 'gaming', 'anime' ou 'books'
  return <>{languageSwitcher}<PortfolioView /></>;
}