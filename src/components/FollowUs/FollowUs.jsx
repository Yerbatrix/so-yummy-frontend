import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from "react-icons/si";
import {
  FollowUsItem,
  FollowUsList,
  FollowUsTitle,
  LinksWrapper,
} from "./FollowUs.styled";

const FollowUs = () => {
  return (
    <LinksWrapper>
      <FollowUsTitle>Follow us</FollowUsTitle>
      <FollowUsList>
        <FollowUsItem>
          <a
            href="https://uk-ua.facebook.com/"
            target="blank"
            nofollow="true"
            noreferrer="true"
            noopener="true"
          >
            <SiFacebook size="26" />
          </a>
        </FollowUsItem>
        <FollowUsItem>
          <a
            href="https://www.youtube.com/"
            target="blank"
            nofollow="true"
            noreferrer="true"
            noopener="true"
          >
            <SiYoutube size="28" />
          </a>
        </FollowUsItem>
        <FollowUsItem>
          <a
            href="https://twitter.com/"
            target="blank"
            nofollow="true"
            noreferrer="true"
            noopener="true"
          >
            <SiTwitter size="25" />
          </a>
        </FollowUsItem>
        <FollowUsItem>
          <a
            href="https://www.instagram.com/"
            target="blank"
            nofollow="true"
            noreferrer="true"
            noopener="true"
          >
            <SiInstagram size="24" />
          </a>
        </FollowUsItem>
      </FollowUsList>
    </LinksWrapper>
  );
};

export default FollowUs;
