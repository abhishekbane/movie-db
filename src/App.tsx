import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import MovieExplorer from './containers/MovieExplorer/MovieExplorer';
import MovieDetailsPage from './containers/MovieDetails/MovieDetailsPage';
import ActorDetailsPage from './containers/ActorDetails/ActorDetailsPage';

import './App.css';
import { PathName } from './components/UI/RouterLink/RouterLink';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={ MovieExplorer }/>
          <Route path={`${process.env.PUBLIC_URL}/${PathName.movie}/:id`} component={ MovieDetailsPage } />
          <Route path={`${process.env.PUBLIC_URL}/${PathName.actor}/:id`} component={ ActorDetailsPage } />
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
