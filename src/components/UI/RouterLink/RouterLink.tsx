import React from 'react';
import { Link } from 'react-router-dom';

import styles from './RouterLink.module.css';

export enum PathName {
    movie = "movie",
    actor = "actor"
}

export interface IRouterLink {
    to: string,
    children: React.ReactNode;
}

const RouterLink = ( props: IRouterLink ) => {
    return (
        <Link className={ styles.link } to={ `${process.env.PUBLIC_URL}${props.to}` }>
            { props.children }
        </Link>
    );
};

export default RouterLink;