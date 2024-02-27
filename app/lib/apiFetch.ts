import { Movies, ServerParams, SingleMovie } from "../types";

const { BASE_URL, THMDB_TOKEN } = process.env;

const apiConfig: RequestInit = {
  headers: {
    Authorization: `Bearer ${THMDB_TOKEN}`
  },
  cache: "no-store"
};
interface APIFetch {
  getMovies: ({ searchParams }: ServerParams) => Promise<Movies>;
  getMovie: (id: string) => Promise<SingleMovie>;
}

const apiFetch: APIFetch = {
  getMovies: async ({ searchParams }) => {
    const buildURL = new URL(`${BASE_URL}`);
    const buildParams = new URLSearchParams("");

    if (searchParams.page) {
      buildParams.set("page", searchParams.page);
    }

    if (searchParams.query) {
      buildParams.set("query", searchParams.query);
      buildURL.pathname = buildURL.pathname + "/search/movie";
    } else {
      buildURL.pathname = buildURL.pathname + "/movie/popular";
    }
    console.log("object :>> ", `${buildURL}?${buildParams}`);
    try {
      const fetchMovies = await fetch(`${buildURL}?${buildParams}`, apiConfig);
      if (fetchMovies.status !== 200) throw new Error("Error Fetching THMD API");

      const result: Movies = await fetchMovies.json();

      return result;
    } catch (error) {
      console.log(error);
      return {} as Movies;
    }
  },
  getMovie: async id => {
    try {
      const getMovie = await fetch(`${BASE_URL}/movie/${id}`, apiConfig);
      if (getMovie.status !== 200) throw new Error("Error Fetching THMDB API");

      const result: SingleMovie = await getMovie.json();

      return result;
    } catch (error) {
      console.log("error :>> ", error);
      return {} as SingleMovie;
    }
  }
};

export default apiFetch;
