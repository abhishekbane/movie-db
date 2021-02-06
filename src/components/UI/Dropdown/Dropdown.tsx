import React, { useState } from 'react';

import styles from './Dropdown.module.css';

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

    const [ selectedValue, setSelectedValue ] = useState( props.defaultValue );

    const options = props.options.map( ( option, index ) => ( 
        <option className={ styles.option } key={ index } value={ option.value } > { option.name } </option> 
    ) );

    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
        props.onChange(event.target.value);
    }

    return (
        <select 
            className={ styles.dropdown }
            value={ selectedValue } 
            onChange={ onChangeHandler } 
            name={ props.name } id={ props.id }>
            { options }
        </select>
    );
};

export default Dropdown;