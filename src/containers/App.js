import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="display-4">Welcome to weather app</h1>

          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        
      </div>
    )
  }
}
