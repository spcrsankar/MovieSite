import { useEffect, useState } from "react";

export const useFetchMovie = (path,queryTerm)=>{
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  let url = `https://api.themoviedb.org/3/${path}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
  const controller = new AbortController();


  useEffect(()=>{
    async function getData(url){
      setLoading(true)
      let response = await fetch(url,{signal:controller.signal})
      let data = await response.json()
      console.log(data)
      setData(data)
      setLoading(false)
    }
    getData(url)

    return (()=>{
      controller.abort();
    })
  },[url])

  return {data, loading}
}