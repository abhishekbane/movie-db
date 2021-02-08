import React, { useState, useRef, useEffect } from 'react';

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
    deselect?: boolean;
    onChange( newValue: string ): void;
}

const Dropdown = ( props: IDropdown ) => {

    const [ selectedValue, setSelectedValue ] = useState( props.defaultValue );
    const dropdownRef = useRef(null);

    useEffect(() => {
        if( props.deselect ) {
            (dropdownRef as any).current.selectedIndex="-1";
        }
    }, [  props.deselect ]);

    const options = props.options.map( ( option, index ) => ( 
        <option className={ styles.option } key={ index } value={ option.value } > { option.name } </option> 
    ) );

    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
        props.onChange(event.target.value);
    }

    if(dropdownRef.current){
        console.log((dropdownRef as any).current.selectedIndex);
        console.log((dropdownRef as any).current.value);
    }

    return (
        <select
            ref={ dropdownRef } 
            className={ styles.dropdown }
            value={ props.deselect ? undefined : selectedValue } 
            onChange={ onChangeHandler } 
            name={ props.name } id={ props.id }>
            { options }
        </select>
    );
};

export default Dropdown;