import { useState } from "react";

import axios from "axios";
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
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
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [emailBorderColor, setEmailBorderColor] = useState("#F6C23E");
  const [nameBorderColor, setNameBorderColor] = useState("#F6C23E");
  const [passwordBorderColor, setPasswordBorderColor] = useState("#F6C23E");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Walidacja formularza
    if (!formState.name || !formState.email || !formState.password) {
      setErrors({ message: "Please fill in all fields" });
      return;
    }

    try {
      await axios.post(
        "https://t4-soyummy-api-2752d40c2586.herokuapp.com/api/auth/register",
        formState
      );
      // Przekierowanie na stronę logowania po udanej rejestracji
      navigate("/signin");
    } catch (error) {
      setErrors({ message: error.response.data.msg });
    }
  };
  const verifyName = (event) => {
    const { value } = event.currentTarget;
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (value.length < 3 || !nameRegex.test(value)) {
      setIsNameValid(false);
      setNameBorderColor("red");
    } else {
      setIsNameValid(true);
      setNameBorderColor("green");
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
          <Title>Registration</Title>
          <ContainerForm>
            <List>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formState.name}
                onChange={handleChange}
                onBlur={verifyName}
                required
                style={{
                  borderColor: nameBorderColor,
                  borderWidth: "2px",
                }}
              />
              <Icon as={FaUser} color={nameBorderColor} mr={5} />
            </List>
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
        <Button type="submit">Sign up</Button>
      </Form>
      <SignLink to="/signin"> Sign in </SignLink>
    </Container>
  );
};

export default AuthFormRegister;
