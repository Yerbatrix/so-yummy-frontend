import {
  Box,
  Container,
  Content,
  Header,
  ImageLogo,
  Link,
  Nav,
  Title,
  Welcome,
} from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <Box>
      <Container>
        <ImageLogo src="/images/logo.jpg" alt="Primary image in app" />
        <Welcome>
          <Header>
            <Title> Welcome to the app!</Title>
            <Content>
              This app offers more than just a collection of recipes - it is
              designed to be your very own digital cookbook. You can easily save
              and retrieve your own recipes at any time.
            </Content>
          </Header>
          <Nav>
            <Link to="/register">Registration</Link>
            <Link to="/signin">Sign In</Link>
          </Nav>
        </Welcome>
      </Container>
    </Box>
  );
};

export default AuthNav;
