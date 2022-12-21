import React from "react";
import Button from "../Button/Button";

const Filter = ({ setStatus, setSpecies, setGender }) => {
  const statusData = ["alive", "dead", "unknown"];
  const genderData = ["female", "male", "genderless", "unknown"];
  const speciesData = [
    "human",
    "humanoid",
    "unknown",
    "disease",
    "animal",
    "planet",
    "alien",
    "robot",
    "cronenberg",
    "mythological",
  ];

  return (
    <div className="d-flex flex-column">
      <h3 className="text-center fs-3">Filter</h3>
      <button
        className="bg-transparent border-0 text-primary text-decoration-underline mx-auto mb-2"
        onClick={() => {
          setGender("");
          setStatus("");
          setSpecies("");
        }}
      >
        Clear All
      </button>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Filter by status
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {statusData.map((item) => (
                <Button
                  onClick={() => {
                    setStatus(item);
                  }}
                  key={item}
                  name="status"
                  text={item}
                />
              ))}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Filter by species
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {speciesData.map((item) => (
                <Button
                  onClick={() => {
                    setSpecies(item);
                  }}
                  key={item}
                  text={item}
                  name="species"
                />
              ))}
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Filter by gender
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {genderData.map((item) => (
                <Button
                  onClick={() => {
                    setGender(item);
                  }}
                  key={item}
                  text={item}
                  name="gender"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
