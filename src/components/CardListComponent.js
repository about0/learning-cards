import React from 'react';
import Card from './CardComponent';


function CardList(props) {
  const cards = props.cards;
  const cardItems = cards.map(card => {
      {card.explanation}
  });
console.log(cardItems);
  return(
    <ul>{cardItems}</ul>
  )
}


// class CardListComponent extends React.Component {
//
//   render() {
//     const cardItems = this.props.cards.forEach(card => {
//
//     });
//     return (
//       this.props.cards.forEach(card => {
//         <Card topic={card.topic} explanation={card.explanation}/>
//       })
//     )
//   }
// }

export default CardList;