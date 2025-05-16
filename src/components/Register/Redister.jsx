import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
import logoHome from "../../../public/img/logo-wh.png";
import logoOther from "../../../public/img/logo-gr.png";
import { LogoHeader } from "../Header/Header.styled";
import pillMob from "../../../public/img/pill-mob-1x.png";
import retinaMob from "../../../public/img/pill-mob-2x.png";
import pillTab from "../../../public/img/pill-tab-des-1x.png";
import retinaTab from "../../../public/img/pill-tab-des-2x.png";

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "At least 3")
    .max(20, "Max 20")
    .required("Required"),
  phone: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Incorrect format")
    .required("Required"),
  email: Yup.string().email("Incorrect format").required("Required"),
  password: Yup.string().min(6, "At least 6").required("Required"),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const isHome = location.pathname === "/home";
  const logo = isHome ? logoHome : logoOther;
  const textColor = isHome ? "#FFF" : "#1D1E21";

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
          <img src={logo} alt="logo" />
          <p style={{ color: textColor }}>E-Pharmacy</p>
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
