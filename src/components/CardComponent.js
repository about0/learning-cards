import React from 'react';
import './CardComponent.css';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isToggleOn: true
    }
  }

  handleClick(){
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });

  }

  render() {
    return (
        <div className="card" onClick={this.handleClick}>
          <div className="card-block">
            <p className="card-text" id="explanation">{this.state.isToggleOn ? this.card.explanation : this.card.topic}</p>
            <p className="card-text" id="topic" hidden></p>
          </div>
        </div>
    )
  }
}


export default CardComponent;