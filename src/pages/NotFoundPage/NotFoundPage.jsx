import {
  NotFoundContainer,
  ImgContainer,
  TextBox,
} from "./NotFoundPage.styled";
import notFoundMob1 from "../../images/notFound/not_Found_mob_1x.png";
import notFoundMob2 from "../../images/notFound/not_Found_mob_2x.png";
import notFoundTab1 from "../../images/notFound/not_Found_tab_1x.png";
import notFoundTab2 from "../../images/notFound/not_Found_tab_2x.png";
import notFoundDesk1 from "../../images/notFound/not_Found_desk_1x.png";
import notFoundDesk2 from "../../images/notFound/not_Found_desk_2x.png";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <NotFoundContainer>
      <ImgContainer>
        <picture>
          <source
            media="(min-width: 1440px"
            srcSet={`${notFoundDesk1}, ${notFoundDesk2} 2x`}
          />
          <source
            media="(mind-width: 768px"
            srcSet={` ${notFoundTab1}, ${notFoundTab2} 2x`}
          />
          <img
            src={notFoundMob1}
            srcSet={`${notFoundMob1}, ${notFoundMob2} 2x`}
            alt="Error"
          />
        </picture>
      </ImgContainer>
      <TextBox>
        <h3>
          We are sorry,
          <p>but the page you were looking for can't be found..</p>
        </h3>
      </TextBox>
    </NotFoundContainer>
  );
};

export default NotFound;
