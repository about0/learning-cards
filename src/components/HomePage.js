import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Simple Learning Cards application</h1>
        <p>React, ES6, Routing.</p>
        <button href="cards" className="btn btn-primary btn-lg" disabled>Learn more</button>
      </div>
    );
  }
}

export default HomePage;