import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerSchema } from "../../../utils/schemas";
import { registration } from "../../../redux/auth/operations";
import {
  BtnBox,
  InputBox,
  LinkBtn,
  SubmitBtn,
  Text,
  Title,
} from "../SignIn/SignInUp.styled";

const SignUp = ({ onClose, onToggleModal }) => {
  const dispatch = useDispatch();

  const handleToggleModal = () => {
    onClose();
    onToggleModal();
  };

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    dispatch(registration(data))
      .unwrap()
      .then(() => {
        handleToggleModal();
      });
  };

  return (
    <>
      <Title>Sign Up</Title>
      <Text>Before proceeding, please register on our site.</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputBox>
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              placeholder="User Name"
              {...register("name")}
            />
            {errors.name && touchedFields.name && (
              <span>{errors.name.message}</span>
            )}
          </label>

          <label htmlFor="email">
            <input
              type="text"
              id="email"
              placeholder="Email address"
              {...register("email")}
            />
            {errors.email && touchedFields.email && (
              <span>{errors.email.message}</span>
            )}
          </label>

          <label htmlFor="phone">
            <input
              type="text"
              id="phone"
              placeholder="Phone number"
              {...register("phone")}
            />
            {errors.phone && touchedFields.phone && (
              <span>{errors.phone.message}</span>
            )}
          </label>

          <label htmlFor="password">
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && touchedFields.password && (
              <span>{errors.password.message}</span>
            )}
          </label>
        </InputBox>

        <BtnBox>
          <SubmitBtn type="submit">Sign Up</SubmitBtn>
          <LinkBtn type="button" onClick={handleToggleModal}>
            Already have an account?
          </LinkBtn>
        </BtnBox>
      </form>
    </>
  );
};

export default SignUp;
