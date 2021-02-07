import React, { useEffect } from 'react';
import { match } from 'react-router-dom';

import ActorGallery from '../../components/ActorGallery/ActorGallery';

import { IActorArticleData } from '../../components/ActorArticle/ActorArticle';

export interface IMovieDetailsData {
    posterSource: string;
    title: string;
    overview: string;
    rating: string;
    isAdult: boolean;
    status: string;
    actors: IActorArticleData[];
}

export interface IMovieDetails{
    movie: IMovieDetailsData;
}

const MovieDetails = ( props: IMovieDetails ) => {
    console.log( props.movie );
    return (
        <section>
            <img src={ props.movie.posterSource } />
            <h3>{ props.movie.title }</h3>
            <p>{ props.movie.status }</p>
            <p>{ props.movie.rating }</p>
            <p>{ props.movie.overview }</p>
            <ActorGallery actors={ props.movie.actors } />
        </section>
    )
};

export default MovieDetails;