import React from 'react';

import MovieArticle, { IMovieArticle } from '../MovieArticle/MovieArticle';

import styles from './MovieGallery.module.css';

interface IMovieGallery {
    movies: IMovieArticle[];
}

const MovieGallery = ( props: IMovieGallery ) => {

    const movieArticles = props.movies.map( ( movie, index ) => (
        <MovieArticle
            key={ index }
            movieId={ movie.movieId }
            title={ movie.title }
            posterSource={ movie.posterSource }
            isAdult={ movie.isAdult }
        /> 
    ));
    
    return (
        <div className={ styles.movieGallery }>
            { movieArticles }
        </div>
    );
};

export default MovieGallery;