import React from 'react';

import Dropdown, { IDropdownOption } from '../UI/Dropdown/Dropdown';

import styles from './UtilityBar.module.css';

const options: IDropdownOption[] = [
    {   
        name: "Trending today",
        value: "trendingToday"
    },
    {
        name: "Trending this week",
        value: "trendingThisWeek"
    },
    {
        name: "Popular",
        value: "popular"
    }
];

const UtilityBar = () => {
    return (
        <div className={ styles.utilityBar }>
            <Dropdown onChange={ (val) => alert(val) } options={ options } name="filterMovies" />
        </div>
    );
};

export default UtilityBar;