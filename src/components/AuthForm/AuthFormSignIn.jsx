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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.email || !formState.password) {
      setErrors({ message: "Please fill in all fields" });
      return;
    }

    try {
      const response = await fetch(
        "https://t4-soyummy-api-2752d40c2586.herokuapp.com/api/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setErrors({ message: errorData.msg });
        return;
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      dispatch(login({ user: data.user, token: data.token }));
      navigate("/main");
    } catch (err) {
      setErrors({ message: "An error occurred during sign in" });
    }
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

        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

        <Button type="submit">Sign in</Button>
      </Form>
      <SignLink to="/register"> Registration </SignLink>
    </Container>
  );
};

export default AuthFormSignIn;
