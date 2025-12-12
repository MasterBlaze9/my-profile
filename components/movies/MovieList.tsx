import { Movie, movieServices } from "@/services/movieServices";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await movieServices.getMyRatedMovies();
        if (data && data.results) {
          setMovieList(data.results);
        }
      } catch (error) {
        console.error("Error fetching movies", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex w-full justify-center p-10">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (movieList.length === 0) {
    return <div className="text-center p-10 text-gray-500">No movie found</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
        Rated Movies
      </h1>

      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 lg:gap-8">
        {movieList.map((movieItem) => (
          <MovieCard key={movieItem.id} movie={movieItem} />
        ))}
      </div>
    </main>
  );
}
