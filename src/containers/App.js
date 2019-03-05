import React, { Component } from 'react';
import Search from '../components/Search'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="display-4">Welcome to weather app</h1>

        <Search />
        
      </div>
    )
  }
}
