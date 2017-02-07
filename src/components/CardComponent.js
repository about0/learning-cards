import React from 'react';
import './CardComponent.css';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log('Handle Click function');
  }

  render() {
    return (
        <div className="card" onClick={this.handleClick}>
          <div className="card-block">
            <p className="card-text">{this.props.cards[0].explanation}</p>
          </div>
        </div>
    )
  }
}


export default CardComponent;