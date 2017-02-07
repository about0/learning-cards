import React from 'react';
import './App.css';
import Card from './components/CardComponent';


const CARDS = [
  {topic: ";", explanation:"separates javascript statements. added at the end of each executable statement. makes it possible to write many statements on one line."}
];

class App extends React.Component {
  render() {
    return (
      <Card cards={CARDS}/>
    );
  }
}



export default App;
