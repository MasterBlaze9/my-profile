import { useEffect, useState, useMemo } from 'react';
import { steamServices, type SteamUserInfo, type SteamGame } from '../services/steamServices';

const FAVORITE_APP_IDS = [218620, 413150, 105600, 1245620];

export default function Games() {
	const [data, setData] = useState<SteamUserInfo | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState('');
	const [filterFavorites, setFilterFavorites] = useState(false);

	useEffect(() => {
		async function fetchData() {
			try {
				const result = await steamServices.getInfo();
				if (result) setData(result);
				else setError('Profile not found or private.');
			} catch (err) {
				setError('Failed to fetch Steam data.');
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	const filteredGames = useMemo(() => {
		if (!data) return [];
		return data.ownedGames.filter((game) => {
			const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesFavorite = filterFavorites ? FAVORITE_APP_IDS.includes(game.appId) : true;
			return matchesSearch && matchesFavorite;
		});
	}, [data, searchQuery, filterFavorites]);

	if (loading) return (
		<div className="flex h-screen items-center justify-center bg-white">
			<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
		</div>
	);

	return (
		<div className="mx-auto max-w-6xl px-6 py-12 space-y-10 bg-white text-gray-900">
			{/* Header */}
			<header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b pb-8">
				<div className="flex items-center space-x-4">
					<img src={data?.profile.avatar} alt="Avatar" className="w-14 h-14 rounded-xl shadow-sm" />
					<div>
						<h1 className="text-2xl font-black tracking-tight">{data?.profile.personaName}'s Library</h1>
						<p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
							{data?.ownedGames.length} Games Total
						</p>
					</div>
				</div>

				<div className="flex flex-col items-end">
					<span className="text-2xl font-black text-gray-900">
						{Math.floor((data?.ownedGames.reduce((acc, g) => acc + g.playtimeForever, 0) || 0) / 60)}h
					</span>
					<span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Total Playtime</span>
				</div>
			</header>

			{/* Controls */}
			<section className="flex flex-col md:flex-row gap-3 items-center justify-between">
				<input
					type="text"
					placeholder="Search library..."
					className="w-full md:w-64 px-4 py-1.5 text-sm rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>

				<button
					onClick={() => setFilterFavorites(!filterFavorites)}
					className={`px-4 py-1.5 rounded-lg font-bold text-xs transition-all ${filterFavorites
							? 'bg-blue-600 text-white'
							: 'bg-gray-100 text-gray-600 hover:bg-gray-200'
						}`}
				>
					{filterFavorites ? '★ Favorites' : '☆ Show Favorites'}
				</button>
			</section>

			{/* Compact Grid */}
			<section>
				<h2 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
					{filterFavorites ? 'Curated Selection' : 'All Titles'}
				</h2>

				{/* Increased columns: 4 on mobile, 6 on tablet, 8 on desktop */}
				<div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-8">
					{filteredGames.map(game => (
						<GameCard key={game.appId} game={game} />
					))}
				</div>

				{filteredGames.length === 0 && (
					<div className="text-center py-20 text-sm text-gray-400 italic">
						No games match your search.
					</div>
				)}
			</section>
		</div>
	);
}

// Compact Game Card Component
function GameCard({ game }: { game: SteamGame }) {
	return (
		<div className="group flex flex-col items-center text-center">
			{/* Smaller square container with less padding */}
			<div className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-50 border border-gray-100 transition-all group-hover:border-blue-200 group-hover:shadow-sm">
				<img
					src={`https://media.steampowered.com/steamcommunity/public/images/apps/${game.appId}/${game.imgIconUrl}.jpg`}
					alt={game.name}
					className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
				/>
			</div>
			<div className="mt-2 w-full">
				<h3 className="text-[11px] font-bold text-gray-700 leading-tight truncate px-1" title={game.name}>
					{game.name}
				</h3>
				<p className="text-[10px] font-medium text-gray-400 mt-0.5">
					{Math.floor(game.playtimeForever / 60)}h
				</p>
			</div>
		</div>
	);
}