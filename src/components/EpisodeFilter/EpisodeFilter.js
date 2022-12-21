import React from "react";

const EpisodeFilter = ({ num }) => {
  return (
    <div className="text-center">
      <h4 className="fs-3 text-black">Choose episode</h4>
      <select className="form-select">
        <option value="0" hidden>
          Select...
        </option>
        {num &&
          Array(Number(num))
            .fill(1)
            .map((item, index) => (
              <option key={index} value={index + 1}>
                Episode-{index + 1}
              </option>
            ))}
      </select>
    </div>
  );
};

export default EpisodeFilter;
