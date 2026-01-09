export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface MovieList {
  id: number;
  name: string;
  description: string;
  item_count: number;
  favorite_count: number;
  list_type: string;
}

export interface ListResponse {
  page: number;
  results: MovieList[];
  total_pages: number;
  total_results: number;
}

export interface MovieResultsResponse {
  id: string;
  name: string;
  description: string;
  items: Movie[]; 
  item_count: number;
  created_by: string;
}



const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const ACCOUNT_ID = import.meta.env.VITE_TMDB_ACCOUNT_ID;


const LANGUAGE = 'en-US';
const IMG_LANG = 'en,null';

const HEADERS = {
  accept: 'application/json',
  Authorization: `Bearer ${TOKEN}`,
};



export const movieServices = {
 
  async getMyLists(page: number = 1): Promise<ListResponse | null> {
    try {
      const url = `${BASE_URL}/account/${ACCOUNT_ID}/lists?page=${page}&language=${LANGUAGE}&include_image_language=${IMG_LANG}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: HEADERS,
      });

      if (!response.ok) throw new Error(`API error: ${response.status}`);

      return (await response.json()) as ListResponse;
    } catch (err) {
      console.error("Error fetching lists", err);
      return null;
    }
  },

  
  async getListItems(listId: number): Promise<MovieResultsResponse | null> {
    try {
   
      const url = `${BASE_URL}/list/${listId}?language=${LANGUAGE}&include_image_language=${IMG_LANG}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: HEADERS,
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      const data = await response.json();
      
      return data as MovieResultsResponse;
    } catch (err) {
      console.error(`Error fetching items from the list ${listId}:`, err);
      return null;
    }
  },

 
  async getMovieDetails(movieId: number): Promise<Movie | null> {
    try {
      const url = `${BASE_URL}/movie/${movieId}?language=${LANGUAGE}&include_image_language=${IMG_LANG}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: HEADERS,
      });

      if (!response.ok) throw new Error(`API Error: ${response.status}`);

      return (await response.json()) as Movie;
    } catch (err) {
      console.error(`Error looking for item details ${movieId}:`, err);
      return null;
    }
  }
};