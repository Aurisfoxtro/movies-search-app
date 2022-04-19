import { useState } from "react";
import star from "../../icons/star.svg"

function Movie({data}) {

    return (
      <>
        <div className="movie-box">
          <div className="poster">
            <img className="poster" src={`https://image.tmdb.org/t/p/original/${data.image}`} alt="poster"/>
          </div>
          <div className="movie-info">
              <h2>{data.title} ({data.year.slice(0, 4)})</h2>
              <p className="italic">Original language: <span className="uppercase">{data.language}</span></p>
              <div className="rating-box">
                <img className="staricon" src={star} alt="star"/>
                <div className="rating-info">
                  <p><span className="rating">{data.rating}</span>/10</p>
                  <p>{data.votes} votes</p>
                </div>
              </div>
              <p className="description">{data.overview}</p>
          </div>
        </div>
      </>
    );
  }
  
  export default Movie;