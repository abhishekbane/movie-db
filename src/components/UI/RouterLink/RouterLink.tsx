import React from 'react';
import { Link } from 'react-router-dom';

import styles from './RouterLink.module.css';

export interface IMovieArticleData {
    id: number;
    title: string;
    posterSource: string;
    isAdult: boolean;
    rating: number;
}

export interface IRouterLink {
    to: string;
    children: React.ReactNode;
}

const RouterLink = ( props: IRouterLink ) => {
    return (
        <Link className={ styles.link } to={ props.to }>
            { props.children }
        </Link>
    );
};

export default RouterLink;