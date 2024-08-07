import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { SearchPageTitle, SearchPageContainer } from "./SearchPage.styled";
import SearchForm from "../../components/Search/SearchForm";
import SearchTypeSelector from "../../components/Search/SearchTypeSelector";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [searchType, setSearchType] = useState("title"); // Domyślny typ to "title"
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    if (searchValue && searchType) {
      fetchResults(searchValue, searchType);
    } else {
      // Jeśli brak wartości w query, wyświetl "No results found"
      setResults([]);
    }
  }, [searchValue, searchType]);

  const handleTypeChange = (type) => {
    setSearchType(type);
    const params = new URLSearchParams(location.search);
    params.set("category", type);
    params.set("query", searchValue);
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const fetchResults = async (query, type) => {
    if (!query) {
      setResults([]); // Ustaw puste wyniki, jeśli brak query
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
      const resultsData = type === "title" ? data : data.data.recipes; // Zaktualizowana struktura
      setResults(resultsData);
    } catch (error) {
      setError(error.message);
      setResults([]); // Ustaw puste wyniki w przypadku błędu
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleSearch = (value) => {
    setSearchValue(value);
    const params = new URLSearchParams(location.search);
    params.set("query", value);
    params.set("category", searchType);
    navigate(`${location.pathname}?${params.toString()}`);
  };

  return (
    <SearchPageContainer>
      <SearchPageTitle>Search</SearchPageTitle>
      <SearchForm onSearch={handleSearch} />
      <SearchTypeSelector onTypeChange={handleTypeChange} />
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {results.length > 0 ? (
            results.map((item, index) => (
              <div key={index} style={{ width: 'calc(25% - 16px)' }}>
                <img
                  src={item.thumb || '/images/placeholder.png'} // Zakładając, że 'thumb' jest URL do obrazu
                  alt={item.title || 'Recipe'}
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
                <p>{item.title || 'No Title'}</p>
              </div>
            ))
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
              padding: '20px',
              boxSizing: 'border-box'
            }}>
              <img
                src="/images/vegetables.png" // Ścieżka do lokalnego obrazka
                alt="No results"
                style={{ width: '50%', height: 'auto', borderRadius: '8px' }}
              />
              <p>Try looking for something else...</p>
            </div>
          )}
        </div>
      </div>
    </SearchPageContainer>
  );
};

export default SearchPage;
