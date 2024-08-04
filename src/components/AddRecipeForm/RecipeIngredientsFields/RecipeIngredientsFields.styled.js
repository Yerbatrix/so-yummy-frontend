import styled from "styled-components";

export const IngrWrap = styled.div`
  margin-bottom: 44px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const IngrFormSubtitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #23262a;
`;

export const IngrCountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;

export const IngrCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 92px;
  height: 28px;
  border: 1px solid rgba(51, 51, 51, 0.3);
  border-radius: 18px;

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 32px;
  }
`;

export const IngrMinusButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    height: 14px;
    width: 14px;
    color: rgba(51, 51, 51, 0.3);

    @media screen and (min-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }
`;

export const IngrPlusButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 14px;
    height: 14px;
    color: #8baa36;

    @media screen and (min-width: 768px) {
      width: 18px;
      height: 18px;
    }
  }
`;

export const IngrNumber = styled.p`
  font-size: 14px;
  line-height: 1.29;
  color: #001833;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.43;
  }
`;

export const IngrItem = styled.li`
  width: 343px;
  display: flex;
  align-items: center;
  margin: auto;

  :not(:last-child) {
    margin-bottom: 18px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
    :not(:last-child) {
      margin-bottom: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;

export const IngrInputWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const IngrInput = styled.input`
  width: 194px;
  height: 53px;
  margin-right: 14px;
  padding: 16px;
  background-color: rgba(217, 217, 217, 0.25);
  border-radius: 6px;
  border: none;
  outline: none;

  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    width: 398px;
    height: 59px;
    margin-right: 32px;
    font-size: 18px;
  }
`;

export const IngrList = styled.ul`
  width: 194px;
  height: 154px;
  position: absolute;
  z-index: 3;
  background: #ffffff;
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  border-radius: 6px;
  overflow-y: scroll;
  padding: 8px 18px;

  @media screen and (min-width: 768px) {
    width: 398px;
    height: 172px;
  }
`;

export const IngrNumberLabel = styled.div`
  position: relative;
  width: 84px;
  height: 53px;
  margin-right: 22px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 97px;
    height: 160px;
    margin-right: 157px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 60px;
  }
`;

export const IngrNumberInput = styled.input`
  width: 84px;
  height: 53px;
  padding: 16px 0 16px 10px;
  /* background-color: #f5f5f5; */
  background-color: #f5f5f5;
  outline: none;
  border: none;
  border-radius: 6px;

  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.02em;
  color: #23262a;

  @media screen and (min-width: 768px) {
    width: 97px;
    height: 59px;
    font-size: 18px;
  }
`;

export const IngrUnitSelect = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 16px 8px 16px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 50px;
  height: 53px;
  background-color: #f5f5f5;
  outline: none;
  border: none;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 55px;
    height: 59px;
    background-position: 28px 22px;
  }

  svg {
    color: #8BAA36;

    @media screen and (min-width: 768px) {
      width: 20px
      height: 20px;
    }
  }
`;

export const IngrSelectText = styled.span`
  font-size: 14px;
  letter-spacing: -0.02em;
  color: #23262a;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const IngrUnitList = styled.ul`
  width: 84px;
  height: 170px;
  padding: 12px 28px;
  background-color: #ffffff;
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  border-radius: 6px;
  z-index: 7;
  position: absolute;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    width: 97px;
    height: 170px;
  }
`;

export const IngrUnitItem = styled.li`
  font-size: 12px;
  line-height: 1.43;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;
  margin: auto;

  :not(:last-child) {
    margin-bottom: 4px;
  }

  :hover,
  :focus {
    color: rgba(139, 170, 54, 1);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const IngrDeleteButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: #23262a;
  }
`;

export const IngrError = styled.p`
  margin-top: 4px;
  color: brown;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-top: 8px;
  }
`;

export const IngrNumberError = styled.p`
  margin-top: 4px;
  color: brown;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-top: 8px;
  }
`;
