import { useWorldStore } from "../../store/worldStore";
import type { ProjectCardProps } from "../../types/ProjectCardProps";
import { MangaPanel as AnimePanel } from "../worlds/anime/MangaPanel";
import { BookChapter } from "../worlds/books/BookChapter";
import { GameBanner as GamingBanner } from "../worlds/gaming/GameBanner";
import { TcgCard } from "../tcg-card/TcgCard";

export const ProjectCard = ({ project }: ProjectCardProps) => {
	const world = useWorldStore((state) => state.world);

	// Fallback de segurança
	if (!world) return null;

	// Um dicionário que mapeia o estado global ao componente de React a renderizar
	const rendererMap = {
		tcg: <TcgCard project={project} />,
		gaming: <GamingBanner project={project} index={0} />,
		anime: <AnimePanel project={project} index={0} />,
		books: <BookChapter project={project} chapterNumber={1} />
	};

	return rendererMap[world];
};