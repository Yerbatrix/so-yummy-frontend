import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import register from "../../redux/actions/users";
import registerSchema from "../../validate/registerValidate";

import {
  Button,
  Container,
  ContainerForm,
  Form,
  Input,
  List,
  Notice,
  SignLink,
  Title,
} from "./AuthForm.styled";
const AuthForm = () => {
  const dispatch = useDispatch();
  const [isNameValid, setIsNameValid] = useState("");
  const [isEmailValid, setIsEmailValid] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState("");
  const [nameNotice, setNameNotice] = useState("");
  const [emailNotice, setEmailNotice] = useState("");
  const [passwordNotice, setPasswordNotice] = useState("");

  useEffect(() => {}, [isNameValid, isEmailValid, isPasswordValid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = event.currentTarget;
    const data = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    try {
      await registerSchema.validate(data, { abortEarly: false });
      dispatch(register(data));
      form.reset();
    } catch (validationError) {
      toast.error(validationError.errors.join(", "), {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  const verifyName = (event) => {
    const { value } = event.target;
    if (value.length < 3) {
      setIsNameValid("false");
      setNameNotice("Minimum 3 characters");
    } else if (value.length > 50) {
      setIsNameValid("false");
      setNameNotice("Maximum 50 characters");
    } else if (value.length === 0) {
      setIsNameValid("false");
      setNameNotice("Name is required");
    } else if (/[^A-Za-z0-9]/.test(value)) {
      setIsNameValid("false");
      setNameNotice("Letters and numbers only");
    } else {
      setIsNameValid("true");
    }
  };

  const verifyEmail = (event) => {
    const { value } = event.currentTarget;
    if (value.length === 0) {
      setIsEmailValid("false");
      setEmailNotice("Email is required");
    } else if (!value.includes("@")) {
      setIsEmailValid("false");
      setEmailNotice("Invalid email format");
    } else {
      setIsEmailValid("true");
    }
  };

  const verifyPassword = (event) => {
    const { value } = event.currentTarget;
    if (value.length === 0) {
      setIsPasswordValid("false");
      setPasswordNotice("Password is required");
    } else if (value.length < 6) {
      setIsPasswordValid("false");
      setPasswordNotice("Minimum 6 characters");
    } else if (value.length > 60) {
      setIsPasswordValid("false");
      setPasswordNotice("Maximum 60 characters");
    } else if (!/[A-Z]/.test(value) || !/\d/.test(value)) {
      setIsPasswordValid("false");
      setPasswordNotice("At least one uppercase letter and one digit");
    } else {
      setIsPasswordValid("true");
    }
  };
  return (
    <>
      <Helmet>
        <title>SoYummy | Register</title>
      </Helmet>

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
                  onChange={verifyName}
                  $isvalid={isNameValid}
                  required
                />

                <Notice $isvalid={isNameValid}>{nameNotice}</Notice>
              </List>

              <List>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={verifyEmail}
                  $isvalid={isEmailValid}
                  required
                />

                <Notice $isvalid={isEmailValid}>{emailNotice}</Notice>
              </List>

              <List>
                <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={verifyPassword}
                  $isvalid={isPasswordValid}
                  required
                />

                <Notice $isvalid={isPasswordValid}>{passwordNotice}</Notice>
              </List>
            </ContainerForm>
          </div>
          <Button type="submit">Sign up</Button>
        </Form>
        <SignLink to="/signin"> Sign in </SignLink>
      </Container>
    </>
  );
};

export default AuthForm;
