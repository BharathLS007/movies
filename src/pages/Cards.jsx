import React from "react";

function Cards() {
  return (
<div className="container my-3">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 moviecards">
    <div className="col">
      <div className="card bg-dark text-white shadow rounded">
        <img src="https://tse2.mm.bing.net/th/id/OIP.qkTYV2fJRgyssxhjrSuDbwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3" className="img-fluid"
          alt="Movie"
          style={{
            height: "40vh",
            objectFit: "cover",
            borderRadius: "1rem",
            margin: "5%",
          }}
        />
      </div>
    </div>

    {/* Repeat the .col div for more cards */}
  </div>
</div>

    
    
  );
}

export default Cards;
