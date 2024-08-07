import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SearchPageTitle, SearchPageContainer } from "./SearchPage.styled";
import SearchBar from "../../components/Search/SearchBar";
import SearchTypeSelector from "../../components/Search/SearchTypeSelector";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    const type = params.get("category");
    if (query) {
      setSearchValue(query);
    }
    if (type) {
      setSearchType(type);
    }
  }, [location.search]);

  const handleTypeChange = (type) => {
    setSearchType(type);
    const params = new URLSearchParams(location.search);
    params.set("category", type);
    params.set("query", searchValue);
    navigate(`${location.pathname}?${params.toString()}`);
  };

  return (
    <SearchPageContainer>
      <SearchPageTitle>Search</SearchPageTitle>
      <SearchBar initialSearchValue={searchValue} />
      <SearchTypeSelector onTypeChange={handleTypeChange} />
    </SearchPageContainer>
  );
};

export default SearchPage;
