import { Helmet } from "react-helmet";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Content,
  Logo,
  Register,
  SignIn,
  Title,
} from "./Welcome.styled";

import LogoIcon from "../../images/logo.png";
const AuthNav = () => {
  return (
    <>
      <Helmet>
        <title>SoYummy | Welcome</title>
      </Helmet>
      <Box>
        <Container>
          <Logo src={LogoIcon} alt="Primary logo in app" />
          <Title> Welcome to the app!</Title>
          <Content>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </Content>
          <div>
            <Register to="/register" as={RouterLink}>
              Registration
            </Register>
            <SignIn to="/signin" as={RouterLink}>
              Sign In
            </SignIn>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default AuthNav;
