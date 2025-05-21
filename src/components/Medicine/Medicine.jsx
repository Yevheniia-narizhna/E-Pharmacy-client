import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  getCartItems,
  getProductById,
} from "../../redux/pharm/operations";
import {
  AddToCartBtn,
  BtnBox,
  ContMed,
  DetailsBtn,
  ImgBox,
  Info,
  Item,
  List,
  NamePrice,
  Price,
  SubTitle,
  Text,
  Title,
} from "./Medicine.styled";
import Filter from "./Filter/Filter";
import Pagination from "./Pagination/Pagination";
import Modal from "../Modal/Modal";
import SignIn from "../Modal/SignIn/Signin";
import SignUp from "../Modal/SignUp/SignUp";
import { toast } from "react-toastify";

const Medicine = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.pharm.products);
  const totalPages = useSelector((state) => state.pharm.totalPages);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const [modal, setModal] = useState(null); // 'signin' | 'signup' | null

  const handleOpenModal = (type) => setModal(type);
  const handleCloseModal = () => setModal(null);

  // const handleAddToCart = useCallback(
  //   (id) => {
  //     if (!isLoggedIn) {
  //       handleOpenModal("signin");
  //     } else {
  //       dispatch(addToCart({ productId: id, quantity: 1 }));
  //       dispatch(getCartItems());
  //     }
  //   },
  //   [isLoggedIn, dispatch]
  // );

  const handleAddToCart = useCallback(
    async (id) => {
      if (!isLoggedIn) {
        handleOpenModal("signin");
        return;
      }

      try {
        await dispatch(addToCart({ productId: id, quantity: 1 })).unwrap();
        dispatch(getCartItems());
        // toast.success("Product added to cart");
      } catch (err) {
        toast.error(err);
      }
    },
    [isLoggedIn, dispatch]
  );

  const handleDetailsClick = useCallback(
    (id) => {
      dispatch(getProductById(id)).then(() => {
        navigate("/product");
      });
    },
    [dispatch, navigate]
  );

  return (
    <>
      <ContMed>
        <Title>Medicine</Title>
        <Filter totalPages={totalPages} />

        {products?.length > 0 ? (
          <List>
            {products.map((product) => (
              <Item key={product._id}>
                <ImgBox>
                  <img src={product.photo} alt="product" />
                </ImgBox>
                <Info>
                  <NamePrice>
                    <SubTitle>{product.name}</SubTitle>
                    <Price>{`৳${product.price}`}</Price>
                  </NamePrice>
                  <Text>{product.category}</Text>
                  <BtnBox>
                    <AddToCartBtn
                      type="button"
                      onClick={() => handleAddToCart(product._id)}
                    >
                      Add to cart
                    </AddToCartBtn>
                    <DetailsBtn
                      type="button"
                      onClick={() => handleDetailsClick(product._id)}
                    >
                      Details
                    </DetailsBtn>
                  </BtnBox>
                </Info>
              </Item>
            ))}
          </List>
        ) : (
          <p>No products found.</p>
        )}

        {totalPages > 1 && <Pagination totalPages={totalPages} />}
      </ContMed>

      <Modal isOpen={modal === "signin"} onClose={handleCloseModal}>
        <SignIn
          onClose={handleCloseModal}
          onToggleModal={() => handleOpenModal("signup")}
        />
      </Modal>

      <Modal isOpen={modal === "signup"} onClose={handleCloseModal}>
        <SignUp
          onClose={handleCloseModal}
          onToggleModal={() => handleOpenModal("signin")}
        />
      </Modal>
    </>
  );
};

export default Medicine;
