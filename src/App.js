import React, { Component } from 'react'
import profilePicture from './assets/mark.jpg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="app">
          <img
            src={profilePicture}
            alt="Mark Chow professional headshot"
            className="profile-image"
          />
          <h1 className="primary-heading">MARK CHOW</h1>
          <h2 className="secondary-heading">
            Marketing student studying at RMIT from Mexico{' '}
            <span role="img">🇲🇽</span> Currently based in Melbourne on a student
            visa but looking for exciting opportunities
          </h2>
          <h3 className="tertiary-heading">
            Coming soon... for urgent inquiries, please call 0433 883 222
          </h3>
        </div>
      </div>
    )
  }
}

export default App
