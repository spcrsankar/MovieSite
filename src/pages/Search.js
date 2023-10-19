import { useSearchParams } from "react-router-dom"
import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch"


export  function Search({apipath}){
  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get('q')
  const {data:movies, loading } = useFetch(apipath,queryTerm)

  return (
    <div className="mx-w-7xl mx-auto py-7"> 
      <p className="text-green-900 dark:text-green-100 text-2xl my-3 px-10 py-5">Search results for {`${queryTerm}`}</p>
      {movies.length === 0 && !loading && <p className="text-slate-900 dark:text-slate-100 text-xl my-3 px-10 py-5">No match found...</p>}
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

  )
}