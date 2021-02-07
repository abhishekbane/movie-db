import React, { useEffect } from 'react';

import MovieDetails, { IMovieDetailsData } from './MovieDetails';

import { useFindMovieById } from '../../hooks/Fetch/Fetch';
import { RouteComponentProps } from 'react-router-dom';


const MovieDetailsPage = (props?: RouteComponentProps) => {
    const [ movie, setMovie ] = useFindMovieById(null as any);

    useEffect( () => {
        setMovie((props?.match?.params as any).id);
    }, [(props?.match?.params as any).id] );

    const movieDetails = movie ? <MovieDetails movie={ movie }/> : null;
    
    return movieDetails;
};

export default MovieDetailsPage;