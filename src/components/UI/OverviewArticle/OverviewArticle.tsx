import React from 'react';

import styles from './OverviewArticle.module.css';

export interface IOverviewArticle {
    children: React.ReactNode;
}

const OverviewArticle = ( props: IOverviewArticle ) => {

    return (
        <article className={ styles.movieArticle }>
            { props.children }
        </article>
    );
};

export default OverviewArticle;