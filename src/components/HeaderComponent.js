import React from 'react'
import {Link} from 'react-router';
import Card from './CardComponent';
import CardList from './CardListComponent';


class HeaderComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <Link to="/cards">All cards list</Link>
        <Link to="/about">About current project</Link>
      </nav>
    )
  }
}


export default HeaderComponent;