import React from 'react';
import './App.css';
import CardList from  './components/CardListComponent';



class App extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}

export default App;
