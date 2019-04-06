import React from 'react';

const ErrorMessage = (props) => {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      <strong>Holy guacamole ! </strong>
      { props.error }
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >

        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}
export default ErrorMessage
