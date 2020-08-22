import React from 'react';
import './App.css';
import { ReactQueryDevtools } from 'react-query-devtools';
import 'materialize-css/dist/css/materialize.min.css';
import FetchPlaylist from './components/FetchPlaylist';

function App() {
  return (
    <>
      <div className="center">
        <h1>Academia do Vovotoqueiro</h1>
        <FetchPlaylist />
      </div>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
    </>
  );
}

export default App;
