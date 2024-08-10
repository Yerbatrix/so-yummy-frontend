import styled from "styled-components";

export const RecipePageBtnStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: "Poppins";
  font-weight: 500;
  line-height: 1;
  font-size: 10px;
  color: #23262a;
  padding: 10px 18px;
  background-color: transparent;

  outline: none;
  border: none;
  border-top-left-radius: 30px;
  border-top-right-radius: 80px;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 30px;
  text-align: center;

  border: 2px solid #8baa36;

  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #fafafa;
    background-color: #8baa36;
  }
  @media screen and (min-width: 768px) {
    margin-top: 15px;
    font-size: 16px;
    padding: 18px 44px;
  }
`;
