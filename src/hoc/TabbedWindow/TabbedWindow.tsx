import React from 'react';

import TabBar, { ITabBarOption } from '../../components/TabBar/TabBar';

import styles from './TabbedWindow.module.css';

export enum FilterTypes {
    TrendingToday = "TrendingToday",
    TrendingThisWeek = "TrendingThisWeek",
    Popular = "Popular"
}

interface ITabbedWindow {
    defaultFilter: FilterTypes;
    onTabSelect( filterType: FilterTypes ): void;
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
            <TabBar defaultFilter={ props.defaultFilter } onTabSelect={ props.onTabSelect } allowSearch onSearch={ props.onSearch } options={ options } />
            { props.children }
            
        </div>
    );
};

export default TabbedWindow;