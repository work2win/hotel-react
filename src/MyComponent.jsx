import React, { Component } from 'react';

class MyComponent extends Component {
  myFunction = () => {
    alert('Function called!');
    
  };

  render() {
    return <h1>Hello, World!</h1>;
  }
}

export default MyComponent;