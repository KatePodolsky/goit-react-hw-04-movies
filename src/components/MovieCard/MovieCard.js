import React from 'react';
import s from './MovieCard.module.css';


const MovieCard = ({ posterImg, title, releaseDate, voteAverage, overview, genres }) => {
    return (
        <>
            <div className={s.MovieCard}>
              <div className={s.PosterImg}>
                <img src={posterImg} alt={title} />
              </div>
              <div className={s.Descr}>
                <h2>{`${title} (${releaseDate})`}</h2>
                <p>User Score: {voteAverage * 10}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                {genres&&<h3>Genres</h3>}
                {genres.map(({ name }) => name).join(' ')}
              </div>
            </div>
        </>
    )
}

export default MovieCard