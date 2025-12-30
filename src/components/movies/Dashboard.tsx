import React, { useEffect, useState } from "react";

// Interface para os dados de cada filme/série/anime
export interface MovieItem {
	id: number;
	title?: string;      // Filmes usam 'title'
	name?: string;       // Séries/Anime usam 'name'
	poster_path: string;
	release_date?: string;
	first_air_date?: string;
	vote_average: number;
	media_type: string;
}

export interface MovieListComponentProps {
	listId: number;
}

export const MovieListComponent: React.FC<MovieListComponentProps> = ({ listId }) => {
	const [items, setItems] = useState<MovieItem[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	// Variáveis de ambiente do Vite
	const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		const fetchListData = async () => {
			setLoading(true);
			setError(null);

			try {
				const response = await fetch(
					`https://api.themoviedb.org/4/list/${listId}?language=pt-BR`,
					{
						headers: {
							Authorization: `Bearer ${API_TOKEN}`,
							'Content-Type': 'application/json;charset=utf-8'
						}
					}
				);

				if (!response.ok) {
					throw new Error("Não foi possível carregar os dados da lista.");
				}

				const data = await response.json();
				// Na API v4, os itens estão em data.results
				setItems(data.results || []);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Ocorreu um erro");
			} finally {
				setLoading(false);
			}
		};

		if (listId) {
			fetchListData();
		}
	}, [listId, API_TOKEN]);

	// Estado de Carregamento
	if (loading) {
		return (
			<div className="flex justify-center items-center h-64">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
			</div>
		);
	}

	// Estado de Erro
	if (error) {
		return (
			<div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg">
				{error}
			</div>
		);
	}

	// Se a lista estiver vazia
	if (items.length === 0) {
		return <div className="text-gray-400 text-center py-20">Esta lista não contém itens.</div>;
	}

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
			{items.map((item) => (
				<div
					key={item.id}
					className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20"
				>
					{/* Imagem do Poster */}
					<div className="aspect-[2/3] w-full">
						<img
							src={item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : "https://via.placeholder.com/500x750?text=Sem+Poster"}
							alt={item.title || item.name}
							className="w-full h-full object-cover"
							loading="lazy"
						/>
					</div>

			
					<div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-xs font-bold border">
						★ {item.vote_average.toFixed(1)}
					</div>

				
					<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
						<h3 className="text-white text-sm font-bold leading-tight line-clamp-2">
							{item.title || item.name}
						</h3>
						<p className="text-gray-300 text-[10px] mt-1 uppercase tracking-wider">
							{item.media_type === 'tv' ? 'Série / Anime' : 'Filme'} • {
								(item.release_date || item.first_air_date || "").split('-')[0]
							}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};