import React, { useState } from 'react';

import styles from './SearchInput.module.css';

interface ISearchBoxProps {
    onSearch( searchTerm: string ): void;
}

const SearchInput = ( props: ISearchBoxProps ) => {
    const [ searchTerm, setSearchTerm ] = useState("");

    return (
        <div className={ styles.searchInput }>
            <input 
                className={ styles.searchBox } 
                type="text" 
                value={ searchTerm } 
                onChange={ (ev) => setSearchTerm(ev.target.value) } />
            <button className={ styles.goButton } onClick={ () => (searchTerm ? props.onSearch( searchTerm ) : null) } >Go</button>
        </div>
    );
};

export default SearchInput;