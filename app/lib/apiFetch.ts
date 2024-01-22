import { Movies } from "../types";

const { BASE_URL, THMDB_TOKEN } = process.env;

interface APIFetch {
  getMovies: () => Promise<Movies>;
}

const apiFetch: APIFetch = {
  getMovies: async () => {
    try {
      const fetchMovies = await fetch(`${BASE_URL}/movie/popular`, {
        headers: {
          Authorization: `Bearer ${THMDB_TOKEN}`
        }
      });
      if (fetchMovies.status !== 200) throw new Error("Error Fetching THMD API");

      const result: Movies = await fetchMovies.json();

      return result;
    } catch (error) {
      console.log(error);
      return {} as Movies;
    }
  }
};

export default apiFetch;
