import React from 'react';

import MovieArticle, { IMovieArticle } from '../../components/MovieArticle/MovieArticle';
import UtilityBar, { FilterTypes } from '../../components/UtilityBar/UtilityBar';

interface IMovieGallery {
    movies: IMovieArticle[];
    defaultFilter: FilterTypes;
    onSelect( movie: IMovieArticle ): void;
    onFilterChange( filterType: FilterTypes ):Promise<void>;
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
        <section>
            <UtilityBar defaultFilter={ props.defaultFilter } onFilterChange={ props.onFilterChange } />
            { movieArticles }
        </section>
    );
};

export default MovieGallery;