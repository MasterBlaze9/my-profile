import { useEffect, useState } from 'react';
import { steamServices } from '../services/steamServices';

type SteamUserInfo = {
	profile: {
		personaName?: string;
		profileUrl?: string;
		avatar?: string;
		steamId?: string;
	};
	recentGames: Array<{
		appId: number;
		name: string;
		playtime2Weeks: number;
		playtimeForever: number;
		icon: string;
		logo: string;
	}>;
	ownedGames: Array<{
		appId: number;
		name: string;
		playtimeForever: number;
		icon: string;
	}>;
};

export default function Games() {
	const [data, setData] = useState<SteamUserInfo | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const result = await steamServices.getInfo();
				setData(result as SteamUserInfo | null);
			} catch {
				setError('Failed to load Steam data');
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	return (
		<div className="mx-auto max-w-5xl px-4 py-8 space-y-8">
			<h1 className="text-3xl font-bold text-black">Games</h1>
			{loading && <div className="text-gray-500">Loading your Steam info…</div>}
			{error && (
				<div className="rounded-md bg-red-50 p-4 text-red-600">{error}</div>
			)}
			{/* Render data here as needed */}
			{!loading && data && (
				<pre className="bg-gray-100 p-4 rounded overflow-x-auto text-xs">{JSON.stringify(data, null, 2)}</pre>
			)}
		</div>
	);
}
