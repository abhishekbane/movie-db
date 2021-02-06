import React, { useState } from 'react';
import styles from './Header.module.css';

interface IHeader {
    title: string;
    enableSearch: boolean;
    onSearchClick( searchTerm: string ): void;
}

const Header: React.FunctionComponent<IHeader> = ( props: IHeader ) => {

    const [ searchTerm, setSearchTerm ] = useState("");

    const searchBar = props.enableSearch 
    ? (
        <div>
            <input type="text" value={ searchTerm } onChange={ (ev) => setSearchTerm(ev.target.value) } />
            <button onClick={ () => props.onSearchClick( searchTerm ) } >Go</button>
        </div>
    ) 
    : null;
    return (
        <header className={ styles.header }>
            <h1> { props.title } </h1>
            { searchBar }
        </header>
    );
};

export default Header;