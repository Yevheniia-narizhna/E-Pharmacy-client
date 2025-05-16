import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { customerReviews } from "../../../redux/pharm/operations";
import { ContRev, ImgBox, List, Review, Text, Title } from "./Reviews.styled";

const Reviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.pharm.reviews);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  const revLimit = isMobile ? 1 : isTablet ? 2 : isDesktop ? 3 : 3;

  useEffect(() => {
    dispatch(customerReviews({ limit: revLimit }));
  }, [dispatch, revLimit]);

  return (
    <section>
      <ContRev>
        <Title>Reviews</Title>
        <Text>Search for Medicine, Filter by your location</Text>
        <List>
          {reviews?.map((review) => (
            <Review key={review._id}>
              <ImgBox>
                <img src={review.photo} alt="person" />
              </ImgBox>
              <h3>{review.name}</h3>
              <p>{review.testimonial}</p>
            </Review>
          ))}
        </List>
      </ContRev>
    </section>
  );
};

export default Reviews;
