import { useFetchMovie } from "../hooks/useFetchMovie"
import { useParams } from "react-router-dom";
export function MovieDetail({apipath}){
  const params = useParams();
  console.log(params)
  let id = params.id;
  const {data:movie,loading} = useFetchMovie(`movie/${id}`);
  const {poster_path, title, overview, runtime, revenue, imdb_id,genres } = movie
  const image = `https://image.tmdb.org/t/p/w400/${poster_path}`


  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt="image alternate"/>
        </div>
        <div className="max-w-2xl text-lg text-gray-900 text-lg dark:text-gray-200">
          <h1 className="text-4xl font-bold text-center lg:text-left">{title}</h1>
          <p className="my-7">{overview}</p>
          <p>
            {genres && genres.map((genre,index)=>{
              return <span key={index} className="border-2 border-gray-400 p-2 dark:border-gray-700 mr-4">{genre.name}</span>
            })}
          </p>

          <div class="flex items-center mt-6">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <p class="ml-2 font-bold text-gray-900 dark:text-white">{movie.vote_count}</p>
            <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span class="text-gray-900  hover:no-underline dark:text-white">{movie.vote_average}</span>
          </div>

          <div className="mt-5">
            <span className="font-bold">Runtime: </span>
            <span>{runtime} min.</span>
          </div>

          <div className="mt-5">
            <span className="font-bold">Budget: </span>
            <span>{movie.budget}</span>
          </div>

          <div className="mt-5">
            <span className="font-bold">Revenue: </span>
            <span>{revenue}</span>
          </div>

          <div className="mt-5">
            <span className="font-bold">Release Date: </span>
            <span className="text-lg">{movie.release_date}</span>
          </div>

          <div className="mt-5">
            <span className="font-bold">IMDB ID: </span>
            <a href={`https://www.imdb.com/title/${imdb_id}/`} target="_blank">{imdb_id}</a>
          </div>
        </div>



      </section>
    </main>
  )
}