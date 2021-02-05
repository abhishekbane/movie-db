import React from 'react';

import Layout from './containers/Layout/Layout';
import MovieGallery from './containers/MovieGallery/MovieGallery';

import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <MovieGallery movies={ [] } onSelect={ () => {} } />
      </Layout>
    </div>
  );
}

export default App;
