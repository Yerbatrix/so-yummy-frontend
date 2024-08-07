import styled from "styled-components";

export const SearchPageTitle = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: #000;
  margin-bottom: 72px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
    font-size: 32px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 44px;
  }
`;

export const SearchPageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 768px) {
    padding: 0 32px;
    width: 768px;
  }
  @media (min-width: 1440px) {
    padding: 0 100px;
    width: 1440px;
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ResultItem = styled.div`
  width: calc(25% - 16px); // Domyślnie 4 w rzędzie
  box-sizing: border-box;
  position: relative;
  
  @media (max-width: 1024px) {
    width: calc(50% - 16px); // 2 w rzędzie dla tabletów
  }
  
  @media (max-width: 768px) {
    width: 100%; // 1 w kolumnie dla mobile
  }
  
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .title-container {
    position: absolute;
    bottom: 6%;
    left: 5%;
    right: 5%;
    height: 60px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    padding: 0 15px;
    box-sizing: border-box;
    text-align: left; // Dodanie wyrównania tekstu do lewej
    
    p {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      color: #000;
    }
  }
`;

export const NoResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  img {
    width: 30%;
    height: auto;
    border-radius: 8px;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
    color: #666;
  }
`;
