import React from 'react';

import MovieArticle, { IMovieArticle } from '../../components/MovieArticle/MovieArticle';

interface IMovieGallery {
    movies: IMovieArticle[];
    onSelect( movie: IMovieArticle ): void;
}

const MovieGallery = ( props: IMovieGallery ) => {

    const movieArticles = props.movies.map( movie => (
        <MovieArticle
            movieId={ movie.movieId }
            title={ movie.title }
            posterSource={ movie.posterSource }
            isAdult={ movie.isAdult }
        /> 
    ));

    return (
        <section>
            { movieArticles }
        </section>
    );
};

export default MovieGallery;