import React, { Component } from 'react';

class MyComponent extends Component {
  let styles = {
    borderRadius: 3,
    backgroundColor: 'red'
  };

  render() {
    return (
      // javascript
      React.createElement('div', { classname: 'container' }, React.createElement('h2', {}, 'Hola desde mi componente!'));
      // JSX
      <div className="container" style={{borderRadius: 6, backgroundColor: 'blue'}}>
        <h2 style={styles}>Hola desde mi componente!</h2>
        <img src="" alt=""/>
      </div>
    );
  }
}

export default MyComponent;
