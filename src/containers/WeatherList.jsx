import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import WeatherCard from './WeatherCard';

class WeatherList extends Component {
  
  renderCard(){
    const { weatherCards } = this.props
    if (Array.isArray(weatherCards)) {
      return weatherCards.map((card, key) => {
        return (
          <WeatherCard key={key} card={card} />
        )
      })
    }
  }
  
  render() {
    return (
      <div className="row">
        { this.renderCard() }
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  weatherCards: state.weatherDataReducer.data,
})

// const mapDispatchToProps = (dispatch) => ({
//   ...bindActionCreators( { clearError }, dispatch)
// })

export default connect(mapStateToProps, null)(WeatherList);
