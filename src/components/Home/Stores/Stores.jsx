import { useDispatch, useSelector } from "react-redux";
import {
  AddressBox,
  ContStores,
  IsOpen,
  List,
  PhoneBox,
  RatingBox,
  RatingBtn,
  Store,
  SubTitle,
  Text,
  Title,
  Wrapper,
} from "./Stores.styled";
import { useEffect, useState } from "react";
import { getNearestStores } from "../../../redux/pharm/operations.js";

const Stores = () => {
  const dispatch = useDispatch();
  const nearestSt = useSelector((state) => state.pharm.nearestStores);
  const [randomStores, setRandomStores] = useState([]);

  useEffect(() => {
    dispatch(
      getNearestStores({
        limit: 6,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    console.log("Stores from redux:", nearestSt);
    if (nearestSt.length > 0) {
      const shuffled = [...nearestSt].sort(() => 0.5 - Math.random());
      setRandomStores(shuffled.slice(0, 6));
    }
  }, [nearestSt]);

  return (
    <ContStores>
      <Title>Your Nearest Medicine Store</Title>
      <Text>Search for Medicine, Filter by your location</Text>
      <Wrapper>
        <List>
          {randomStores?.map((store) => (
            <Store key={store._id}>
              <SubTitle>{store.name}</SubTitle>
              <AddressBox>
                <svg>
                  <use href="/symbol-defs.svg#icon-map-pin-gr" />
                </svg>
                <ul>
                  <li>
                    <a
                      href={`https://maps.google.com/?q=${store.address},${store.city}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {store.address}
                    </a>
                  </li>
                  <li>{store.city}</li>
                </ul>
              </AddressBox>
              <PhoneBox>
                <svg>
                  <use href="/symbol-defs.svg#icon-phone" />
                </svg>
                <a href={`tel:${store.phone}`}>
                  <p>{store.phone}</p>
                </a>
              </PhoneBox>
              <RatingBtn>
                <RatingBox>
                  <svg>
                    <use href="/symbol-defs.svg#icon-star" />
                  </svg>
                  <p>{store.rating}</p>
                </RatingBox>
                <IsOpen type="button" open={store.isOpen}>
                  {store.isOpen ? "open" : "close"}
                </IsOpen>
              </RatingBtn>
            </Store>
          ))}
        </List>
      </Wrapper>
    </ContStores>
  );
};
export default Stores;
