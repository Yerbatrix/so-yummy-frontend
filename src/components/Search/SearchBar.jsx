import { SearchBarContainer } from "./SearchBar.styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchForm from "./SearchForm";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      navigate(`/search?query=${searchValue}`);
    }
  };

  return (
    <SearchBarContainer>
      <SearchForm />
    </SearchBarContainer>
  );
};

export default SearchBar;
