import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MadLib from './components/MadLib';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MadLib preText="Once upon a time" name="Jacob" midText="was very bored, so he" madlib="jumped" postText="next to a cat"></MadLib>
        <MadLib preText="" name="Mary" midText="had a little" madlib="lamb" postText="on a Tuesday, ayeeee."></MadLib>
      </div>
    );
  }
}

export default App;
