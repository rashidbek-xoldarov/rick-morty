import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SinglePage = () => {
  const [data, setData] = useState("");
  const { name, status, species, gender, image } = data;
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);

  return (
    <div className="container mx-auto">
      <h3 className="fs-3 text-center mt-3">Single Page</h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <div className="d-flex justify-content-center">
        {data.length === 0 && <p className="fs-3">Coming soon, wait</p>}
        {data.length !== 0 && (
          <li class="card mb-3 px-0" style={{ maxWidth: "250px" }}>
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
          </li>
        )}
      </div>
    </div>
  );
};

export default SinglePage;
