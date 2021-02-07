import React from 'react';

import styles from './SubSection.module.css';

export interface ISubSection{
    title: string;
    children: React.ReactNode;
}

const SubSection = ( props: ISubSection ) => {

    return (
        <div className={ styles.subSection }>
            <h3 className={ styles.title }>{ props.title }</h3>
            { props.children }
        </div>
    );
};

export default SubSection;