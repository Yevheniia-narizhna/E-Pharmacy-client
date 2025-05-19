import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart, getCartItems } from "../../redux/pharm/operations";
import Modal from "../Modal/Modal";
import SignUp from "../Modal/SignUp/SignUp";
import SignIn from "../Modal/SignIn/Signin";
import {
  AddToCartBtn,
  AmountBox,
  BtnBox,
  ContProd,
  ImgBox,
  InfoBox,
  Name,
  NamePriceBox,
  Price,
  Text,
  Wrapp,
} from "./Product.styled";

const Product = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.pharm.product);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [amount, setAmount] = useState(0);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleAmountChange = (type) => {
    setAmount((prev) => {
      if (type === "increase") return prev + 1;
      if (type === "decrease" && prev > 0) return prev - 1;
      return prev;
    });
  };

  const handleAddToCart = (id) => {
    if (!isLoggedIn) {
      setOpenSignIn(true);
      return;
    }

    if (amount === 0) {
      toast.info("Please select the quantity of the product");
      return;
    }
    console.log("amount:", amount, typeof amount);

    dispatch(addToCart({ productId: id, quantity: amount }));
    dispatch(getCartItems());
  };

  return (
    <>
      <ContProd>
        <Wrapp>
          <ImgBox>
            <img src={product.photo} alt={product.name} />
          </ImgBox>

          <InfoBox>
            <NamePriceBox>
              <div>
                <Name>{product.name}</Name>
                <Text>{product.category}</Text>
              </div>
              <Price>{`৳${product.price}`}</Price>
            </NamePriceBox>

            <BtnBox>
              <AmountBox>
                <button
                  type="button"
                  onClick={() => handleAmountChange("increase")}
                >
                  <svg>
                    <use href="../../../public/symbol-defs.svg#icon-plus" />
                  </svg>
                </button>
                <p>{amount}</p>
                <button
                  type="button"
                  onClick={() => handleAmountChange("decrease")}
                >
                  <svg>
                    <use href="../../../public/symbol-defs.svg#icon-min-gr" />
                  </svg>
                </button>
              </AmountBox>

              <AddToCartBtn type="button" onClick={handleAddToCart}>
                Add to cart
              </AddToCartBtn>
            </BtnBox>
          </InfoBox>
        </Wrapp>

        {/* <TabsContainer /> */}
      </ContProd>

      <Modal isOpen={openSignIn} onClose={() => setOpenSignIn(false)}>
        <SignIn
          onClose={() => setOpenSignIn(false)}
          onToggleModal={() => {
            setOpenSignIn(false);
            setOpenSignUp(true);
          }}
        />
      </Modal>

      <Modal isOpen={openSignUp} onClose={() => setOpenSignUp(false)}>
        <SignUp
          onClose={() => setOpenSignUp(false)}
          onToggleModal={() => {
            setOpenSignUp(false);
            setOpenSignIn(true);
          }}
        />
      </Modal>
    </>
  );
};

export default Product;
