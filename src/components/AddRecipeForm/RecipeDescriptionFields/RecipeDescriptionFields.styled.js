import styled from "styled-components";

export const DescrWrap = styled.div`
  margin-bottom: 67px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }
`;

export const DescrFileInputWrap = styled.div`
  position: relative;
  width: 279px;
  height: 268px;
  margin: 0 auto 32px;

  @media screen and (min-width: 768px) {
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 357px;
    margin-right: 50px;
  }
`;

export const DescrFileInput = styled.input`
  width: 279px;
  height: 260px;
  margin-top: 8px;

  @media screen and (min-width: 1440px) {
    width: 357px;
    height: 335px;
    margin-top: 9px;
  }
`;

export const DescrRecipeImage = styled.img`
  width: 279px;
  height: 268px;
  object-fit: cover;
  border-radius: 8px;
  position: absolute;
  top: 0;

  @media screen and (min-width: 1440px) {
    width: 357px;
    height: 344px;
  }
`;

export const DescrImage = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
`;

export const DescrInputWrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 393px;
  }
`;

export const DescrInput = styled.input`
  width: 343px;
  height: 40px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 18px;
  outline: none;

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

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 393px;
    height: 43px;
    font-size: 16px;
  }
`;

export const DescrSelectWrap = styled.div`
  width: 343px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 18px;
  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 393px;
    height: 43px;
    margin-bottom: 32px;
  }
`;

export const DescrLabel = styled.div`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.8);
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DescrSelect = styled.div`
  width: 120px;
  height: 43px;
  padding-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: #8baa36;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    font-size: 14px;
  }
`;

export const DescrSelectText = styled.span`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.02em;
  color: #23262a;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DescrCategoryList = styled.ul`
  width: 123px;
  height: 144px;
  background-color: #ffffff;
  position: absolute;
  right: 0;
  top: 70%;
  padding: 8px 14px;
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  border-radius: 6px;
  overflow-y: scroll;
  z-index: 3;

  @media screen and (min-width: 768px) {
    width: 132px;
    height: 162px;
  }
`;

export const DescrCategoryItem = styled.li`
  font-size: 12px;
  line-height: 1.43;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;
  cursor: pointer;
  list-style-type: none;
  width: 90px;

  :not(:last-child) {
    margin-bottom: 4px;
  }

  :hover {
    color: #8baa36;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const DescrTimeList = styled.ul`
  width: 98px;
  height: 144px;
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 70%;
  padding: 8px 14px;
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  border-radius: 6px;
  overflow-y: scroll;
  cursor: pointer;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 162px;
  }
`;

export const DescrTimeItem = styled.li`
  font-size: 12px;
  line-height: 1.43;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;

  :not(:last-child) {
    margin-bottom: 4px;
  }

  :hover {
    color: #8baa36;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const DescrOneInputWrap = styled.div`
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const DescrError = styled.p`
  margin-top: 8px;
  color: brown;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
