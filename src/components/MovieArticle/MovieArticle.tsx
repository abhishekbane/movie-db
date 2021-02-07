import React from 'react';
import { Link } from 'react-router-dom';

import OverviewArticle from '../UI/OverviewArticle/OverviewArticle';
import Poster from '../UI/Poster/Poster';
import RouterLink from '../UI/RouterLink/RouterLink';

import styles from './MovieArticle.module.css';

export interface IMovieArticleData {
    id: number;
    title: string;
    posterSource: string;
    isAdult: boolean;
    rating: number;
}

export interface IMovieArticle {
    movie: IMovieArticleData;
}

const MovieArticle = ( props: IMovieArticle ) => {

    const title = props.movie.title.length > 18 ? props.movie.title.slice(0, 15)+"..." : props.movie.title;

    return (
        <OverviewArticle>
            <RouterLink to={ "/movie/"+props.movie.id }>
                <Poster alt={ props.movie.title } src={ props.movie.posterSource }/>
                <div className={ styles.details }>
                    <h3 className={ styles.title }>{ title }</h3>
                    <span>{ props.movie.rating }</span>
                </div>
            </RouterLink>
        </OverviewArticle>
    );
};

export default MovieArticle;