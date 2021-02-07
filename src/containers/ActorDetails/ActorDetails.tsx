import React from 'react';

import MovieGallery from '../../components/MovieGallery/MovieGallery';

import { IMovieArticleData } from '../../components/MovieArticle/MovieArticle';

export interface IActorDetailsData {
    id: number;
    name: string;
    posterSource: string;
    biography: string;
    movies: IMovieArticleData[];
}

interface IActorDetails {
    actor: IActorDetailsData;
}

const ActorDetails = ( props: IActorDetails ) => {
    return (
        <section>
            <img src={ props.actor.posterSource } alt={ props.actor.name } />
            <h3>{ props.actor.name }</h3>
            <p>{ props.actor.biography }</p>
            <MovieGallery movies={ props.actor.movies } />
        </section>
    );
};

export default ActorDetails;