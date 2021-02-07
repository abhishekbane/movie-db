import React from 'react';
import { Link } from 'react-router-dom';

import MovieArticle, { IMovieArticleData } from '../MovieArticle/MovieArticle';

import styles from './MovieGallery.module.css';

interface IMovieGallery {
    movies: IMovieArticleData[];
    onMovieSelected?( id: number ): void;
}

const MovieGallery = ( props: IMovieGallery ) => {

    const movieArticles = props.movies.map( ( movie, index ) => (
        <Link key={ index } to={ "/movie/"+movie.id }>
            <MovieArticle
                id={ movie.id }
                title={ movie.title }
                posterSource={ movie.posterSource }
                isAdult={ movie.isAdult }
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