import React, { useEffect } from 'react';

import MovieGallery from '../../components/MovieGallery/MovieGallery';
import { IMovieArticleData } from '../../components/MovieArticle/MovieArticle';
import TabbedWindow, { FilterTypes } from '../../hoc/TabbedWindow/TabbedWindow';

import { useFilter } from '../../hooks/Fetch/Fetch';

import styles from './MovieExplorer.module.css';

interface IMovieExplorer {
}

const MovieExplorer= ( props: IMovieExplorer ) => {

    const { movies, prevPageFilter, nextPageFilter, setMoviesBasedOnFilter, setMoviesBasedOnSearch, setNextMoviesBasedOnFilter, setPrevMoviesBasedOnFilter } = useFilter();

    const defaultFilter = FilterTypes.TrendingToday;

    useEffect( () => {
        setMoviesBasedOnFilter( defaultFilter );
    }, [] );

    return (
        <TabbedWindow 
            defaultFilter={ defaultFilter } 
            onSearch={ setMoviesBasedOnSearch } 
            onTabSelect={ setMoviesBasedOnFilter }>
                <div className={ styles.movieGalleryContainer }>
                    <div className={ styles.movieGallery }>
                        <MovieGallery movies={ movies } />
                    </div>
                    <div className={ styles.pagingBar }>
                        <button 
                            className={ styles.pagingButton } 
                            disabled={ !prevPageFilter } 
                            onClick={ () => setPrevMoviesBasedOnFilter() }>{`<`}</button>
                        <button 
                            className={ styles.pagingButton } 
                            disabled={ !nextPageFilter } 
                            onClick={ () => setNextMoviesBasedOnFilter() }>{`>`}</button>
                    </div>
                </div>
        </TabbedWindow>
    );
};

export default MovieExplorer;