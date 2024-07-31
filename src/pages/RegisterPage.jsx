import { Box } from "@chakra-ui/react";
import AuthForm from "../components/AuthForm";

const RegisterPage = () => (
  <Box>
    <AuthForm isRegister={true} />
  </Box>
);

export default RegisterPage;
