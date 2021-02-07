import React from 'react';

import styles from './MovieArticle.module.css';

export interface IMovieArticleData {
    id: number;
    title: string;
    posterSource: string;
    isAdult: boolean;
}

export interface IMovieArticle extends IMovieArticleData {
    onClick?( id: number ): void;
}

const MovieArticle = ( props: IMovieArticle ) => {

    const title = props.title.length > 20 ? props.title.slice(0, 18)+"..." : props.title;

    return (
        <article className={ styles.movieArticle } onClick={ () => (props.onClick ? props.onClick(props.id) : null) }>
            <img className={ styles.poster } src={ props.posterSource }/>
            <h3 className={ styles.title }>{ title }</h3>rating
        </article>
    );
};

export default MovieArticle;