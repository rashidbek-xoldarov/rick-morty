import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  return (
    <div className="App">
      <h2 className="font-1 text-center my-3">The Rick and Morty</h2>
      <ul className="row list-unstyled container mx-auto justify-content-between">
        {data.map((item) => (
          <li class="card mb-3 px-0" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={item.image}
                  class="img-fluid rounded-start"
                  alt="rick"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text">{item.gender}</p>
                  <p class="card-text">
                    <small class="text-muted">{item.species}</small>
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
