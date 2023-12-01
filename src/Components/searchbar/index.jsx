import React, { useState } from "react";
import {
  SearchBarContainer,
  SearchBar,
  SearchInput,
  SearchBarButton,
} from "./styled";

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const { onSearch } = props

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = async () => {
    onSearch(search);
  };

  const onEnterKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <SearchBarContainer>
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Search Pokemon"
          onChange={onChangeHandler}
          onKeyDown={onEnterKeyDown}
        />
      </SearchBar>
      <SearchBarButton onClick={onButtonClickHandler}>Search</SearchBarButton>
    </SearchBarContainer>
  );
};

export default Searchbar;
