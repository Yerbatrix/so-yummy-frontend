import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../const/breakpoints";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 222px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and ${devices.tablet} {
    top: 347px;
  }

  @media only screen and ${devices.desktop} {
    position: static;
    display: inline;
    flex-direction: column;
    max-width: 500px;
  }
`;
export const Form = styled.form`
  padding: 32px 28px 40px;
  margin-bottom: 12px;
  border-radius: 30px;
  background: #2a2c36;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  // text-align: start;
  @media only screen and ${devices.tablet} {
    padding: 44px 50px;
    // margin-top: 280px;
    max-width: 500px;
  }
  @media only screen and ${devices.desktop} {
    padding: 44px 50px;
    margin-top: 0;
  }
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  color: #fafafa;
  margin-bottom: 18px;
  text-align: left;

  @media only screen and ${devices.tablet} {
    margin: 0 0 32px 0;
    font-size: 28px;
    line-height: 1.07;
    letter-spacing: -0.56px;
  }
  @media only screen and ${devices.tablet} {
    margin: 0 0 32px 0;
    font-size: 28px;
    line-height: 1.07;
    letter-spacing: -0.56px;
  }
`;
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  // margin-bottom: 28px;
`;

export const List = styled.li`
  position: relative;
  list-style: none;
  &:focus-within {
    svg {
      opacity: 1;
    }
  }

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  &:last-child {
    margin-bottom: 34px;
  }

  @media only screen and ${devices.tablet} {
    &:not(:last-child) {
      margin-bottom: 24px;
    }

    &:last-child {
      margin-bottom: 50px;
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 14px 12px 40px;
  background-color: transparent;
  border: 1px solid
    ${(props) => {
      if (props.$isvalid === "true") return "#3CBC81";
      if (props.$isvalid === "false") return "#E74A3B";
      return "#FAFAFA";
    }};
  border-radius: 6px;
  color: ${(props) => {
    if (props.$isvalid === "true") return "#3CBC81";
    if (props.$isvalid === "false") return "#E74A3B";
    return "#FAFAFA";
  }};
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  outline: none;
  opacity: ${(props) => {
    if (props.$isvalid === "true") return "1";
    if (props.$isvalid === "false") return "1";
    return "0.8";
  }};
  transition: 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: border, opacity;

  &::placeholder {
    color: ${(props) => {
      if (props.$isvalid === "true") return "#3CBC81";
      if (props.$isvalid === "false") return "#E74A3B";
      return "#FAFAFA";
    }};
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
    opacity: 0.8;
    transition: 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
    transition-property: opacity;
  }

  &:is(:focus) {
    border: 1px solid
      ${(props) => {
        if (props.$isvalid === "true") return "#3CBC81";
        if (props.$isvalid === "false") return "#E74A3B";
        return "#FFFFFF";
      }};
    opacity: 1;
  }

  &:is(:focus)::placeholder {
    opacity: 1;
  }

  @media only screen and ${devices.tablet} {
    padding: 16px 18px 16px 50px;
    font-size: 18px;
    letter-spacing: -0.36px;

    &::placeholder {
      font-size: 18px;
    }
  }
`;

export const Button = styled.button`
  border-radius: 6px;
  padding: 14px 110px;
  width: 100%;
  height: 45px;
  background: #8baa36;
  color: #fafafa;
  border-radius: 6px;
  background-color: #8baa36;
  border: none;
  color: #fafafa;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.12;
  width: 100%;
  padding: 14px 0;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition-property: color;

  &:is(:hover, :focus-visible) {
    color: #22252a;
  }

  @media only screen and ${devices.tablet} {
    padding: 21px 0;
  }
`;
export const SignLink = styled(Link)`
  color: #fafafa;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;

  @media only screen and $(devices.tablet) {
    font-size: 16px;
  }
`;

export const Notice = styled.p`
  position: absolute;
  bottom: -15px;
  font-size: 10px;
  margin: 0;
  color: #e74a3b;
  display: ${(props) => {
    if (props.$isvalid === "true") return "none";
    if (props.$isvalid === "false") return "block";
    return "none";
  }};

  @media only screen and ${devices.tablet} {
    bottom: -16px;
    font-size: 12px;
  }
`;
