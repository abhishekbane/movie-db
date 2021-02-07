import React from 'react';

import styles from './Poster.module.css';

export interface IPoster {
    src: string;
    alt: string;
}

const Poster = ( props: IPoster ) => {
    return <img className={ styles.poster } alt={ props.alt } src={ props.src }/>;
};

export default Poster;