import React from 'react';

// Components
import NavBar from './components/NavBar/NavBar';

// Styles
import './App.css';

function App() {

  let homeName = 'Home Products';
  let handleClick = () => console.log('Hey! Esto es un click.');
  let handleClickFooter = () => console.log('Hey! Esto es un click desde el footer!.');

  return (
    <div className="App">
      <header>
        <NavBar
          name={homeName} 
          price={'Cart'} 
          click={handleClick}
        />
      </header>
      {/* <footer>
        <NavBar name={'Footer Products'} price={'Footer Cart'} click={handleClickFooter}>
          <p>Soy un parrafo</p> 
          <div>
            Hola soy un Children!
          </div>
        </NavBar>
      </footer> */}
    </div>
  );
}

export default App;
