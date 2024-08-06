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