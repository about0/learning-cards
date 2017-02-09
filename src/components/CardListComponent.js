import React from 'react';
import Card from './CardComponent';


function CardList(props) {
  const CARDS = [
    {
      id: 1,
      topic: ";",
      explanation: "separates javascript statements. added at the end of each executable statement. makes it possible to write many statements on one line."
    },
    {id: 2, topic: "javascript elements are executed in what order", explanation: "in the sequence they are written"},
    {id: 3, topic: "groups of javascript statements", explanation: "blocks"},
  ];
  const cardItems = [];
  CARDS.forEach(card => {
    cardItems.push(
      <Card
        topic={card.topic}
        explanation={card.explanation}
        key={card.id}
      />)

  });

  return(
    <ul>{cardItems}</ul>
  )
}

export default CardList;