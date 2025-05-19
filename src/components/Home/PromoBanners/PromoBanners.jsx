import { useNavigate } from "react-router-dom";
import {
  Banner,
  Box,
  Btn,
  ContPromo,
  List,
  Percentage,
  Round,
  RoundTitle,
  Title,
} from "./PromoBanners.styled";

const PromoBanners = () => {
  const navigate = useNavigate();
  return (
    <>
      <ContPromo>
        <List>
          <Banner>
            <RoundTitle>
              <Round>1</Round>
              <Title>Huge Sale</Title>
            </RoundTitle>
            <Box>
              <Percentage>70%</Percentage>
              <Btn type="button" onClick={() => navigate("/medicine")}>
                Shop now
              </Btn>
            </Box>
          </Banner>
          <Banner>
            <RoundTitle>
              <Round>2</Round>
              <Title>Secure delivery</Title>
            </RoundTitle>
            <Box>
              <Percentage>100%</Percentage>
              <Btn
                type="button"
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Read more
              </Btn>
            </Box>
          </Banner>
          <Banner>
            <RoundTitle>
              <Round>3</Round>
              <Title>Off</Title>
            </RoundTitle>
            <Box>
              <Percentage>35%</Percentage>
              <Btn type="button" onClick={() => navigate("/medicine")}>
                Shop now
              </Btn>
            </Box>
          </Banner>
        </List>
      </ContPromo>
    </>
  );
};

export default PromoBanners;
