import React, { useEffect } from 'react';

import Layout from './containers/Layout/Layout';
import MovieExplorer from './containers/MovieGallery/MovieExplorer';

import { useFilter } from './hooks/Fetch/Fetch';

import './App.css';
import { FilterTypes } from './components/UtilityBar/UtilityBar';

function App() {

  const [ movies, setMoviesBasedOnFilter ] = useFilter();
  const defaultFilter = FilterTypes.TrendingToday;

  useEffect( () => {
    //setMoviesBasedOnFilter( defaultFilter );
  }, [] );

  return (
    <div className="App">
      <Layout>
        <MovieExplorer 
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
