import React, { Component } from 'react';
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
      <div className="card w-50 card-body">
        <Search />
        { this.renderError() }
      </div>
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
