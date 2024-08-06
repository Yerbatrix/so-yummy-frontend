import React from 'react';
import { 
  SelectorContainer,
  SelectorLabel,
  Selector
} from "./SearchTypeSelector.styled";

const SearchTypeSelector = ({ onTypeChange }) => {
  return (
    <SelectorContainer>
      <SelectorLabel htmlFor="search-type">Search by:</SelectorLabel>
      <Selector id="search-type" onChange={(e) => onTypeChange(e.target.value)}>
        <option value="title">Title</option>
        <option value="ingredients">Ingredients</option>
      </Selector>
    </SelectorContainer>
  );
};

export default SearchTypeSelector;
