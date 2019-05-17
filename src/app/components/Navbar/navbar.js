import * as React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

function Navbar(props) {
  const { routes } = props;
  return (
    <React.Fragment>
      <ul className="navbar">
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.title}</Link>
          </li>
          ))
        }
      </ul>
    </React.Fragment>
  )
}

export default Navbar;
