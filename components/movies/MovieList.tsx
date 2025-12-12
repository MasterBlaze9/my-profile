import { Movie, movieServices } from "@/services/movieServices";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

interface MovieListProps {
  listId: number;
}

export default function MovieList({ listId }: MovieListProps) {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await movieServices.getListItems(listId);
        if (data && data.results) {
          setMovieList(data.results);
        } else {
          setMovieList([]);
        }
      } catch (error) {
        console.error("Error fetching movies for list", listId, error);
        setMovieList([]);
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    fetchData();
  }, [listId]);

  if (loading) {
    return (
      <div className="flex w-full justify-center p-10">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (movieList.length === 0) {
    return (
      <div className="text-center p-10 text-gray-500">
        No movies in this list
      </div>
    );
  }

  return (
    <main className="mx-auto px-4 py-8">
  
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 lg:gap-8">
        {movieList.map((movieItem) => (
          <MovieCard key={movieItem.id} movie={movieItem} />
        ))}
      </div>
    </main>
  );
}
