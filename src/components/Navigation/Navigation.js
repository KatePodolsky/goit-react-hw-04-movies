import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
// import routes from '../routes';

const Navigation = () => {
    return (
        <nav>
          <ul className={s.Nav}>
              <li className={s.NavItem}>
                <NavLink
                    exact
                    to="/"
                    className={s.NavLink}
                    activeClassName="NavLink--active"
                >
                    Home
                </NavLink>
              </li>
               <li>
                <NavLink
                    to="/movies"
                    className={s.NavLink}
                    activeClassName="NavLink--active"
                >
                    Movies
                </NavLink>
              </li>
              </ul>
    </nav>
  );
};

export default Navigation;