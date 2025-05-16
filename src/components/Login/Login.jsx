import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import logoGr from "../../../public/img/logo-gr.png";
import { LogoHeader } from "../Header/Header.styled";
import pillMob from "../../../public/img/pill-mob-1x.png";
import retinaMob from "../../../public/img/pill-mob-2x.png";
import pillTab from "../../../public/img/pill-tab-des-1x.png";
import retinaTab from "../../../public/img/pill-tab-des-2x.png";
import {
  ContReg,
  ImgWrapp,
  LogoWrapp,
  SubmitBtn,
  Title,
  TitleBox,
} from "../Register/Register.styled";
import { BtnBoxLog, InputBox, MainWrapp } from "./Login.styled";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const schema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, "Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(login(data))
      .unwrap()
      .then(() => navigate("/home"));
  };

  return (
    <ContReg>
      <LogoWrapp>
        <LogoHeader to="/home">
          <img src={logoGr} alt="logo" />
          <p>E-Pharmacy</p>
        </LogoHeader>
      </LogoWrapp>
      <MainWrapp>
        <TitleBox>
          <Title>
            Your medication, delivered Say goodbye to all{" "}
            <span>your healthcare</span> worries with us
          </Title>
          <ImgWrapp>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={`${pillMob} 1x, ${retinaMob} 2x`}
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${pillTab} 1x, ${retinaTab} 2x`}
              />
              <img src={pillMob} alt="illustration" />
            </picture>
          </ImgWrapp>
        </TitleBox>
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
          <BtnBoxLog>
            <SubmitBtn type="submit">Login</SubmitBtn>
            <NavLink to="/register">Don&#39;t have an account?</NavLink>
          </BtnBoxLog>
        </form>
      </MainWrapp>
    </ContReg>
  );
};

export default Login;
