import React, { useEffect } from 'react';

import MovieDetails from './MovieDetails';

import { useFindMovieById } from '../../hooks/Fetch/Fetch';
import { RouteComponentProps } from 'react-router-dom';


const MovieDetailsPage = (props?: RouteComponentProps) => {
    const [ movie, setMovie ] = useFindMovieById();

    useEffect( () => {
        setMovie((props?.match?.params as any).id);
    }, [(props?.match?.params as any).id] )
    
    return <MovieDetails movie={ movie } />
};

export default MovieDetailsPage;