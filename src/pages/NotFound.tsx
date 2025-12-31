import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-white text-gray-900">
			<h2 className="text-2xl font-bold">Página não encontrada</h2>
			<p>Lamentamos, mas o recurso que procuras não existe.</p>
			<Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
				Voltar à Home
			</Link>
		</div>
	);
}
