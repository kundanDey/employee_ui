import React, { Component } from 'react';
import { render } from 'react-dom';
import Login from './Login';
import Home from './Home';
import './style.css';

class App extends Component {
    handle(){
    console.log("hello");
  }
  render() {
    return (
      <div>
        <Home/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
