import { NavLink } from "react-router-dom";
import { useWindowSize } from "../../utils/utils";
import {
  AddressBox,
  ContAllStor,
  IsOpenStore,
  List,
  PhoneBox,
  RatingBox,
  RatingWithBtn,
  Store,
  SubTitle,
  Title,
  VisitStoreBtn,
  Wrapp,
} from "./MedStore.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allStores } from "../../redux/pharm/operations";

const MedStore = () => {
  const dispatch = useDispatch();
  const stores = useSelector((state) => state.pharm.stores);
  const width = useWindowSize();

  const storesLimit = width >= 1440 ? 9 : 8;
  const isTablDes = width >= 768;

  useEffect(() => {
    dispatch(allStores({ limit: storesLimit }));
  }, [dispatch, storesLimit]);
  return (
    <>
      <section>
        <ContAllStor>
          <Title>Medicine store</Title>
          <Wrapp>
            <List>
              {stores?.map((store) => (
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
                  {isTablDes && (
                    <VisitStoreBtn type="button">
                      <NavLink to="/medicine">Visit Store</NavLink>
                    </VisitStoreBtn>
                  )}
                  <RatingWithBtn>
                    <RatingBox>
                      <svg>
                        <use href="/symbol-defs.svg#icon-star" />
                      </svg>
                      <p>{store.rating}</p>
                    </RatingBox>
                    <IsOpenStore type="button" open={store.isOpen}>
                      {store.isOpen ? "open" : "close"}
                    </IsOpenStore>
                  </RatingWithBtn>
                </Store>
              ))}
            </List>
          </Wrapp>
        </ContAllStor>
      </section>
    </>
  );
};
export default MedStore;
