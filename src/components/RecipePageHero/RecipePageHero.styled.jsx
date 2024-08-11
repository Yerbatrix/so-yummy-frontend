import styled from "styled-components";

import rpMob from "../../images/RecipePage/recipe_page_mob1.png";
import rpMob2 from "../../images/RecipePage/recipe_page_mob2.png";
import rpTab from "../../images/RecipePage/recipe_page_tab1.png";
import rpTab2 from "../../images/RecipePage/recipe_page_tab2.png";
import rpDesk from "../../images/RecipePage/recipe_page_desk1.png";
import rpDesk2 from "../../images/RecipePage/recipe_page_desk2.png";

import ClockIcon from "../../images/RecipePage/clock.svg"; // Standardowy import SVG

export const RecipeHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${rpMob});
  background-repeat: no-repeat;
  width: 100%;
  height: 455px;
  margin-bottom: 32px;
  padding-top: 120px;
  padding-bottom: 90px;
  background-size: 100%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${rpMob2});
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    padding-top: 120px;
    padding-bottom: 32px;
    height: 495px;
    background-image: url(${rpTab});
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${rpTab2});
    }
  }
  @media screen and (min-width: 1280px) {
    height: 100%;
    background-image: url(${rpDesk});
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      (-webkit-min-device-pixel-ratio: 2),
      screen and (min-resolution: 2dppx) {
      background-image: url(${rpDesk2});
    }
  }
`;

export const RecipeHeroTitle = styled.h1`
  display: block;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  margin-top: 18px;
  color: #8baa36;
  max-width: 330px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow-y: clip;
  @media screen and (min-width: 768px) {
    max-width: 680px;
    font-size: 44px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1000px;
  }
`;

export const RecipeHeroText = styled.p`
  font-family: "Poppins";
  font-weight: 500;
  text-align: center;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  width: 303px;
  margin-bottom: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow-y: clip;
  hyphens: auto;
  @media screen and (min-width: 768px) {
    width: 506px;
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) {
    -webkit-line-clamp: 3;
    margin-bottom: 15px;
    width: 656px;
  }
`;

export const CookingTime = styled.div`
  font-family: "Poppins";
  display: flex;
  width: fit-content;
  align-items: center;
  color: black;
  margin-top: 50px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: -0.24px;
  height: 14px;
  @media screen and (min-width: 768px) {
    height: 20px;
    margin-top: 60px;
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 48px;
  }
`;

export const ClockIconStyled = styled.img.attrs({ src: ClockIcon })`
  margin-right: 5px;
  display: inline-block;
  width: 14px;
  height: 14px;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
