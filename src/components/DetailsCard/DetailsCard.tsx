import React from 'react';

import styles from './DetailsCard.module.css';

export interface IDetailsCard{
    posterSource: string;
    posterAlt: string;
    title: string;
    children: React.ReactNode;
}

const DetailsCard = ( props: IDetailsCard ) => {

    return (
        <div className={ styles.basicDetailsCard }>
            <img src={ props.posterSource } alt={ props.posterAlt }/>
            <div className={ styles.basicDetails }>
                <h2 className={ styles.title }>{ props.title }</h2>
                { props.children }
            </div>
        </div>
    )
};

export default DetailsCard;