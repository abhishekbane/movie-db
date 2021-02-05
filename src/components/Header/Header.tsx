import React from 'react';
import styles from './Header.module.css';

interface IHeader {
    title: string;
    enableSearch: boolean;
}

const Header: React.FunctionComponent<IHeader> = ( props: IHeader ) => {
    const searchBar = props.enableSearch ? <input type="text" /> : null;
    return (
        <header className={ styles.header }>
            <h1> { props.title } </h1>
            { searchBar }
        </header>
    );
};

export default Header;