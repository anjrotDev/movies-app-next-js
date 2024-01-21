import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { Movies } from "./types";

export default async function Home() {
  const baseURL = "https://image.tmdb.org/t/p/original";

  const getMovies = await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjU0YzkzZjEyNTUyMTAxYTQwM2YyODJhYzEzZWY5MCIsInN1YiI6IjY1YWJlZGU5YjFmNjhkMDE3MGViZTQ5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.538jieiqBD2OaD3pA8-JVpEBeojhiWIG3cMIWRQA9zg"
    }
  });

  const result: Movies = await getMovies.json();

  const { results, page, total_pages, total_results } = result;

  return (
    <main className="md:container mx-auto pt-5">
      <h1 className="text-center text-3xl font-bold uppercase">Awesome Movies</h1>
      <div className="md:grid md:grid-cols-4 gap-4 pt-4 mb-10">
        {results.length > 0 &&
          results.map(x => (
            <Card isFooterBlurred className="w-full h-[300px]" key={Math.random() * 4}>
              <Image removeWrapper alt="Relaxing app background" className="z-0 w-full h-full object-cover" src={`${baseURL}${x.backdrop_path}`} />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 text-white flex-col items-start">
                <h4 className="font-bold text-large">{x.title}</h4>
                <p className="text-tiny uppercase font-bold">Release Date: {x.release_date}</p>
                <small className="font-bold">Category: Movie</small>
              </CardFooter>
            </Card>
          ))}
      </div>
    </main>
  );
}
