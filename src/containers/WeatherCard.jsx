import React, { Component } from 'react';
import CardHeader from '../components/CardHeader';
import CardBody from '../components/CardBody';

export default class WeatherCard extends Component {
  render() { 
    const { card } = this.props

    return (
      <div className="card weather-card col-md-6">
        <CardHeader city={card.name} temp={card.main.temp} />
        <CardBody
          min={card.main.temp_min}
          max={card.main.temp_max}
          humidity={card.main.humidity}
          wind={card.wind.speed}
        />
      </div>
    );
  }
}
