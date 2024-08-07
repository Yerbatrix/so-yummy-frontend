import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 400px;
  }

  @media (min-width: 1024px) {
    max-width: 400px;
  }
`;

export const SearchInput = styled.input`
  width: 295px;
  height: 52px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 55px;
  border: 1px solid #fafafa;
  border-right: none;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 45px;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 24px;
  box-sizing: border-box;
  color: #000;
  background-color: #fff;
  transition: border 0.2s, color 0.2s;

  @media (min-width: 768px) {
    width: 369px;
    height: 59px;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 45px;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 24px;
  }

  @media (min-width: 1024px) {
    width: 510px;
    height: 70px;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 45px;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 24px;
  }
`;

export const SearchButton = styled.button`
  width: 113px;
  height: 52px;
  border: 1px solid #ccc;
  background-color: #22252a;
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
    background-color: #8baa36;
  }

  @media (min-width: 768px) {
    width: 161px;
    height: 59px;
    right: 0px;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 45px;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 24px;
  }

  @media (min-width: 1024px) {
    width: 161px;
    height: 70px;
    right: -110px;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 45px;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 24px;
  }
`;
