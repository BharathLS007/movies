import React from "react";
import constructionGif from "../assets/Construction.gif"; // 👈 updated path

function WatchList({ List, removefromwatchlit }) {
  return (
    <div className="movielist">
      <div className="contentbox">
        <h1 className="Trend">Movie WatchList</h1>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Title</th>
              <th>Poster</th>
              <th>Description</th>
              <th>TRP</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {List.map((movieObj, index) => {
              return (
                <tr key={movieObj.id}>
                  <td>{index + 1}</td>
                  <td>{movieObj.title}</td>
                  <td>
                    <img
                      src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`}
                      alt={movieObj.title}
                      style={{ width: "100px" }}
                    />
                  </td>
                  <td>{movieObj.overview}</td>
                  <td>{movieObj.vote_average}</td>
                  <td>
                    <button onClick={() => removefromwatchlit(movieObj.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WatchList;
