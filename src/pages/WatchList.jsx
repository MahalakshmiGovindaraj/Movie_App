import React, { useContext, useState } from 'react';
import { GenreFilter } from '../components/GenreFilter';
import { WatchListContext } from '../context/WatchListContext';
import { MovieCard } from '../components/MovieCard';

export const WatchList = () => {
    const { watchList, genreList } = useContext(WatchListContext);
    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState(""); // ✅ Added this

    const filteredMovies = watchList
        .filter(movie =>
            movie.title.toLowerCase().includes(search.toLowerCase())
        )
        .filter(movie =>
            selectedGenre === "" || movie.genre_ids.includes(Number(selectedGenre))
        );

    return (
        <div className='pt-16 p-4'>
            <input
                type='text'
                placeholder='Search Movies...'
                className='p-2 w-3/4 md:w-1/2 border rounded border-gray-700
                bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-20 left-1/2 transform -translate-x-1/2 z-10'
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className='mt-20 flex justify-center'>
                <GenreFilter
                    genreList={genreList}
                    setSelectedGenre={setSelectedGenre}
                />
            </div>

            <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-14 gap-4">
                {filteredMovies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
};
