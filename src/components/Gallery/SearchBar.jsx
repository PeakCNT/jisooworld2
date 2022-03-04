import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import "../../index.css";
import "bulma/css/bulma.css";

const SearchBar = ({ passQuery }) => {
  const [query, setQuery] = useState("");

  const changeQuery = (value) => {
    passQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <SB>
        <h1 className="is-size-3 search-header">JisooGallery</h1>
        <form action="" className="search-form">
          <input
            type="text"
            className="form-input"
            placeholder="search here"
            onChange={(e) => changeQuery(e.target.value)}
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </SB>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  width: 100vw;
  height: 10vh;
  background: linear-gradient(to right, #f650a0, #ff9897);
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const SB = styled.div`
  width: 40vw;
  height: 6vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 50px;
  @media (max-width: 768px) {
    width: 80vw;
    height: 4vh;
  }
`;
