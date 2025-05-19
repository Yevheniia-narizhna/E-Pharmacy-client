import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginSchema } from "../../../utils/schemas";
import { login } from "../../../redux/auth/operations";
import { BtnBox, InputBox, LinkBtn, SubmitBtn, Text, Title } from "./SignInUp.styled";

const SignIn = ({ onClose, onToggleModal }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    dispatch(login(values));
    onClose();
  };

  const handleToggleModal = () => {
    onClose();
    onToggleModal();
  };

  return (
    <>
      <Title>Log in to your account</Title>
      <Text>Please login to your account before continuing.</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputBox>
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              placeholder="Email address"
              {...register("email")}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </label>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </label>
        </InputBox>
        <BtnBox>
          <SubmitBtn type="submit">Log in</SubmitBtn>
          <LinkBtn type="button" onClick={handleToggleModal}>
            Don&#39;t have an account?
          </LinkBtn>
        </BtnBox>
      </form>
    </>
  );
};

export default SignIn;
