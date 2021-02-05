import React, { useEffect } from 'react';

import Layout from './containers/Layout/Layout';
import MovieGallery from './containers/MovieGallery/MovieGallery';

import useFetch from './hooks/Fetch/Fetch';

import './App.css';
import { FilterTypes } from './components/UtilityBar/UtilityBar';

function App() {

  const [ movies, setMoviesBasedOnFilter ] = useFetch();
  const defaultFilter = FilterTypes.TrendingToday;

  useEffect( () => {
    setMoviesBasedOnFilter( defaultFilter );
  }, [] );

  return (
    <div className="App">
      <Layout>
        <MovieGallery 
          defaultFilter={ defaultFilter }
          onFilterChange={ setMoviesBasedOnFilter } 
          movies={ movies } 
          onSelect={ () => {} } 
        />
      </Layout>
    </div>
  );
};

export default App;
