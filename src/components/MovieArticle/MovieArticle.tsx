import React from 'react';

export interface IMovieArticle {
    movieId: number;
    title: string;
    posterSource: string;
    isAdult: boolean;
}

const MovieArticle = ( props: IMovieArticle ) => {
    return (
        <article>
            <img src={ props.posterSource }/>
            <h3>{ props.title }</h3>rating
        </article>
    );
};

export default MovieArticle;