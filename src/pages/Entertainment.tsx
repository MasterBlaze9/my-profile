import { useEffect, useState } from 'react';
import { movieServices, type MovieList as MovieListType } from '../services/movieServices';

import { MovieList } from '../components/movies/MovieList';
import { Tabs } from '../components/movies/Tabs';

export default function Entertainment() {
	const [lists, setLists] = useState<MovieListType[]>([]);
	const [activeTab, setActiveTab] = useState(0);
	const [loadingLists, setLoadingLists] = useState(true);

	useEffect(() => {
		const fetchLists = async () => {
			try {
				const data = await movieServices.getMyLists();
				if (data?.results?.length) {
					setLists(data.results);
				}
			} catch (e) {
				console.error('Error fetching lists', e);
			} finally {
				setLoadingLists(false);
			}
		};
		fetchLists();
	}, []);


	if (loadingLists) {
		return (
			<div className="flex h-screen items-center justify-center bg-white text-gray-900">
				<div className="flex flex-col items-center gap-4">
					<div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
					<p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Loading Lists...</p>
				</div>
			</div>
		);
	}

	if (!lists.length) {
		return (
			<div className="flex h-screen items-center justify-center bg-white text-gray-900">
				<p className="text-sm text-gray-400 italic font-medium">No lists found</p>
			</div>
		);
	}

	return (
		<div className="flex min-h-screen justify-center bg-white text-gray-900 p-4">
			<div className="mx-auto max-w-6xl py-12 space-y-10 text-gray-900">
				<header className="border-b border-gray-100 pb-6">
					<h1 className="text-2xl font-black tracking-tight">Entertainment Library</h1>
					<p className="text-sm text-gray-500 mt-2">My curated collection of movies and series</p>
				</header>

				<Tabs
					tabs={lists.map((list) => ({ id: list.id, name: list.name, description: list.description }))}
					activeTab={activeTab}
					onTabChange={setActiveTab}
				/>

				<section className="bg-white p-4">
					{lists[activeTab] && (
						<MovieList
							listId={lists[activeTab].id}
							apiToken={import.meta.env.VITE_TMDB_TOKEN}
						/>
					)}
				</section>
			</div>
		</div>
	);
}
