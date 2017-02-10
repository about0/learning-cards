import React from 'react';
import './App.css';
import Header from './components/HeaderComponent';

class App extends React.Component {

  render() {
    const listStyle = {
      backgroundColor: "#60dc67"
    };
    return (
      <div className="container-fluid" style={listStyle}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
