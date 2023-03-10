import React, { useEffect, useState } from "react";
import CardList from "../../components/Card/CardList";
import EpisodeFilter from "../../components/EpisodeFilter/EpisodeFilter";

const Episode = () => {
  const [data, setData] = useState([]);
  // const [listEpisode, setListEpisode] = useState([]);
  const [info, setInfo] = useState("");
  const [id, setId] = useState(1);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://rickandmortyapi.com/api/episode/" + id,
      );
      const data = await response.json();
      setInfo(data);
      const allCharacters = [];
      data.characters.forEach(async (character) => {
        const singleCharacter = await (await fetch(character)).json();
        allCharacters.push(singleCharacter);
        if (allCharacters.length === data.characters.length) {
          setData(allCharacters);
        }
      });
    })();
  }, [id]);

  return (
    <div className="container mx-auto">
      <div className="col-6 mx-auto mt-4 text-center">
        <h3 className="fs-2 mb-3">
          Episode name: <span className="text-primary">{info.name}</span>
        </h3>
        <p className="m-0 fs-5">
          Air Date: <span className="text-primary">{info["air_date"]}</span>{" "}
        </p>
      </div>
      <div className="row">
        <div className="col-3">
          <EpisodeFilter num="51" setId={setId} />
        </div>
        <div className="col-9">
          {data ? <CardList data={data} /> : <p>Waiting... </p>}
        </div>
      </div>
    </div>
  );
};

export default Episode;
