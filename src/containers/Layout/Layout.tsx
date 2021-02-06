import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import MovieGallery from '../../components/MovieGallery/MovieGallery';
import { useSearch } from '../../hooks/Fetch/Fetch';

interface ILayout {
    onMovieSelected( movieId: number ): void;
    children: React.ReactNode;
}

const Layout = ( props: ILayout ) => {

    const [ movies, setMoviesBahsedOnSearch ] = useSearch();
    
    return (
        <div>
            <Header title="Movie DB" onSearchClick={ setMoviesBahsedOnSearch } enableSearch/>
            <MovieGallery onMovieSelected={ props.onMovieSelected } movies={ movies } />
            { props.children }
        </div>
    );
};

export default Layout;