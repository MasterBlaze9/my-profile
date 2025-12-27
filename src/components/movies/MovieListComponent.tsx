import React, { useEffect, useState } from "react";

// Definição da interface para os itens da lista (Filme/Série/Anime)
export interface MovieItem {
	id: number;
	title?: string;      // Filmes
	name?: string;       // Séries/Anime
	poster_path: string;
	vote_average: number;
	media_type?: string;
	release_date?: string;
	first_air_date?: string;
}

interface MovieListComponentProps {
	listId: number;
}

export const MovieListComponent: React.FC<MovieListComponentProps> = ({ listId }) => {
	const [items, setItems] = useState<MovieItem[]>([]);
	const [loading, setLoading] = useState(true);

	// Configurações do TMDB (Idealmente no seu ficheiro .env)
	const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		const fetchListDetails = async () => {
			setLoading(true);
			try {
				// Usamos a v4 da API para listas personalizadas
				const response = await fetch(
					`https://api.themoviedb.org/4/list/${listId}?language=pt-PT`,
					{
						headers: {
							Authorization: `Bearer ${API_TOKEN}`,
							'Content-Type': 'application/json;charset=utf-8'
						}
					}
				);

				if (!response.ok) throw new Error("Erro ao carregar lista");

				const data = await response.json();
				setItems(data.results || []);
			} catch (error) {
				console.error("Erro no fetch dos filmes:", error);
			} finally {
				setLoading(false);
			}
		};

		if (listId) fetchListDetails();
	}, [listId, API_TOKEN]);

	// Renderização de Skeletons enquanto carrega
	if (loading) {
		return (
			<div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
				{[...Array(12)].map((_, i) => (
					<div key={i} className="animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 aspect-[2/3]" />
				))}
			</div>
		);
	}

	return (
		<div className="mt-6">
			{items.length === 0 ? (
				<div className="py-20 text-center text-gray-500">
					Esta lista ainda não tem conteúdo.
				</div>
			) : (
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
					{items.map((item) => (
						<div
							key={item.id}
							className="group relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md transition-transform duration-300 hover:scale-105"
						>
							{/* Poster */}
							<img
								src={item.poster_path
									? `${IMAGE_BASE_URL}${item.poster_path}`
									: "https://via.placeholder.com/500x750?text=Sem+Poster"
								}
								alt={item.title || item.name}
								className="h-full w-full object-cover"
								loading="lazy"
							/>

							{/* Overlay com Informações */}
							<div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
								<span className="mb-1 w-fit rounded bg-yellow-500 px-1.5 py-0.5 text-[10px] font-bold text-black">
									★ {item.vote_average.toFixed(1)}
								</span>
								<h3 className="text-sm font-bold text-white line-clamp-2">
									{item.title || item.name}
								</h3>
								<p className="text-[10px] text-gray-300 uppercase">
									{(item.release_date || item.first_air_date || "").split("-")[0]}
								</p>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};