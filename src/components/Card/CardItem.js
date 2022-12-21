import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ name, image, gender, species, status, id }) => {
  return (
    <li class="card mb-3 px-0" style={{ maxWidth: "250px" }}>
      <Link to={"/hero/" + id} className="text-decoration-none">
        <div class="card position-relative">
          <span
            style={{ top: "10px", right: "15px" }}
            className={
              status === "Alive"
                ? "badge px-3 position-absolute text-bg-success"
                : status === "Dead"
                ? "badge px-3 position-absolute text-bg-danger"
                : "badge px-3 position-absolute text-bg-secondary"
            }
          >
            {status}
          </span>
          <img src={image} alt={name} />
          <div class="card-body">
            <h5 class="card-title text-black">{name}</h5>
            <p class="card-text fs-5 mb-1 text-black">{gender}</p>
            <span className="d-block text-black">{species}</span>
            <a href="/" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CardItem;
