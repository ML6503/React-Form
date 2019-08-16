import React from 'react';
import './App.css';
import Form from './Form';

const input = require('./input.json');

function App() {
  return (
    <div className="App" data-testid="app-screen">
      <header className="App-header">
        <h4>React Form</h4>
        <div className="wrapper">
        <Form input={input}/>
        </div>
      </header>        
    </div>
  );
}

export default App;
