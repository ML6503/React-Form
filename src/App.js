import React from 'react';
import './App.css';
import Form from './Form';

const input = require('./input.json');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form input={input}/>
      </header>
    </div>
  );
}

export default App;
