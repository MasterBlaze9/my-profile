import { useEffect, useState, useMemo } from 'react';
import { steamServices, type SteamUserInfo, type SteamGame } from '../services/steamServices';

// Define the IDs for your "Specific List" here
const FAVORITE_APP_IDS = [218620, 413150, 105600, 1245620, 1145360];

export default function Games() {
	const [data, setData] = useState<SteamUserInfo | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Filtering States
	const [searchQuery, setSearchQuery] = useState('');
	const [filterFavorites, setFilterFavorites] = useState(false);

	useEffect(() => {
		async function fetchData() {
			try {
				const result = await steamServices.getInfo();
				if (result) {
					setData(result);
				} else {
					setError('Steam profile is private or not found.');
				}
			} catch (err) {
				setError('Failed to connect to Steam API.');
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	// Filter Logic
	const filteredGames = useMemo(() => {
		if (!data) return [];

		return data.ownedGames.filter((game) => {
			const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
			const matchesFavorite = filterFavorites ? FAVORITE_APP_IDS.includes(game.appId) : true;
			return matchesSearch && matchesFavorite;
		});
	}, [data, searchQuery, filterFavorites]);

	// Loading State
	if (loading) return (
		<div className="flex h-screen items-center justify-center bg-white">
			<div className="flex flex-col items-center gap-4">
				<div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
				<p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Loading Library...</p>
			</div>
		</div>
	);

	return (
		<div className="mx-auto max-w-6xl px-6 py-12 space-y-10 bg-white text-gray-900">

			{/* 1. Error Message (Fixed TS6133) */}
			{error && (
				<div className="p-4 text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl flex justify-between items-center">
					<span><strong>Error:</strong> {error}</span>
					<button onClick={() => window.location.reload()} className="underline font-bold text-xs uppercase">Retry</button>
				</div>
			)}

			{/* 2. Header Section */}
			<header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-8">
				<div className="flex items-center space-x-4">
					<img
						src={data?.profile.avatar}
						alt="Avatar"
						className="w-14 h-14 rounded-xl shadow-sm border border-gray-100"
					/>
					<div>
						<h1 className="text-2xl font-black tracking-tight">{data?.profile.personaName}'s Shelf</h1>
						<a
							href={data?.profile.profileUrl}
							target="_blank"
							rel="noreferrer"
							className="text-[10px] font-bold text-blue-500 uppercase tracking-widest hover:text-blue-700 transition-colors"
						>
							Official Profile ↗
						</a>
					</div>
				</div>

				<div className="flex flex-col items-end">
					<span className="text-3xl font-black text-gray-900">
						{Math.floor((data?.ownedGames.reduce((acc, g) => acc + g.playtimeForever, 0) || 0) / 60)}h
					</span>
					<span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Total Playtime</span>
				</div>
			</header>

			{/* 3. Controls: Search & Toggle */}
			<section className="flex flex-col md:flex-row gap-3 items-center justify-between bg-gray-50/50 p-3 rounded-2xl border border-gray-100">
				<input
					type="text"
					placeholder="Search for a title..."
					className="w-full md:w-72 px-4 py-2 text-sm rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>

				<button
					onClick={() => setFilterFavorites(!filterFavorites)}
					className={`w-full md:w-auto px-5 py-2 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${filterFavorites
							? 'bg-blue-600 text-white shadow-md'
							: 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100 shadow-sm'
						}`}
				>
					{filterFavorites ? '★ Showing Favorites' : '☆ Show Favorites'}
				</button>
			</section>

			{/* 4. Recently Played (Visible only when not searching/filtering) */}
			{!filterFavorites && searchQuery === '' && (data?.recentGames.length ?? 0) > 0 && (
				<section className="animate-in fade-in slide-in-from-bottom-2 duration-500">
					<h2 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
						<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
						Recently Active
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{data?.recentGames.map(game => (
							<div key={game.appId} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
								<img
									src={`https://media.steampowered.com/steamcommunity/public/images/apps/${game.appId}/${game.imgIconUrl}.jpg`}
									className="w-8 h-8 rounded shadow-sm"
									alt={game.name}
								/>
								<div className="overflow-hidden">
									<p className="text-[11px] font-bold text-gray-800 truncate">{game.name}</p>
									<p className="text-xs text-gray-400">
										{/* The (game.playtime2Weeks || 0) ensures we always have a number to divide */}
										{((game.playtime2Weeks || 0) / 60).toFixed(1)}h in the last 2 weeks
									</p>
								</div>
							</div>
						))}
					</div>
				</section>
			)}

			{/* 5. Main Grid (Compact Version) */}
			<section>
				<div className="flex items-center justify-between mb-8 border-b border-gray-50 pb-4">
					<h2 className="text-[10px] font-black uppercase tracking-widest text-gray-400">
						{filterFavorites ? 'Curated Collection' : 'Game Library'} ({filteredGames.length})
					</h2>
				</div>

				<div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-10">
					{filteredGames.map(game => (
						<GameCard key={game.appId} game={game} />
					))}
				</div>

				{filteredGames.length === 0 && (
					<div className="text-center py-32">
						<p className="text-sm text-gray-400 italic font-medium">No results found in your library.</p>
					</div>
				)}
			</section>
		</div>
	);
}

/**
 * Compact Game Card Component
 */
function GameCard({ game }: { game: SteamGame }) {
	return (
		<div className="group flex flex-col items-center text-center">
			<div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-lg group-hover:shadow-blue-50">
				<img
					src={`https://media.steampowered.com/steamcommunity/public/images/apps/${game.appId}/${game.imgIconUrl}.jpg`}
					alt={game.name}
					loading="lazy"
					className="w-full h-full object-contain p-2.5 transition-transform duration-500 group-hover:scale-110"
				/>
			</div>
			<div className="mt-3 w-full">
				<h3 className="text-[11px] font-black text-gray-800 leading-tight truncate px-1" title={game.name}>
					{game.name}
				</h3>
				<p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-tighter">
					{Math.floor(game.playtimeForever / 60)} Hours
				</p>
			</div>
		</div>
	);
}