import React, { Component } from 'react'
import './assets/style/main.scss';
import Synth from './Synth/Synth';

export default class App extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="main">
        <div className="main-container">
          <p className="app-title">Ericson's Fancy Synth</p>
          <Synth/>
        </div>
      </div>
    )
  }
}
