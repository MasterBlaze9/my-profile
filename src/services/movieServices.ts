// --- Interfaces para Tipagem Segura ---

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
  items: Movie[]; // Na API V3 /list/{id}, os filmes vêm em 'items'
  item_count: number;
  created_by: string;
}

// --- Configuração Centralizada ---

const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const ACCOUNT_ID = import.meta.env.VITE_TMDB_ACCOUNT_ID;

// Definimos o idioma dos textos e a prioridade das imagens
const LANGUAGE = 'en-US';
const IMG_LANG = 'en,null'; // Tenta Inglês, se não houver usa o original

const HEADERS = {
  accept: 'application/json',
  Authorization: `Bearer ${TOKEN}`,
};

// --- Serviço de Filmes ---

export const movieServices = {
  /**
   * Obtém as listas da conta do utilizador
   */
  async getMyLists(page: number = 1): Promise<ListResponse | null> {
    try {
      // Adicionamos language e include_image_language
      const url = `${BASE_URL}/account/${ACCOUNT_ID}/lists?page=${page}&language=${LANGUAGE}&include_image_language=${IMG_LANG}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: HEADERS,
      });

      if (!response.ok) throw new Error(`Erro API: ${response.status}`);

      return (await response.json()) as ListResponse;
    } catch (err) {
      console.error("Erro ao procurar listas:", err);
      return null;
    }
  },

  /**
   * Obtém os filmes de uma lista específica
   */
  async getListItems(listId: number): Promise<MovieResultsResponse | null> {
    try {
      // O endpoint /list/{id} da V3 aceita estes parâmetros para tradução
      const url = `${BASE_URL}/list/${listId}?language=${LANGUAGE}&include_image_language=${IMG_LANG}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: HEADERS,
      });

      if (!response.ok) throw new Error(`Erro API: ${response.status}`);

      const data = await response.json();
      
      return data as MovieResultsResponse;
    } catch (err) {
      console.error(`Erro ao procurar itens da lista ${listId}:`, err);
      return null;
    }
  },

  /**
   * Obtém detalhes de um filme (útil para garantir dados em inglês)
   */
  async getMovieDetails(movieId: number): Promise<Movie | null> {
    try {
      const url = `${BASE_URL}/movie/${movieId}?language=${LANGUAGE}&include_image_language=${IMG_LANG}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: HEADERS,
      });

      if (!response.ok) throw new Error(`Erro API: ${response.status}`);

      return (await response.json()) as Movie;
    } catch (err) {
      console.error(`Erro ao procurar detalhes do filme ${movieId}:`, err);
      return null;
    }
  }
};