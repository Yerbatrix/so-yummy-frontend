import styled from "styled-components";

import CheckIcon from "/images/checkbox.svg";

export const RecipeItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 29px 14px 14px;
  border-radius: 8px;
  background-color: #ebf3d4;
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    padding: 21px 58px 21px 28px;
  }
  @media screen and (min-width: 1280px) {
    padding: 5px 70px 5px 36px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 40px;
  }
  & img {
    border-radius: 8px;
    width: 57px;
    height: 57px;
    @media screen and (min-width: 768px) {
      width: 136px;
      height: 136px;
    }
    @media screen and (min-width: 1280px) {
      width: 172px;
      height: 172px;
    }
  }
`;
export const TextContainer = styled.div`
  display: flex;
  max-width: 114px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  @media screen and (min-width: 768px) {
    max-width: 208px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 547px;
  }
`;

export const NameIngredient = styled.p`
  font-size: 12px;
  line-height: 1.17;
  color: #3e4462;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const WeightIngredient = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: auto;
  padding: 4px;

  min-width: 37px;
  max-width: 70px;
  font-size: 10px;
  line-height: 1.5;
  color: #fafafa;
  background-color: #8baa36;
  border-radius: 4px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    min-width: 68px;
    max-width: 150px;
    font-size: 18px;
    line-height: 1.5;
    margin-right: 100px;
  }
`;

export const Checkbox = styled.input`
  margin-left: 39px;
  position: relative;
  display: inline-block;
  height: 18px;
  width: 18px;

  background: transparent;
  appearance: none;
  border: 1px solid rgba(126, 126, 126, 0.5);
  border-radius: 6px;
  outline: none;
  cursor: pointer;

  &:checked {
    background-image: url(${CheckIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
  }

  @media (min-width: 768px) {
    height: 35px;
    width: 35px;
    border: 2px solid rgba(126, 126, 126, 0.5);
  }
`;

export const DescriptionIngredient = styled.p`
  font-weight: 500;
  font-size: 8px;
  line-height: 1.38;
  letter-spacing: -0.24px;
  color: #7e7e7e;
  @media screen and (min-width: 768px) {
    overflow-y: clip;

    line-height: 1;
    font-size: 14px;
    line-height: 1.67;
  }
`;
