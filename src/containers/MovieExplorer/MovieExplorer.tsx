import React, { useEffect, useState } from 'react';

import MovieGallery from '../../components/MovieGallery/MovieGallery';
import { IMovieArticleData } from '../../components/MovieArticle/MovieArticle';
import TabbedWindow, { FilterTypes } from '../../hoc/TabbedWindow/TabbedWindow';

import { useFilter } from '../../hooks/Fetch/Fetch';

import styles from './MovieExplorer.module.css';

interface IMovieExplorer {
}

const MovieExplorer= ( props: IMovieExplorer ) => {

    const { movies, prevPageFilter, nextPageFilter, setMoviesBasedOnFilter, setMoviesBasedOnSearch, setNextMoviesBasedOnFilter, setPrevMoviesBasedOnFilter } = useFilter();
    
    const [ isSearchSelected, setIsSearchSelected ] = useState( false );
    const defaultFilter = FilterTypes.TrendingToday;

    useEffect( () => {
        setMoviesBasedOnFilter( defaultFilter );
    }, [] );

    const onSearchHandler = ( searchTerm: string ) => {
        setMoviesBasedOnSearch(searchTerm);
        setIsSearchSelected(true);
    };

    const onTabSelectedHandler = ( filterType: FilterTypes ) => {
        setMoviesBasedOnFilter( filterType );
        setIsSearchSelected(false);
    }

    return (
        <TabbedWindow 
            defaultFilter={ defaultFilter } 
            onSearch={ onSearchHandler } 
            onTabSelect={ onTabSelectedHandler }>
                <div className={ styles.movieGalleryContainer }>
                    <div className={ styles.movieGallery }>
                        <MovieGallery movies={ movies } />
                    </div>
                    <div className={ styles.pagingBar }>
                        <button 
                            className={ styles.pagingButton } 
                            disabled={ !prevPageFilter || isSearchSelected } 
                            onClick={ () => setPrevMoviesBasedOnFilter() }>{`<`}</button>
                        <button 
                            className={ styles.pagingButton } 
                            disabled={ !nextPageFilter || isSearchSelected } 
                            onClick={ () => setNextMoviesBasedOnFilter() }>{`>`}</button>
                    </div>
                </div>
        </TabbedWindow>
    );
};

export default MovieExplorer;