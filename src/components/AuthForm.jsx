import { useState } from "react";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slices/authSlice";

const AuthForm = ({ isRegister }) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
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
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl isInvalid={errors.message}>
        <FormLabel>Email</FormLabel>
        <Input name="email" value={formState.email} onChange={handleChange} />
        <FormLabel>Password</FormLabel>
        <Input
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        {errors.message && (
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        )}
      </FormControl>
      <Button mt={4} type="submit">
        {isRegister ? "Sign Up" : "Sign In"}
      </Button>
    </Box>
  );
};

export default AuthForm;
