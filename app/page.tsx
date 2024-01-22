import apiFetch from "./lib/apiFetch";
import MovieList from "./components/MovieList";

export default async function Home() {
  const getMovies = await apiFetch.getMovies();
  return (
    <main className="md:container mx-auto pt-5">
      <h1 className="text-center text-3xl font-bold uppercase">Awesome Movies</h1>
      <MovieList movies={getMovies} />
    </main>
  );
}
