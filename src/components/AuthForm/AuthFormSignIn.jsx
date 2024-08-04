import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice";
import {
  Button,
  Container,
  ContainerForm,
  Form,
  Icon,
  Input,
  List,
  SignLink,
  Title,
} from "./AuthForm.styled";
const AuthFormSignIn = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Walidacja formularza
    if (!formState.email || !formState.password) {
      setErrors({ message: "Please fill in all fields" });
      return;
    }
    // Symulowanie logowania
    dispatch(login({ email: formState.email }));
    navigate("/main");
  };

  return (
    <Container>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <Title>Sign In</Title>
          <ContainerForm>
            <List>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formState.email}
                onChange={handleChange}
                required
              />
              <Icon as={MdOutlineEmail} color="fff" mr={5} />
            </List>
            <List>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                required
              />
              <Icon as={RiLockPasswordLine} color="fff" mr={5} />
            </List>
          </ContainerForm>
        </div>

        <Button type="submit">Sign in</Button>
      </Form>
      <SignLink to="/register"> Registration </SignLink>
    </Container>
  );
};

export default AuthFormSignIn;
