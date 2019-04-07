import React, { Component } from 'react';
import SearchSpace from './SearchSpace';
import '../assets/index.css'
import WeatherCard from './WeatherCard';

export default class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1 className="display-4">Welcome to weather app</h1>

        <SearchSpace />
        <WeatherCard />
        
      </div>
    )
  }
}
