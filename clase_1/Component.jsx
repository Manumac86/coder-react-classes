// Componentes como functions
import React from 'react';

const Component = () => (
  <div>
    <h1 className="Titulo">Este es un Título</h1>
  </div>
);

export default Component;

// Componentes como clases
import React, { Component } from 'react';

class Component2 extends Component {
  render() {
    return (
      <div>
        <h1 className="Titulo">Este es un Título</h1>
      </div>
    );
  }
}

export default Component2;

