import React, { useEffect, useState } from "react";
import CardList from "../../components/Card/CardList";
import Filter from "../../components/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";

const Home = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${activePage}&name=${title}&status=${status}&species=${species}&gender=${gender}`,
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [activePage, title, status, species, gender]);

  return (
    <div className="container mx-auto">
      <h2 className="fs-1 text-center my-3">The Rick and Morty</h2>
      <div className="col-6 mx-auto mb-3">
        <Search setTitle={setTitle} />
      </div>
      <div className="row">
        <div className="col-3">
          <Filter
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
          />
        </div>
        <div className="col-9">
          {Object.keys(data).includes("results") ? (
            <CardList data={data.results} />
          ) : (
            <p>Sorry... </p>
          )}
          <Pagination page={data?.info?.pages} setActivePage={setActivePage} />
        </div>
      </div>
    </div>
  );
};

export default Home;
