import * as Yup from "yup";

const phoneRegex =
  /^(\+?380|\+?38|\(?0)\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(phoneRegex, "Invalid phone number")
    .required("RPhone is required"),
  password: Yup.string()
    .min(6, "Min length 6")
    .max(20, "Max length 20")
    .required("Required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Min length 6")
    .max(20, "Max length 20")
    .required("Password is required"),
});

export const cartSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(phoneRegex, "Invalid phone number")
    .required("Phone is required"),
  address: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Address is required"),
  payment: Yup.string()
    .oneOf(["cash", "bank"])
    .required("Payment method is required"),
});
