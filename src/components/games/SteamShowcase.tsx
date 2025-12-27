import React, { useEffect, useState } from 'react';
import { steamServices,type SteamUserInfo } from '../../services/steamServices';

export const SteamShowcase: React.FC = () => {
	const [data, setData] = useState<SteamUserInfo | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			const info = await steamServices.getInfo();
			setData(info);
			setLoading(false);
		};

		fetchData();
	}, []);

	if (loading) return <div className="p-8 text-center text-gray-500">Carregando dados da Steam...</div>;
	if (!data) return <div className="p-8 text-center text-red-500">Não foi possível carregar o perfil.</div>;

	return (
		<div className="max-w-4xl mx-auto p-6 space-y-8 bg-gray-900 text-white rounded-xl shadow-2xl">

			{/* Cabeçalho do Perfil */}
			<section className="flex items-center space-x-4 border-b border-gray-700 pb-6">
				<img
					src={data.profile.avatar}
					alt="Avatar"
					className="w-20 h-20 rounded-full border-2 border-blue-500"
				/>
				<div>
					<h1 className="text-2xl font-bold">{data.profile.personaName}</h1>
					<a
						href={data.profile.profileUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-400 hover:underline text-sm"
					>
						Ver perfil no Steam
					</a>
				</div>
			</section>

			{/* Jogos Recentes */}
			<section>
				<h2 className="text-xl font-semibold mb-4 text-blue-300">Jogados Recentemente</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{data.recentGames.length > 0 ? (
						data.recentGames.map((game) => (
							<div key={game.appId} className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg">
								<img
									src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appId}/${game.imgIconUrl}.jpg`}
									alt={game.name}
									className="w-12 h-12 rounded"
								/>
								<div className="flex-1">
									<p className="font-medium truncate w-48">{game.name}</p>
									<p className="text-xs text-gray-400">
										{((game.playtime2Weeks || 0) / 60).toFixed(1)}h in the last 2 weeks
									</p>
								</div>
							</div>
						))
					) : (
						<p className="text-gray-500 italic">Nenhuma atividade recente.</p>
					)}
				</div>
			</section>

			{/* Estatísticas Rápidas */}
			<section className="grid grid-cols-2 gap-4 border-t border-gray-700 pt-6">
				<div className="text-center bg-gray-800 p-4 rounded-lg">
					<p className="text-sm text-gray-400 uppercase tracking-wider">Total de Jogos</p>
					<p className="text-3xl font-bold">{data.ownedGames.length}</p>
				</div>
				<div className="text-center bg-gray-800 p-4 rounded-lg">
					<p className="text-sm text-gray-400 uppercase tracking-wider">Horas Totais</p>
					<p className="text-3xl font-bold">
						{Math.floor(data.ownedGames.reduce((acc, g) => acc + g.playtimeForever, 0) / 60)}h
					</p>
				</div>
			</section>

		</div>
	);
};