import React from 'react';
import { render } from 'react-dom';
import Home from './Components/Home';

const App = () => {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Home/>
    </div>
  );
}

render(<App />, document.querySelector('#root'));