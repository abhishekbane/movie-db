import React from 'react';

import SearchInput from '../../components/SearchInput/SearchInput';
import Dropdown, { IDropdownOption } from '../../components/UI/Dropdown/Dropdown';
import TabBar, { ITabBarOption } from '../../components/TabBar/TabBar';

import { TrendingDuration } from '../../hooks/Fetch/Fetch';

import styles from './TabbedWindow.module.css';

export enum FilterTypes {
    TrendingToday = "TrendingToday",
    TrendingThisWeek = "TrendingThisWeek",
    Popular = "Popular"
}

interface ITabbedWindow {
    defaultFilter: FilterTypes;
    onTabSelect( filterType: FilterTypes ): Promise<void> 
    onSearch( searchTerm: string ): void
    children: React.ReactNode;
}

const options: ITabBarOption[] = [
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

const TabbedWindow = ( props: ITabbedWindow ) => {
    return (
        <div className={ styles.tabbedWindow }>
            <TabBar onTabSelect={ props.onTabSelect } allowSearch onSearch={ props.onSearch } options={ options } />
            { props.children }
            
        </div>
    );
};

export default TabbedWindow;