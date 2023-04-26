import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.styles.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink  to="/" >
            Games List
          </NavLink>
        </li>
        <li>
          <NavLink to="/top-games-playtime" >
            Top Games by Playtime
          </NavLink>
        </li>
        <li>
          <NavLink to="/top-games-players" >
            Top Games by Players
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-new-game" >
            Add New Game
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
