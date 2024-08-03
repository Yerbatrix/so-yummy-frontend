import { object, string } from "yup";

const registerSchema = object({
  name: string()
    .required("Name is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .matches(/^[a-zA-Z0-9]+$/, "Letters and numbers only"),
  email: string().email("Invalid email address").required("Email is required"),
  password: string()
    .required("Password is required")
    .min(6, "Minimum 6 characters")
    .max(60, "Maximum 60 characters")
    .matches(/[A-Z]/, "At least one uppercase")
    .matches(/[0-9]/, "At least one digit"),
});

export default registerSchema;
