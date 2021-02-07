import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MovieArticle.module.css';

export interface IMovieArticleData {
    id: number;
    title: string;
    posterSource: string;
    isAdult: boolean;
    rating: number;
}

export interface IMovieArticle {
    onClick?( id: number ): void;
    movie: IMovieArticleData;
}

const MovieArticle = ( props: IMovieArticle ) => {

    const title = props.movie.title.length > 20 ? props.movie.title.slice(0, 18)+"..." : props.movie.title;

    return (
        <article className={ styles.movieArticle } onClick={ () => (props.onClick ? props.onClick(props.movie.id) : null) }>
            <Link className={ styles.link } to={ "/movie/"+props.movie.id }>
                <img className={ styles.poster } src={ props.movie.posterSource }/>
                <div className={ styles.details }>
                    <h3 className={ styles.title }>{ title }</h3>
                    <span>{ props.movie.rating }</span>
                </div>
            </Link>
        </article>
    );
};

export default MovieArticle;