import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import MovieExplorer from './containers/MovieExplorer/MovieExplorer';
import MovieDetailsPage from './containers/MovieDetails/MovieDetailsPage';

import { useFilter, useFindMovieById } from './hooks/Fetch/Fetch';

import './App.css';
import { FilterTypes } from './components/UtilityBar/UtilityBar';
import MovieDetailsRoute from './containers/MovieDetails/MovieDetailsPage';

function App() {

  const [ movies, setMoviesBasedOnFilter ] = useFilter();
  const [ movie, setMovieWithId ] = useFindMovieById();

  const defaultFilter = FilterTypes.TrendingToday;

  useEffect( () => {
    //setMoviesBasedOnFilter( defaultFilter );
  }, [] );

  return (
    <div className="App">
      <BrowserRouter>
        <Layout onMovieSelected={ setMovieWithId }>
          <Route 
            path="/" 
            exact
            render={ () => (
              <MovieExplorer 
                onMovieSelected = { setMovieWithId }
                defaultFilter={ defaultFilter }
                onFilterChange={ setMoviesBasedOnFilter } 
                movies={ movies } 
                onSelect={ () => {} } 
              />
            )}/>
          <Route path="/movie/:id" component={ MovieDetailsPage } />
          
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
