import React from 'react';

import Dropdown, { IDropdownOption } from '../UI/Dropdown/Dropdown';

import styles from './UtilityBar.module.css';

export enum FilterTypes {
    TrendingToday = "TrendingToday",
    TrendingThisWeek = "TrendingThisWeek",
    Popular = "Popular"
}

interface IUtilityBar {
    defaultFilter: FilterTypes;
    onFilterChange( filterType: FilterTypes ): Promise<void> 
}

const options: IDropdownOption[] = [
    {   
        name: "Trending today",
        value: FilterTypes.TrendingToday
    },
    {
        name: "Trending this week",
        value: FilterTypes.TrendingThisWeek
    },
    {
        name: "Popular",
        value: FilterTypes.Popular
    }
];

const UtilityBar = ( props: IUtilityBar ) => {

    return (
        <div className={ styles.utilityBar }>
            <Dropdown 
                defaultValue={ props.defaultFilter } 
                onChange={ props.onFilterChange } 
                options={ options } 
                name="filterMovies" />
        </div>
    );
};

export default UtilityBar;