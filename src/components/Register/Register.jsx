import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { registration } from "../../redux/auth/operations";
import {
  BtnBox,
  ContReg,
  ImgWrapp,
  InputBox,
  LogoWrapp,
  MainWrapp,
  SubmitBtn,
  Title,
  TitleBox,
} from "./Register.styled";
import pillMob from "../../../public/img/pill-mob-1x.png";
import retinaMob from "../../../public/img/pill-mob-2x.png";
import pillTab from "../../../public/img/pill-tab-des-1x.png";
import retinaTab from "../../../public/img/pill-tab-des-2x.png";
import { LogoHeader } from "../Header/Header.styled";
import logoGr from "../../../public/img/logo-gr.png";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "At least 3 characters")
    .max(20, "Max 20 characters")
    .required("Required"),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, "Invalid phone format")
    .required("Required"),
  email: Yup.string()
    .matches(emailRegex, "Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    dispatch(registration(values))
      .unwrap()
      .then(() => {
        navigate("/login");
      });
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
            <label>
              <input
                type="text"
                placeholder="User Name"
                {...register("name")}
              />
              {errors.name && <span>{errors.name.message}</span>}
            </label>
            <label>
              <input
                type="text"
                placeholder="Email address"
                {...register("email")}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </label>
            <label>
              <input
                type="text"
                placeholder="Phone number"
                {...register("phone")}
              />
              {errors.phone && <span>{errors.phone.message}</span>}
            </label>
            <label>
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && <span>{errors.password.message}</span>}
            </label>
          </InputBox>
          <BtnBox>
            <SubmitBtn type="submit">Register</SubmitBtn>
            <NavLink to="/login">Already have an account?</NavLink>
          </BtnBox>
        </form>
      </MainWrapp>
    </ContReg>
  );
};

export default Register;
