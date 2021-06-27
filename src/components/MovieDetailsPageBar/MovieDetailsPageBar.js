import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import s from './MovieDetailsPageBar.module.css';

class MovieDetailsPageBar extends Component {
    state={ }

render() {
    return (
        <section>
            <h3>Additional information</h3>
            <ul>
                <li>
                    <NavLink
                    exact
                    to="/movies/:movieId/cast"
                    className={s.NavLink}
                    activeClassName="NavLink--active"
                >
                    Cast
                </NavLink>
                </li>
                <li>
                    <NavLink
                    exact
                    to="/movies/:movieId/reviews"
                    className={s.NavLink}
                    activeClassName="NavLink--active"
                >
                    Reviews
                </NavLink>  
                </li>

            </ul>
        </section>
    )
    }
}

export default MovieDetailsPageBar