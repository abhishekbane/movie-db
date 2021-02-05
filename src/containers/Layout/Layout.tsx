import React from 'react';

import Header from '../../components/Header/Header';
import UtilityBar from '../../components/UtilityBar/UtilityBar';

interface ILayout {
    children: React.ReactNode;
}

const Layout = ( props: ILayout ) => {
    return (
        <div>
            <Header title="Movie DB" enableSearch/>
            <UtilityBar />
            { props.children }
        </div>
    );
};

export default Layout;