import React, { useState } from 'react';

interface ISearchBoxProps {
    onSearch( searchTerm: string ): void;
}

const SearchInput = ( props: ISearchBoxProps ) => {
    const [ searchTerm, setSearchTerm ] = useState("");

    return (
        <div>
            <input type="text" value={ searchTerm } onChange={ (ev) => setSearchTerm(ev.target.value) } />
            <button onClick={ () => (searchTerm ? props.onSearch( searchTerm ) : null) } >Go</button>
        </div>
    );
};

export default SearchInput;