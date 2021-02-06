import React, { useEffect } from 'react';

import Layout from './containers/Layout/Layout';
import MovieExplorer from './containers/MovieExplorer/MovieExplorer';
import MovieDetails from './containers/MovieDetails/MovieDetails';

import { useFilter, useFindMovieById } from './hooks/Fetch/Fetch';

import './App.css';
import { FilterTypes } from './components/UtilityBar/UtilityBar';

function App() {

  const [ movies, setMoviesBasedOnFilter ] = useFilter();
  const [ movie, setMovieWithId ] = useFindMovieById();

  const defaultFilter = FilterTypes.TrendingToday;

  useEffect( () => {
    //setMoviesBasedOnFilter( defaultFilter );
  }, [] );

  return (
    <div className="App">
      <Layout onMovieSelected={ setMovieWithId }>
        <MovieExplorer 
          onMovieSelected = { setMovieWithId }
          defaultFilter={ defaultFilter }
          onFilterChange={ setMoviesBasedOnFilter } 
          movies={ movies } 
          onSelect={ () => {} } 
        />
        <MovieDetails movie={ movie } />
      </Layout>
    </div>
  );
};

export default App;
