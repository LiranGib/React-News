import React, { Component } from 'react';
import './App.css';
import News from './News/News';
require('dotenv').config();


class App extends Component {
  render() {
    return (
      <div>
        <News />
      </div>
    );
  }
}

export default App;
