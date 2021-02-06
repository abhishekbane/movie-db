import React from 'react';

export interface IActorArticle {

}

export interface IMovieDetailsData {
    posterSource: string;
    title: string;
    overview: string;
    voteAverage: string;
    isAdult: boolean;
    status: string;
}

export interface IMovieDetails {
    movie: IMovieDetailsData;
}

const MovieDetails = ( props: IMovieDetails ) => {
    return (
        <section>
            <img src={ props.movie.posterSource } />
            <h3>{ props.movie.title }</h3>
            <p>{ props.movie.status }</p>
            <p>{ props.movie.voteAverage }</p>
            <p>{ props.movie.overview }</p>
        </section>
    )
};

export default MovieDetails;