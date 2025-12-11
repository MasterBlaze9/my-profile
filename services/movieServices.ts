const url =
  "https://api.themoviedb.org/3/account/11603150/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc";

export const movieServices = {
  async getMyRatedMovies() {
		try {
			const response = await fetch(url, {
				method: "GET",
				headers: {
					accept: "application/json",
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_API_TOKEN}`,
				},
			});

			if (!response.ok) {
				throw new Error(`Erro na API: ${response.status}`);
			}

			const json = await response.json();
			return json; 
		} catch (err) {
			console.error(err);
			return null;
		}
  }
};
