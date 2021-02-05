import React, { useEffect } from 'react';

import Layout from './containers/Layout/Layout';
import MovieGallery from './containers/MovieGallery/MovieGallery';

import useFetch from './hooks/Fetch/Fetch';

import './App.css';
import { FilterTypes } from './components/UtilityBar/UtilityBar';

function App() {

  const [ movies, setMoviesBasedOnFilter ] = useFetch();

  useEffect( () => {
    setMoviesBasedOnFilter(FilterTypes.TrendingToday);
  }, [] );

  return (
    <div className="App">
      <Layout onFilterChange = { setMoviesBasedOnFilter }>
        <MovieGallery movies={ movies } onSelect={ () => {} } />
      </Layout>
    </div>
  );
};

export default App;
