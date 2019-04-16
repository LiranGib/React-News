import React, { Component } from 'react';
import './App.css';
import SingleSide from './News/SingleSide'
import News from './News/News';
import SideNews from './News/SideNews';
require('dotenv').config();


class App extends Component {
  render() {
    return (
      <div className="app-container">
        <News />
        <SideNews />
      </div>
    );
  }
}

export default App;
