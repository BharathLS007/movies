import React from "react";
import constructionGif from "../assets/Construction.gif"; // 👈 updated path

function WatchList() {
  return (
    // <div style={{ textAlign: 'center', marginTop: '50px' }}>
    //   <h2>This Page is Under Construction 🚧</h2>
    //   <img
    //     src={constructionGif}
    //     alt="Under Construction"
    //     style={{ width: '500px', borderRadius: '1rem' }}
    //   />
    // </div>

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
              <th>genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <td>1</td>
            <td>MEGAN 2.0</td>
            <td><img src="https://image.tmdb.org/t/p/original//4a63rQqIDTrYNdcnTXdPsQyxVLo.jpg" alt="img" /></td>
            <td>A mind-bending thriller about dreams within dreams.</td>
            <td>Science Fiction</td>
            <td><button>Delete</button></td>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WatchList;
