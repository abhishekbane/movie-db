import React from 'react';

export interface IDropdownOption {
    id?: number | string;
    name: string;
    value: string;
}

interface IDropdown {
    defaultValue: string;
    options: IDropdownOption[];
    name: string;
    id?: string;
    onChange( newValue: string ): void;
}

const Dropdown = ( props: IDropdown ) => {
    const options = props.options.map( ( option, index ) => ( 
        <option key={ index } value={ option.value } > { option.name } </option> 
    ) );

    return (
        <select 
            value={ props.defaultValue } 
            onChange={ ( event ) => props.onChange(event.target.value) } 
            name={ props.name } id={ props.id }>
            { options }
        </select>
    );
};

export default Dropdown;