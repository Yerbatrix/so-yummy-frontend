import styled from "styled-components";

export const PrepFormSubtitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #23262a;
`;

export const PrepRecipeText = styled.textarea`
  width: 343px;
  min-height: 154px;
  padding: 10px 16px;
  margin: 24px 0 18px;
  background-color: rgba(217, 217, 217, 0.25);
  outline: none;
  border: none;
  border-radius: 6px;
  resize: none;

  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);
  opacity: 0.5;

  ::placeholder {
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.8);
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    width: 505px;
    min-height: 224px;
    padding: 16px 22px;
    margin: 32px 0;

    ::placeholder {
      font-size: 18px;
    }
  }
`;

export const PrepError = styled.p`
  margin-bottom: 18px;
  color: brown;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 32px;
  }
`;
