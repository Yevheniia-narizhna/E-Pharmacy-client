import { useSelector } from "react-redux";
import { LogoutBtn } from "./LogoutBtn/LogoutBtn";
import { RegBtn } from "./RegBtn/RegBtn";
import { LogBtn } from "./LogBtn/LogBtn";
import { Wrapper } from "./LinksAuth.styled";

const LinksAuth = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <Wrapper>
        {isLoggedIn ? (
          <LogoutBtn />
        ) : (
          <>
            <RegBtn />
            <LogBtn />
          </>
        )}
      </Wrapper>
    </>
  );
};

export default LinksAuth;
