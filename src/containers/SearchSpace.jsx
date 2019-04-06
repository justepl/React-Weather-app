import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { clearError } from '../reducers/weatherDataReducer'
import Search from './Search/Search'
import ErrorMessage from '../components/ErrorMessage';

class SearchSpace extends Component {
  
  renderError() {
    const {
      apiError,
      clearError,
    } = this.props;

    if (apiError) {
      return (
        <ErrorMessage error={apiError} clearError={clearError}/>
      )
    }
  }
  
  render() { 
    return (
      <Fragment>
        <Search />
        { this.renderError() }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  apiError: state.weatherDataReducer.error,
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators( { clearError }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchSpace);
