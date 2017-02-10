import React from 'react';
import Card from './CardComponent';
import CARDS from '../data/data.json';

function CardList(props) {
  const listStyle = {
    backgroundColor: "#77D9C4"
  };
  const cardItems = [];
  CARDS.forEach(card => {
    cardItems.push(
      <Card
        topic={card.topic}
        explanation={card.explanation}
        key={card.id}
      />
    )
  });

  return (
    <ul style={listStyle}>{cardItems}</ul>
  )
}

export default CardList;