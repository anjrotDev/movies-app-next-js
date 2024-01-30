import apiFetch from "./lib/apiFetch";
import MovieList from "./components/MovieList";
import { FC } from "react";
import { ServerParams } from "./types";

const Home: FC<ServerParams> = async ({ searchParams }) => {
  const getMovies = await apiFetch.getMovies({ searchParams });
  return (
    <main className="md:container mx-auto pt-5">
      <h1 className="text-center text-3xl font-bold uppercase">Awesome Movies</h1>
      <MovieList movies={getMovies} />
    </main>
  );
};

export default Home;
