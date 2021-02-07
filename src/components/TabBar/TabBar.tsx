import React, { useState } from 'react';

import SearchInput from '../SearchInput/SearchInput';

import { FilterTypes } from '../../hoc/TabbedWindow/TabbedWindow';

import styles from './TabBar.module.css';

export interface ITabBarOption {
    id?: number | string;
    name: string;
    value: string;
}

interface ITabBar {
    options: ITabBarOption[];
    allowSearch?: boolean;
    defaultFilter: FilterTypes;
    onSearch?( value: string ): void;
    onTabSelect(value: string) : void
}

const TabBar = ( props: ITabBar ) => {
    const [ selectedTab, setSelectedTab ] = useState(props.defaultFilter as string);

    const onTabSelectedHandler = ( value: string ) => {
        props.onTabSelect( value );
        setSelectedTab(value);
    }

    const onSearchHandler = ( searchTerm: string ) => {
        if(props.onSearch){
            props.onSearch( searchTerm );
        }
        setSelectedTab("");
    }

    const tabBar = props.options.map( (option, index) => {
        const tabClassNames = `${styles.tab} ${selectedTab===option.value?styles.tabSelected:""}`
        return (
            <button 
                className={ tabClassNames } 
                key={ index } 
                onClick={ () => onTabSelectedHandler(option.value) }>
                    { option.name }
            </button>
        )
    });

    const searchInput = props.allowSearch ? <SearchInput onSearch={ onSearchHandler } /> : null
    const searchSelectedClass = selectedTab==="" ? styles.tabSelected : "";
    const searchContainerClasses = `${styles.searchInputContainer} ${searchSelectedClass}`

    return (
        <nav className={ styles.tabBar }>
            <div>
                { tabBar }
            </div>
            <div className={ searchContainerClasses }>
                { searchInput }
            </div>
        </nav>
    );
};

export default TabBar;