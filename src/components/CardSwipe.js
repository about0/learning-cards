import React from 'react'
import Slider from 'react-slick';
import CardList from './CardListComponent';
import Card from './CardComponent';

class CardSwipe extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="container">
        <Slider {...settings}>
          <Card>1</Card>
          <Card>2</Card>
          <Card>3</Card>
          <Card>4</Card>
        </Slider>
      </div>
    )
  }
}

export default CardSwipe;