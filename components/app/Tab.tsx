import { useEffect, useState } from "react";
import { movieServices, MovieList } from "@/services/movieServices";
import MovieListComponent from "@/components/movies/MovieList";

export default function Tab() {
  const [lists, setLists] = useState<MovieList[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadingLists, setLoadingLists] = useState(true);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const data = await movieServices.getMyLists();
        if (data?.results?.length) {
          setLists(data.results);
        }
      } catch (e) {
        console.error("Error fetching lists", e);
      } finally {
        setLoadingLists(false);
      }
    };
    fetchLists();
  }, []);

  if (loadingLists) {
    return (
      <div className="flex w-full justify-center p-10">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!lists.length) {
    return <div className="text-center p-10 text-gray-500">No lists found</div>;
  }

  return (
    <div className="px-4 py-8">
      <div className="flex flex-wrap">
        {lists.map((list, index) => (
          <button
            key={list.id}
            onClick={() => setActiveIndex(index)}
            className={`flex flex-1 items-center text-center justify-center border px-4 py-2 text-sm ${
              activeIndex === index
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-gray-300 bg-white text-gray-800 dark:bg-gray-800 dark:text-white"
            }`}
            title={list.description}
          >
            {list.name}
          </button>
        ))}
      </div>

      <div>
        {lists[activeIndex] && (
          <MovieListComponent
            listId={lists[activeIndex].id}
          />
        )}
      </div>
    </div>
  );
}
