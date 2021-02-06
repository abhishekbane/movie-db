import React from 'react';

import Header from '../../components/Header/Header';
import MovieGallery from '../../components/MovieGallery/MovieGallery';
import { useSearch } from '../../hooks/Fetch/Fetch';

interface ILayout {
    children: React.ReactNode;
}

const Layout = ( props: ILayout ) => {

    const [ movies, setMoviesBahsedOnSearch ] = useSearch();

    return (
        <div>
            <Header title="Movie DB" onSearchClick={ setMoviesBahsedOnSearch } enableSearch/>
            <MovieGallery movies={ movies } />
            { props.children }
        </div>
    );
};

export default Layout;