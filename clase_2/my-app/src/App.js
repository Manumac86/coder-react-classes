import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App container">
      <h1>Hola Coders!!!!!</h1>
      <h2>Bienvenidos!</h2>
      <MyComponent>
        <div>Hola!</div>
      </MyComponent>
      <MyComponent />
    </div>
  );
}

export default App;
