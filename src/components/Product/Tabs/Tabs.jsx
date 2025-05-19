import { useState } from "react";
import { useSelector } from "react-redux";
import {
  BtnBox,
  DescBtn,
  DescList,
  ImgBox,
  ImgNameBox,
  Item,
  Name,
  RatingBox,
  ReviewItem,
  ReviewsBtn,
  ReviewsList,
  Text,
  Time,
  Wrapper,
} from "./Tabs.styled";

const Tabs = () => {
  const product = useSelector((state) => state.pharm.product);
  const {
    text = "",
    anti_cancer_properties = "",
    anti_diabetic_effects = "",
    digestive_aid = "",
    heart_health = "",
    immune_support = "",
    medicinal_uses = "",
  } = product?.description || {};

  const descriptionItems = [
    { label: "", value: text },
    {
      label: "Medicinal Uses: Antioxidant Properties: ",
      value: medicinal_uses,
    },
    { label: "Anti-Diabetic Effects: ", value: anti_diabetic_effects },
    { label: "Heart Health: ", value: heart_health },
    { label: "Anti-Cancer Properties: ", value: anti_cancer_properties },
    { label: "Immune Support: ", value: immune_support },
    { label: "Digestive Aid: ", value: digestive_aid },
  ];

  const [activeTab, setActiveTab] = useState("description");
  //   const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <Wrapper>
      <BtnBox>
        <DescBtn
          type="button"
          onClick={() => setActiveTab("description")}
          active={activeTab === "description" ? "true" : undefined}
        >
          Description
        </DescBtn>
        <ReviewsBtn
          type="button"
          onClick={() => setActiveTab("reviews")}
          active={activeTab === "reviews" ? "true" : undefined}
        >
          Reviews
        </ReviewsBtn>
      </BtnBox>

      {activeTab === "description" && (
        <DescList>
          {descriptionItems.map(({ label, value }, i) => (
            <Item key={i}>
              <span>{label}</span>
              {value}
            </Item>
          ))}
        </DescList>
      )}

      {activeTab === "reviews" && (
        <ReviewsList>
          {product?.reviews?.map((review, index) => (
            <ReviewItem key={index}>
              <ImgNameBox>
                <ImgBox>
                  <img src={review.photo} alt="user" />
                </ImgBox>
                <div>
                  <Name>{review.reviewer}</Name>
                  <Time>{review.time}</Time>
                </div>
              </ImgNameBox>
              <Text>{review.review}</Text>
              <RatingBox>
                <div>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i}>
                      <use
                        href={
                          i < review.rating
                            ? "/symbol-defs.svg#icon-star"
                            : "/symbol-defs.svg#icon-star-gr"
                        }
                      />
                    </svg>
                  ))}
                </div>
                <p>{review.rating}</p>
              </RatingBox>
            </ReviewItem>
          ))}
        </ReviewsList>
      )}
    </Wrapper>
  );
};

export default Tabs;
