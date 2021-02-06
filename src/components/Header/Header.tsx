import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <button onClick={ () => (searchTerm ? props.onSearchClick( searchTerm ) : null) } >Go</button>
        </div>
    ) 
    : null;
    return (
        <header className={ styles.header }>
            <Link to="/">
                <h1> { props.title } </h1>
            </Link>
            { searchBar }
        </header>
    );
};

export default Header;