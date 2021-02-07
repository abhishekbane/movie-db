import React from 'react';

import SearchInput from '../SearchInput/SearchInput';

import styles from './TabBar.module.css';

export interface ITabBarOption {
    id?: number | string;
    name: string;
    value: string;
}

interface ITabBar {
    options: ITabBarOption[];
    allowSearch?: boolean;
    onSearch?( value: string ): void;
    onTabSelect(value: string) : void
}

const TabBar = ( props: ITabBar ) => {

    const tabBar = props.options.map( (option, index) => (
        <button key={ index } onClick={ () => props.onTabSelect( option.value ) }>{ option.name }</button>
    ) );

    const searchInput = props.allowSearch ? <SearchInput onSearch={ props.onSearch ? props.onSearch : () => {} } /> : null

    return (
        <nav className={ styles.tabBar }>
            <div>
                { tabBar }
            </div>
            <div>
                { searchInput }
            </div>
        </nav>
    );
};

export default TabBar;