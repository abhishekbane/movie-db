import React from 'react';

import MovieGallery from '../../components/MovieGallery/MovieGallery';
import { IMovieArticleData } from '../../components/MovieArticle/MovieArticle';
import UtilityBar, { FilterTypes } from '../../components/UtilityBar/UtilityBar';

import styles from './MovieExplorer.module.css';

interface IMovieExplorer {
    movies: IMovieArticleData[];
    defaultFilter: FilterTypes;
    onSelect( movie: IMovieArticleData ): void;
    onFilterChange( filterType: FilterTypes ):Promise<void>;
    onMovieSelected( movieId: number ): void;

    
}

const MovieExplorer= ( props: IMovieExplorer ) => {
    return (
        <section>
            <UtilityBar defaultFilter={ props.defaultFilter } onFilterChange={ props.onFilterChange } />
            <MovieGallery onMovieSelected={ props.onMovieSelected } movies={ props.movies } />
        </section>
    );
};

export default MovieExplorer;