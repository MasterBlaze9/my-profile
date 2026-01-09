import React, { useEffect, useRef, useState } from "react";

export interface MovieItem {
	id: number;
	title?: string;
	name?: string;
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
	const cacheRef = useRef<{ [key: number]: MovieItem[] }>({});

	const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		const fetchListDetails = async () => {
			if (cacheRef.current[listId]) {
				setItems(cacheRef.current[listId]);
				setLoading(false);
				return;
			}
			setLoading(true);
			try {
				const response = await fetch(
					`https://api.themoviedb.org/4/list/${listId}?language=pt-PT`,
					{
						headers: {
							Authorization: `Bearer ${API_TOKEN}`,
							'Content-Type': 'application/json;charset=utf-8'
						}
					}
				);

				if (!response.ok) throw new Error("Error loading the list");

				const data = await response.json();
				setItems(data.results || []);
				cacheRef.current[listId] = data.results || [];
			} catch (error) {
				console.error("Error fetching movies:", error);
			} finally {
				setLoading(false);
			}
		};

		if (listId) fetchListDetails();
	}, [listId, API_TOKEN]);

	return (
		<div>
			{loading ? (
				<div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-10">
					{[...Array(12)].map((_, i) => (
						<div key={i} className="aspect-square animate-pulse rounded-2xl bg-gray-100 border border-gray-200" />
					))}
				</div>
			) : (
				<>
					<div className="flex items-center justify-between mb-8 border-b border-gray-50 pb-4">
						<h2 className="text-[10px] font-black uppercase tracking-widest text-gray-400">
							Collection ({items.length})
						</h2>
					</div>

					{items.length === 0 ? (
						<div className="text-center py-32">
							<p className="text-sm text-gray-400 italic font-medium">This list is empty</p>
						</div>
					) : (
						<div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-10">
							{items.map((item) => (
								<MovieCard key={item.id} item={item} imageBaseUrl={IMAGE_BASE_URL} />
							))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

function MovieCard({ item, imageBaseUrl }: { item: MovieItem; imageBaseUrl: string }) {
	return (
		<div className="group flex flex-col items-center text-center">
			<div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-lg group-hover:shadow-blue-50">
				<img
					src={item.poster_path
						? `${imageBaseUrl}${item.poster_path}`
						: "https://via.placeholder.com/500x750?text=No+Poster"
					}
					alt={item.title || item.name}
					loading="lazy"
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				<div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-black text-gray-800 shadow-sm">
					★ {item.vote_average.toFixed(1)}
				</div>
			</div>
			<div className="mt-3 w-full">
				<h3 className="text-[11px] font-black text-gray-800 leading-tight truncate px-1" title={item.title || item.name}>
					{item.title || item.name}
				</h3>
				<p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-tighter">
					{(item.release_date || item.first_air_date || "").split("-")[0]}
				</p>
			</div>
		</div>
	);
}