import React from 'react';

import styles from './MovieArticle.module.css';

export interface IMovieArticle {
    movieId: number;
    title: string;
    posterSource: string;
    isAdult: boolean;
}

const MovieArticle = ( props: IMovieArticle ) => {
    return (
        <article className={ styles.movieArticle }>
            <img className={ styles.poster } src={ props.posterSource }/>
            <h3 className={ styles.title }>{ props.title }</h3>rating
        </article>
    );
};

export default MovieArticle;