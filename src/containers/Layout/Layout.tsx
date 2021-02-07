import React, { useState } from 'react';

import Header from '../../components/Header/Header';

import styles from './Layout.module.css';

interface ILayout {
    onMovieSelected?( movieId: number ): void;
    children: React.ReactNode;
}

const Layout = ( props: ILayout ) => {

    return (
        <div className={ styles.layout }>
            <Header title="Movie DB" />
            <div className={ styles.content }>
                { props.children }
            </div>
        </div>
    );
};

export default Layout;