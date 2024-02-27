import apiFetch from "@/app/lib/apiFetch";
import Image from "next/image";
import { FC } from "react";

type MovieId = {
  movieId: string;
};

interface ServerParams {
  params: MovieId;
}

const Movie: FC<ServerParams> = async ({ params }) => {
  const baseURL = "https://image.tmdb.org/t/p/original";
  const { movieId } = params;

  const getMovie = await apiFetch.getMovie(movieId);
  console.log("getMovie :>> ", getMovie);
  return (
    <div className="relative w-screen h-screen-1/3">
      <Image
        priority
        src={`${baseURL}/${getMovie.backdrop_path}`}
        fill
        alt={`Hero Image ${getMovie.title}`}
        className="opacity-40 object-center -z-10"
      />
      <div className="w-3/4 mx-auto pt-unit-2xl">
        <div className="flex">
          <Image src={`${baseURL}/${getMovie.poster_path}`} width={400} height={700} alt="poster" />

          <div className="flex flex-col justify-center pl-10 basis-2/4">
            <h1 className="text-3xl font-bold uppercase">{getMovie.title}</h1>
            <p className="text-md italic">{getMovie.tagline}</p>
            <h2 className="text-2xl mt-10 uppercase font-bold">Overview</h2>
            <p className="text-lg">{getMovie.overview}</p>
            <h3 className="text-md uppercase font-bold mt-10">Release Date</h3>
            <p className="text-lg">{getMovie.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
