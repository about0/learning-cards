import React from 'react'
import Card from './CardComponent';
import Carousel from 'nuka-carousel';
import './cardSwipe.css';

import CARDS from '../data/data.json';

function CardSwipe(props) {
  const carouselStyles = {
    contentAlign: 'center'
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
    <Carousel style={carouselStyles}>
      {cardItems}
    </Carousel>
  )
}

export default CardSwipe;