// components/MovieCard.tsx
import Image from "next/image";
import { Movie } from "@/services/movieServices";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder-movie.png"; 

  return (
    <div className="group relative flex flex-col gap-2 cursor-pointer transition-all duration-300 hover:scale-105">
    
      <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl">
        <Image
          src={imageUrl}
          alt={movie.title}
          width={300}
          height={450}
          className="h-auto w-full object-cover"
          placeholder="empty" 
        />

   
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
      </div>

 
      <div className="flex flex-col px-1">
        <h2
          className="text-sm font-bold text-gray-900 dark:text-white truncate"
          title={movie.title}
        >
          {movie.title}
        </h2>
       
      </div>
    </div>
  );
}
