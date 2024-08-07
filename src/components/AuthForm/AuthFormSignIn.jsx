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
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [emailBorderColor, setEmailBorderColor] = useState("#F6C23E");
  const [passwordBorderColor, setPasswordBorderColor] = useState("#F6C23E");
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

  const verifyEmail = (event) => {
    const { value } = event.currentTarget;
    if (value.length === 0 || !value.includes("@")) {
      setIsEmailValid(false);
      setEmailBorderColor("red");
    } else {
      setIsEmailValid(true);
      setEmailBorderColor("green");
    }
  };

  const verifyPassword = (event) => {
    const { value } = event.currentTarget;
    if (
      value.length === 0 ||
      !/[A-Z]/.test(value) ||
      !/[a-z]/.test(value) ||
      !/\d/.test(value)
    ) {
      setIsPasswordValid(false);
      setPasswordBorderColor("red");
    } else {
      setIsPasswordValid(true);
      setPasswordBorderColor("green");
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
                onBlur={verifyEmail}
                required
                style={{
                  borderColor: emailBorderColor,
                  borderWidth: "2px",
                }}
              />
              <Icon as={MdOutlineEmail} color={emailBorderColor} mr={5} />
            </List>
            <List>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                onBlur={verifyPassword}
                required
                style={{
                  borderColor: passwordBorderColor,
                  borderWidth: "2px",
                }}
              />
              <Icon
                as={RiLockPasswordLine}
                color={passwordBorderColor}
                mr={5}
              />
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
