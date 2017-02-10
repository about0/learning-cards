import React from 'react'
import {Link} from 'react-router';
import Card from './CardComponent';
import CardList from './CardListComponent';


class HeaderComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <Link to="/" className="navbar-brand">Learning-Cards</Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/cards">Card List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/swiper">Card Swiper</Link>
              </li>
            </ul>
        </div>
      </nav>
    )
  }
}


export default HeaderComponent;