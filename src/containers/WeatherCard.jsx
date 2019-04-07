import React, { Component } from 'react';
import CardHeader from '../components/CardHeader';
import CardBody from '../components/CardBody';

export default class WeatherCard extends Component {
  render() { 
    return (
      <div className="card weather-card col-md-6">
        <CardHeader />
        <CardBody />
      </div>
    );
  }
}
