import { Movies, ServerParams } from "../types";

const { BASE_URL, THMDB_TOKEN } = process.env;

interface APIFetch {
  getMovies: ({ searchParams }: ServerParams) => Promise<Movies>;
}

const apiFetch: APIFetch = {
  getMovies: async ({ searchParams }) => {
    const buildURL = new URL(`${BASE_URL}`);
    const buildParams = new URLSearchParams("");

    if (searchParams.query) {
      buildParams.set("query", searchParams.query);
      buildURL.pathname = buildURL.pathname + "/search/movie";
    } else {
      buildURL.pathname = buildURL.pathname + "/movie/popular";
    }
    console.log("object :>> ", `${buildURL}?${buildParams}`);
    try {
      const fetchMovies = await fetch(`${buildURL}?${buildParams}`, {
        headers: {
          Authorization: `Bearer ${THMDB_TOKEN}`
        },
        cache: "no-store"
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
