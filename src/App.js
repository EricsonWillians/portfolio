import React, { Component } from 'react'
import './assets/style/main.scss';
import Synth from './Synth';

export default function App() {
  return (
    <div className="main">
        <div className="main-container">
          <p className="app-title">Ericson's Synth</p>
          <Synth/>
        </div>
      </div>
  )
}
