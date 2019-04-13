import React, { Component } from 'react';
import './App.css';
import News from './News/News'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <News />
        </header>
      </div>
    );
  }
}

export default App;
