import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { newWeatherData } from '../reducers/weatherDataReducer'
import ErrorMessage from '../components/ErrorMessage'

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  renderError() {
    const {
      apiError
    } = this.props;

    if (apiError) {
      return (
        <ErrorMessage error={apiError} />
      )
    }
  }

  render() {
    const { 
      handleSubmit,
      newWeatherData
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

          { this.renderError() }

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

const mapStateToProps = (state) => ({
  apiError: state.weatherDataReducer.error,
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators( { newWeatherData } ,dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(reduxFormComponent);
