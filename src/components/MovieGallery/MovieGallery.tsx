import React from 'react';
import { Link } from 'react-router-dom';

import MovieArticle, { IMovieArticleData } from '../MovieArticle/MovieArticle';

import styles from './MovieGallery.module.css';

interface IMovieGallery {
    movies: IMovieArticleData[];
    onMovieSelected( movieId: number ): void;
}

const MovieGallery = ( props: IMovieGallery ) => {

    const movieArticles = props.movies.map( ( movie, index ) => (
        <Link to={ "/movie/"+movie.movieId }>
            <MovieArticle
                key={ index }
                movieId={ movie.movieId }
                title={ movie.title }
                posterSource={ movie.posterSource }
                isAdult={ movie.isAdult }
                onClick = { props.onMovieSelected }
            /> 
        </Link>
    ));

    return (
        <div className={ styles.movieGallery }>
            { movieArticles }
        </div>
    );
};

export default MovieGallery;