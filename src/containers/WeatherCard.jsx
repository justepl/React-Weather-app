import React, { Component } from 'react';
import CardHeader from '../components/CardHeader';
import CardBody from '../components/CardBody';

export default class WeatherCard extends Component {
  render() { 
    const { card } = this.props

    return (
      <div className="card weather-card col-md-6">
        <CardHeader city={card.name} temp={card.main.temp} />
        <CardBody />
      </div>
    );
  }
}
