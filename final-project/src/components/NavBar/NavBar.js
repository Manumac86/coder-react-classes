import React from 'react';
import './NavBar.scss';
import CartIcon from './CartIcon/CartIcon';

const NavBar = ({ name, click, children }) => {
  return (
    <div className='navBar'>
      {
        // Dentro de llaves podemos escribir Javascript nativo!
        console.log('Hola desde JSX!')
      }
      <div className="navBar_list">
        <ul className='navBar_list'>
          <li className='navBar_list_item'>{name}</li>
          <li className='navBar_list_item'>Products</li>
          <li className='navBar_list_item'>Cart</li>
        </ul>
      </div>
      {children}   
      <CartIcon />
    </div>
  );
}

export default NavBar;
