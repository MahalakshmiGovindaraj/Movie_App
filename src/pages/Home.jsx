import React, { useEffect, useState } from 'react'
import { MovieCard } from '../components/MovieCard'

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page,setPage] =useState(1);
    const [search,setSearch] =useState("");
    useEffect(() => {
        let url=`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=b66b8169a62676355ab9a25fc37bf5f4`;
        if(search){
            url =`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=b66b8169a62676355ab9a25fc37bf5f4`
        }
        fetch(url)
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    },[page,search]);
    return (
        <div className='pt-16 p-4'>
            <input type='text' placeholder='Search Movies...' onChange={(e) => setSearch(e.target.value)} className='p-2 w-3/4 md:w-1/2 border rounded border-gray-700
         bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-20 left-1/2 transform -translate-x-1/2 z-10'/>
            <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-16 gap-4">
                {movies.map((movie, index) => {
                    return <MovieCard key={index} movie={movie} />;
                })}
            </div>
            <div className="pagination-container flex justify-between mt-5">
                <button className='p-2 bg-gray-700 text-white rounded' disabled={page == 1} onClick={() => {setPage(prev => prev-1);} }>Previous</button>
                <button className='p-2 bg-gray-700 text-white rounded' onClick={() => {setPage(prev => prev+1);} }>Next</button>
            </div>


        </div>
    )
}
