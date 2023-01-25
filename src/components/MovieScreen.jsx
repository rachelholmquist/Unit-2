import React from 'react';

import MovieCard from './MovieCard';

const MovieScreen = (movieList, page, setPage, watchlist) => {
    const movieDisplay = movieList.map((movie, index) => {
        return <MovieCard movie={movie} />;
    });

    return (
        <div className="page">
            <h1>Rachel's Movie Theater</h1>
            <h3>Add a Movie to your watchlist!</h3>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
};

export default MovieScreen;