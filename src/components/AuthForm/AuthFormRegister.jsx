import { useState } from "react";
import { FaUser } from "react-icons/fa";
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
const AuthFormRegister = () => {
  const [formState, setFormState] = useState({
    name: "",
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
    if (!formState.name || !formState.email || !formState.password) {
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
          <Title>Registration</Title>
          <ContainerForm>
            <List>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formState.name}
                onChange={handleChange}
                required
              />
              <Icon as={FaUser} color="fff" mr={5} />
            </List>
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

        <Button type="submit">Sign up</Button>
      </Form>
      <SignLink to="/signin"> Sign in </SignLink>
    </Container>
  );
};

export default AuthFormRegister;
