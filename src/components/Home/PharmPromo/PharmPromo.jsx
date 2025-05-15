import onlineMob from "../../../../public/img/online-mob-1x.png";
import onlineTabl from "../../../../public/img/online-tab-1x.png";
import onlineDes from "../../../../public/img/online-desk-1x.png";
import retinaMob from "../../../../public/img/online-mob-2x.png";
import retinaTab from "../../../../public/img/online-tab-2x.png";
import retinaDes from "../../../../public/img/online-desk-2x.png";
import {
  Btn,
  ContPharmPromo,
  FeaturesList,
  ImgBox,
  Item,
  Text,
  Title,
  Wrapper,
} from "./PharmPromo.styled";
import { NavLink } from "react-router-dom";

const PharmPromo = () => {
  return (
    <>
      <ContPharmPromo>
        <Wrapper>
          <div>
            <Title>Add the medicines you need online now</Title>
            <Text>
              Enjoy the convenience of having your prescriptions filled from
              home by connecting with your community pharmacy through our online
              platform.
            </Text>
            <Btn type="button">
              <NavLink to="/medicine-store">Buy medicine</NavLink>
            </Btn>
          </div>
          <ImgBox>
            <picture>
              <source
                srcSet={`${retinaDes} 2x, ${onlineDes} 1x`}
                media="(min-width: 1440px)"
              />
              <source
                srcSet={`${retinaTab} 2x, ${onlineTabl} 1x`}
                media="(min-width: 768px)"
              />
              <source
                srcSet={`${retinaMob} 2x, ${onlineMob} 1x`}
                media="(max-width: 767px)"
              />
              <img src={onlineMob} alt="illustration" />
            </picture>
          </ImgBox>
        </Wrapper>
        <FeaturesList tabIndex="0" id="features">
          <Item>
            <svg>
              <use href="/symbol-defs.svg#icon-lightning-gr" />
            </svg>
            Take user orders form online
          </Item>
          <Item>
            <svg>
              <use href="/symbol-defs.svg#icon-lightning-gr" />
            </svg>
            Create your shop profile
          </Item>
          <Item>
            <svg>
              <use href="/symbol-defs.svg#icon-lightning-gr" />
            </svg>
            Manage your store
          </Item>
          <Item>
            <svg>
              <use href="/symbol-defs.svg#icon-lightning-gr" />
            </svg>
            Get more orders
          </Item>
          <Item>
            <svg>
              <use href="/symbol-defs.svg#icon-lightning-gr" />
            </svg>
            Storage shed
          </Item>
        </FeaturesList>
      </ContPharmPromo>
    </>
  );
};

export default PharmPromo;
