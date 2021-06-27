import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import s from './MovieDetailsPageBar.module.css';

const MovieDetailsPageBar = ({ match }) => {

    return (
        <section>
            <h3>Additional information</h3>
            <ul>
                <li>
                    <NavLink
                    exact
                    to={`${match.url}/cast`}
                    className={s.NavLink}
                    activeClassName="NavLink--active"
                >
                    Cast
                </NavLink>
                </li>
                <li>
                    <NavLink
                    to={`${match.url}/reviews`}
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

export default  withRouter(MovieDetailsPageBar) 