import React from "react";

const Search = ({ setTitle }) => {
  return (
    <input
      className="form-control"
      onChange={(evt) => {
        const time = setTimeout(() => {
          setTitle(evt.target.value);
        }, 2000);
        return () => {
          clearTimeout(time);
        };
      }}
      type="text"
      placeholder="Search..."
    />
  );
};

export default Search;
