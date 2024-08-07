import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchButton, SearchInput, FormContainer } from "./SearchForm.styled";

const SearchForm = ({ searchType = "title", onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    params.set("query", searchTerm);
    params.set("category", searchType);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <FormContainer noValidate onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder="Search..."
        id="search-input"
        name="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButton type="submit">Search</SearchButton>
    </FormContainer>
  );
};

export default SearchForm;
