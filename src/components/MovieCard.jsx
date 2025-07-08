import React, { useContext } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WatchListContext } from '../context/WatchListContext';

export const MovieCard = ({ movie }) => {
 const {toggleWatchList,watchList} = useContext(WatchListContext);
 const inWatchList = watchList.some((m) => m.id == movie.id);
    return (
        <div className='bg-gray-800 p-4 rounded-lg shadow-md text-white relative'>

            <img
                src={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={movie.title}
                className="w-full h-80 object-cover rounded"
            />
            <h3 className='text-lg font-bold mt-4'>{movie?.title}</h3>
            <p className='text-sm text-gray-500'>{movie?.release_date}</p>
            <button className='absolute top-2 right-2 text-red-500 text-xl' 
            onClick={() => toggleWatchList(movie)}>{inWatchList ? <FaHeart /> : <FaRegHeart />}</button>
        </div>
    )
}
