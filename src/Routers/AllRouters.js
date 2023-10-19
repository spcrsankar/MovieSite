import { Route, Routes } from 'react-router-dom'
import { MovieList,Search,PageNotFound,MovieDetail  }  from '../pages';   
export default function AllRouters(){
  return (
    <Routes>
        <Route element={<MovieList apipath='movie/now_playing'/>} path='/'/>
        <Route element={<MovieList apipath='movie/top_rated'/>} path='/top-rated'/>
        <Route element={<MovieList apipath='movie/popular'/>} path='/popular'/>
        <Route element={<MovieList apipath='movie/upcoming'/>} path='/upcoming'/>
        <Route element={<Search apipath='search/movie'/>} path='/search'/>
        <Route element={<MovieDetail />} path='/movie/:id'/>
        <Route element={<PageNotFound/>} path='*'/>
    </Routes>
  )
}