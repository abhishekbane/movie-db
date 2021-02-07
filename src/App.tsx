import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import MovieExplorer from './containers/MovieExplorer/MovieExplorer';
import MovieDetailsPage from './containers/MovieDetails/MovieDetailsPage';
import ActorDetailsPage from './containers/ActorDetails/ActorDetailsPage';

import { useFilter, useFindMovieById } from './hooks/Fetch/Fetch';

import './App.css';
import { FilterTypes } from './components/UtilityBar/UtilityBar';

function App() {

  const [ movies, setMoviesBasedOnFilter ] = useFilter();

  const defaultFilter = FilterTypes.TrendingToday;

  useEffect( () => {
    setMoviesBasedOnFilter( defaultFilter );
  }, [] );

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Route 
            path="/" 
            exact
            render={ () => (
              <MovieExplorer 
                defaultFilter={ defaultFilter }
                onFilterChange={ setMoviesBasedOnFilter } 
                movies={ movies } 
              />
            )}/>
          <Route path="/movie/:id" component={ MovieDetailsPage } />
          <Route path="/actor/:id" component={ ActorDetailsPage } />
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
