import styled from "styled-components";

export const PreparationWrapper = styled.div`
  margin-bottom: 100px;
  @media screen and (min-width: 768px) {
    margin-bottom: 200px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    margin-right: 0;
  }
`;

export const PrepWrapper = styled.div`
  margin-bottom: 40px;
  flex-basis: 60%;
  @media screen and (min-width: 768px) {
    margin-bottom: 53px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
  @media screen and (max-width: 490px) {
    margin-bottom: 20px;
    font-size: 16px;
  }
`;

export const PrepTitle = styled.h2`
  display: block;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #3e4462;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    letter-spacing: -0.24px;
  }
  @media screen and (max-width: 490px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const PrepList = styled.ul`
  list-style: none;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  gap: 14px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
  @media screen and (max-width: 490px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;

export const PrepText = styled.li`
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  &::before {
    content: attr(data-step) ")";
    font-weight: bold;
    margin-right: 8px;
    color: #8baa36;
  }

  & p {
    padding-top: 2px;
    color: #000000;
    width: 100%;
  }
`;

export const PrepWrapperImg = styled.div`
  flex-basis: 35%;
  margin-left: 20px;
  margin-bottom: 10px;
  max-width: 100%;

  @media screen and (max-width: 490px) {
    flex-basis: 100%;
    margin: 0 auto 20px;
  }

  & img {
    border-radius: 8px;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;
