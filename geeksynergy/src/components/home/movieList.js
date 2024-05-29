

import React from 'react';
import "./style.css"

const MovieList = ({ movie }) => {


    return (
        <>
        <div className="card-container">
       <div className="card mb-4">
            <div className="single">
                <div className="votes">
                    <div>
                        <button className="btnn">&#9650;</button>
                        <div className="vote-count">{movie.totalVoted}</div>
                        <button className="btnn">&#9660;</button>
                    </div>
                </div>
                <div className="image">
                    <img src={movie.poster} className="card-img" alt={`${movie.title} poster`} />
                </div>
                <div className="movie-details">
                    <h3 className="card-title">{movie.title}</h3>
                    <p><strong>Genre:</strong> {movie.genre}</p>
                    <p><strong>Director:</strong> {movie.director}</p>
                    <p><strong>Starring:</strong> {movie.stars}</p>
                    <p>
                  <span>Mins</span>
                  <span> | </span>
                  <span>{movie.language}</span>
                  <span> | </span>
                  <span> {new Date(movie.releasedDate * 1000).toLocaleDateString()}</span>
                </p>
                <p style={{ color: "#7dd5d8" }}>
                  <span>{movie.pageViews} views</span>
                  <span>|</span>
                  <span>Voted by {movie.totalVoted} People</span>
                </p>
                </div>
            </div>
            <a href={movie.trailerUrl} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">Watch Trailer</a>
        </div>
        </div>
        </>
    );
};

export default MovieList;
