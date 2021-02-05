import React from 'react';

import Header from '../../components/Header/Header';
import UtilityBar, { FilterTypes } from '../../components/UtilityBar/UtilityBar';

interface ILayout {
    onFilterChange( filterType: FilterTypes ):Promise<void>;
    children: React.ReactNode;
}

const Layout = ( props: ILayout ) => {
    return (
        <div>
            <Header title="Movie DB" enableSearch/>
            <UtilityBar onFilterChange={ props.onFilterChange } />
            { props.children }
        </div>
    );
};

export default Layout;