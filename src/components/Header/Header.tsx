import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

interface IHeader {
    title: string;
}

const Header: React.FunctionComponent<IHeader> = ( props: IHeader ) => {

    return (
        <header className={ styles.header }>
            <Link className={ styles.link } to="/">
                <h1> { props.title } </h1>
            </Link>
        </header>
    );
};

export default Header;