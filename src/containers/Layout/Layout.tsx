import React from 'react';

import Header from '../../components/Header/Header';

interface ILayout {
    children: React.ReactNode;
}

const Layout = ( props: ILayout ) => {
    return (
        <div>
            <Header title="Movie DB" enableSearch/>
            
            { props.children }
        </div>
    );
};

export default Layout;