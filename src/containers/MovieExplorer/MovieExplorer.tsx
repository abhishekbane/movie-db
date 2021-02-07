import React, { useEffect, useState } from 'react';

import MovieGallery from '../../components/MovieGallery/MovieGallery';
import PagingBar from '../../components/PagingBar/PagingBar';
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
                    <PagingBar 
                        disableNextButton={ !nextPageFilter || isSearchSelected }
                        disablePrevButton={ !prevPageFilter || isSearchSelected }
                        prevButtonText="<"
                        nextButtonText=">"
                        onPrevClick={ () => setPrevMoviesBasedOnFilter() }
                        onNextClick={ () => setNextMoviesBasedOnFilter() }
                    />
                </div>
        </TabbedWindow>
    );
};

export default MovieExplorer;