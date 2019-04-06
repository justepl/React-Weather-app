import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { newWeatherData, clearError } from '../../reducers/weatherDataReducer'

class Search extends Component {
  render() {
    const { 
      handleSubmit,
      newWeatherData,
    } = this.props

    return (
      <div className="Search">
        <form onSubmit={handleSubmit(newWeatherData)}>
          <Field
            name="city"
            type="text"
            component="input"
            label="City"
          />

          <button 
            className="btn btn-primary"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    )
  }
}

const formConfig = {
  form: 'WeatherForm'
};

const reduxFormComponent = reduxForm(formConfig)(Search);

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators( { newWeatherData } ,dispatch)
})

export default connect(null, mapDispatchToProps)(reduxFormComponent);
