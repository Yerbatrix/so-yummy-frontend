import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  SearchButton,
  SearchInput,
  FormContainer
} from "./SearchForm.styled";

const SearchForm = ({ searchType }) => { // Przyjmuj searchType jako props
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    params.set("query", searchTerm);
    params.set("category", searchType);
    navigate(`/search?${params.toString()}`); // Przekazuj query i category w URL
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
      <SearchButton type="submit">
        Search
      </SearchButton>
    </FormContainer>
  );
};

export default SearchForm;
