import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch"
export  function MovieList({apipath}){
  // const [movies,setMovies] = useState([])
  const  {data:movies, loading } = useFetch(apipath)

  return (
    <div className="mx-w-7xl mx-auto py-7"> 
      <div className="flex flex-wrap justify-center">
        {loading
          ?<p className="text-green-900 dark:text-green-100 text-2xl my-3 px-10 py-5">Loading...</p>
          :<div className="flex flex-wrap flex-start others:justify-evenly">
            {movies && movies.map((movie,index)=>{
                return <Card key={index} movie={movie}/>
              })
            }
          </div>
        } 
      </div>
    </div>

  )
}