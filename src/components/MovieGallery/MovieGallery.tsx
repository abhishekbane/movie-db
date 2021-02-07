import React from 'react';

import MovieArticle, { IMovieArticleData } from '../MovieArticle/MovieArticle';

import styles from './MovieGallery.module.css';

interface IMovieGallery {
    movies: IMovieArticleData[];
    onMovieSelected?( id: number ): void;
}

const MovieGallery = ( props: IMovieGallery ) => {

    const movieArticles = props.movies.map( ( movie, index ) => (
        <MovieArticle
            key={index}
            movie={ movie }
        />
    ));

    return (
        <div className={ styles.movieGallery }>
            { movieArticles }
        </div>
    );
};

export default MovieGallery;