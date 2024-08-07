import { Box } from "@chakra-ui/react";
import AuthForm from "../components/AuthForm";

const SigninPage = () => (
  <Box>
    <AuthForm isRegister={false} />
  </Box>
);

export default SigninPage;
