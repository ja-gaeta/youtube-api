import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="center">
      <h1>Academia do Vovotoqueiro</h1>
      <p>{process.env.REACT_APP_HOST_API_KEY}</p>
    </div>
  );
}

export default App;
