import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { newWeatherData } from '../../reducers/weatherDataReducer'

class Search extends Component {
  render() {
    const { 
      handleSubmit,
      newWeatherData,
    } = this.props

    return (
      <div className="Search">
        <form 
          className="form-group"
          onSubmit={handleSubmit(newWeatherData)}
        >
          <h5 className="card-title">Entrez le nom d'une ville</h5>
          <Field
            className="card-text form-control"
            name="city"
            type="text"
            component="input"
            label="City"
            placeholder="Paris, Londres, New York, ..."
          /><br />

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
