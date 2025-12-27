
export interface ListResponse {
	page: number;
	results: MovieList[];
}
export interface MovieList {
	id: number;
	name: string;
	description: string;
}
export interface Movie {
	id: number;
	title: string;
	poster_path: string | null;
}
export interface MovieResultsResponse {
	id?: number;
	name?: string;
	results: Movie[];
}
export const movieServices = {
	async getMyLists(): Promise<ListResponse | null> {
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/account/${import.meta.env.VITE_TMDB_ACCOUNT_ID}/lists?page=1`,
				{
					method: 'GET',
					headers: {
						accept: 'application/json',
						Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
					},
				}
			);
			if (!response.ok) {
				throw new Error(`API Error: ${response.status}`);
			}
			const json = (await response.json()) as ListResponse;
			return json;
		} catch (err) {
			console.log(err);
			return null;
		}
	},
	async getListItems(listId: number): Promise<MovieResultsResponse | null> {
		try {
			const response = await fetch(
				`https://api.themoviedb.org/4/list/${listId}`,
				{
					method: 'GET',
					headers: {
						accept: 'application/json',
						Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
					},
				}
			);
			if (!response.ok) {
				throw new Error(`API Error: ${response.status}`);
			}
			const json = (await response.json()) as MovieResultsResponse;
			return json;
		} catch (err) {
			console.log(err);
			return null;
		}
	},
};
