import React from 'react';
import './App.css';
import CardList from  './components/CardListComponent';

const CARDS = [
  {id: 1, topic: ";", explanation:"separates javascript statements. added at the end of each executable statement. makes it possible to write many statements on one line."},
  {id: 2, topic: "javascript elements are executed in what order", explanation:"in the sequence they are written"},
  {id: 3, topic: "groups of javascript statements", explanation:"blocks"},
];

class App extends React.Component {

  render() {
    return (
      <CardList cards={CARDS} toggled/>
    );
  }
}



export default App;
