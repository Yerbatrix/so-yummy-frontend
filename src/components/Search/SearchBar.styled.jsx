import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// Stylowanie przycisku
export const SearchButton = styled.button`
  width: 113px;
  height: 52px;
  border: 1px solid #ccc;
  background-color: #22252a; /* Tło */
  color: white;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.2s;
  position: absolute;
  right: 0; 
  top: 0;

  border-top-left-radius: 24px;
  border-bottom-left-radius: 45px;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 24px;

  &:hover {
    background-color: #8baa36; /* Tło na hover */
  }
`;
