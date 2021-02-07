import React from 'react';
import styles from './ScrollableSection.module.css';

export interface IScrollableSection {
    children: React.ReactNode;
}

const ScrollableSection = ( props: IScrollableSection ) => {
    return (
        <section className={ styles.section }>
            { props.children }
        </section>
    );
};

export default ScrollableSection;