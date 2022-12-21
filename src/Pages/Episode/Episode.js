import React, { useEffect, useState } from "react";
import EpisodeFilter from "../../components/EpisodeFilter/EpisodeFilter";

const Episode = () => {
  const [data, setData] = useState([]);
  const [listEpisode, setListEpisode] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://rickandmortyapi.com/api/episode/" + id,
      );
      const data = await response.json();
      // setData(data);

      const a = await data.characters[6];
      const b = await fetch(a)
        .then((res) => res.json())
        .then((data) => data);
      console.log(b);

      // const listEpisode = await data.characters.map((item) =>
      //   fetch(item)
      //     .then((res) => res.json)
      //     .then((data) => console.log(data)),
      // );
    })();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="col-6 mx-auto mt-4 text-center">
        <h3 className="fs-2 mb-3">Episode name {data.name}</h3>
        <p className="m-0 fs-5">Air Date {data["air_date"]}</p>
      </div>
      <div className="row">
        <div className="col-3">
          <EpisodeFilter num="51" />
        </div>
        <div className="col-9"></div>
      </div>
    </div>
  );
};

export default Episode;
