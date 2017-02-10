import React from 'react';


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
    const cardStyle = {
      padding: "10px",
      margin: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      cursor: "pointer",
      minWidth: "200px",
      maxWidth: "600px",
      height: "150px",
      textAlign: "center",
      border: "1px solid #B2BDE8",
      backgroundColor: "#D4D1FF"
    };
    return (
        <div  onClick={this.handleClick} style={cardStyle}>
          <div className="card-block">
            <p className="card-text" >{this.state.isToggleOn ? this.props.explanation : this.props.topic}</p>
            {this.props.children}
          </div>
        </div>
    )
  }
}

export default CardComponent;