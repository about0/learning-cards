import React from 'react';
import './CardComponent.css';

class CardComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isToggleOn: false
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
            <p className="card-text" >{this.state.isToggleOn ? this.props.explanation : this.props.topic}</p>
          </div>
        </div>
    )
  }
}


export default CardComponent;