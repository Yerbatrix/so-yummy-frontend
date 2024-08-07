import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SearchPageTitle, SearchPageContainer } from "./SearchPage.styled";
import SearchForm from "../../components/Search/SearchForm";
import SearchTypeSelector from "../../components/Search/SearchTypeSelector";
import { ResultsContainer, ResultItem, NoResults } from "./SearchPage.styled";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    const type = params.get("category");

    setSearchType(type || "title");

    if (query) {
      setSearchValue(query);
    }
  }, [location.search]);

  useEffect(() => {
    if (searchValue && searchType) {
      fetchResults(searchValue, searchType);
    } else {
      setResults([]);
    }
  }, [searchValue, searchType]);

  const handleTypeChange = (type) => {
    setSearchType(type);
    const params = new URLSearchParams();
    params.set("category", type);
    params.set("query", searchValue);
    navigate(`/search?${params.toString()}`);
  };

  const fetchResults = async (query, type) => {
    if (!query || !type) {
      setResults([]);
      return;
    }

    let url = '';
    if (type === "title") {
      url = `https://t4-soyummy-api-2752d40c2586.herokuapp.com/api/recipes/search?keyword=${encodeURIComponent(query)}`;
    } else if (type === "ingredients") {
      url = `https://t4-soyummy-api-2752d40c2586.herokuapp.com/api/ingredients?ttl=${encodeURIComponent(query)}`;
    }

    console.log("Fetching URL:", url);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}. Response: ${errorText}`);
      }

      const data = await response.json();
      const resultsData = type === "title" ? data : data.data.recipes;
      setResults(resultsData);
    } catch (error) {
      setError(error.message);
      setResults([]);
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleSearch = (value) => {
    setSearchValue(value);
    const params = new URLSearchParams();
    params.set("query", value);
    params.set("category", searchType);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <SearchPageContainer>
      <SearchPageTitle>Search</SearchPageTitle>
      <SearchForm searchType={searchType} onSearch={handleSearch} />
      <SearchTypeSelector onTypeChange={handleTypeChange} />
      <ResultsContainer>
        {results.length > 0 ? (
          results.map((item, index) => (
            <ResultItem key={index}>
              <img
                src={item.thumb || '/images/placeholder.png'}
                alt={item.title || 'Recipe'}
              />
              <div className="title-container">
                <p>{item.title || 'No Title'}</p>
              </div>
            </ResultItem>
          ))
        ) : (
          <NoResults>
            <img
              src="/images/vegetables.png"
              alt="No results"
            />
            <p>Try looking for something else...</p>
          </NoResults>
        )}
      </ResultsContainer>
    </SearchPageContainer>
  );
};

export default SearchPage;
