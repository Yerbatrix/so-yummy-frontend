import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  SearchButton,
  SearchInput,
  FormContainer
} from "./SearchForm.styled";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/search', { state: { searchTerm } });
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
