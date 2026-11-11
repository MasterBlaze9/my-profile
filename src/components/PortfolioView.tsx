import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getPortfolioData } from "../data/portfolioData";
import { useWorldStore } from "../store/worldStore";
import { AnimeInterface } from "./worlds/anime/AnimeInterface";
import { BookInterface } from "./worlds/books/BookInterface";
import { GamingInterface } from "./worlds/gaming/GamingInterface";
import { TcgInterface } from "./worlds/tcg/TcgInterface";


export const PortfolioView = () => {
	const world = useWorldStore((state) => state.world);
	const setWorld = useWorldStore((state) => state.setWorld);
	const { i18n } = useTranslation();

	const portfolioData = getPortfolioData(i18n.language.startsWith('pt') ? 'pt' : 'en');

	// Sistema de Auto-Recuperação: Limpa lixo do localStorage
	useEffect(() => {
		const validWorlds = ['tcg', 'gaming', 'anime', 'books'];
		if (world && !validWorlds.includes(world)) {
			console.warn(`Mundo inválido detetado (${world}). A repor sistema...`);
			setWorld(null);
		}
	}, [world, setWorld]);

	const renderWorldInterface = () => {
		switch (world) {
			case 'tcg':
				return <TcgInterface data={portfolioData} />;
			case 'gaming':
				return <GamingInterface data={portfolioData} />;
			case 'anime':
				return <AnimeInterface data={portfolioData} />;
			case 'books':
				return <BookInterface data={portfolioData} />;
			default:
				// Enquanto o useEffect não atuar (fração de segundo), não renderiza nada
				return null;
		}
	};

	return (
		<div className={`portfolio-wrapper mode-${world}`}>
			

			{renderWorldInterface()}
		</div>
	);
};