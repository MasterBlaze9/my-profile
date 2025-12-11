import { movieServices } from "@/services/movieServices";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await movieServices.getMyRatedMovies();
      if (data && data.results) {
        setMovieList(data.results);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-1 justify-center align-middle text-center">
      {movieList.map((movieItem) => {
        return (
          <div key={movieItem.id}>
            <Image
              src={`https://image.tmdb.org/t/p/w200${movieItem.poster_path}`}
              alt={movieItem.title}
              width={200}
              height={300}
            />
            <h1>{movieItem.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
