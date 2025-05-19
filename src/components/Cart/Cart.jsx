import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  decreaseQuantity,
  deleteFromCart,
  getCartItems,
  getProductById,
} from "../../redux/pharm/operations";
import CartForm from "./FormCart/FormCart";
import {
  AmountBox,
  BtnBox,
  ContCart,
  ImgBox,
  Item,
  List,
  MainTextWrap,
  MainWrapp,
  Price,
  RemoveBtn,
  Subtitle,
  Text,
  TextBox,
  Title,
} from "./Cart.styled";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.pharm.cart);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const handleIncrease = (id) => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity({ productId: id, quantity: 1 }));
  };

  const handleDelete = (id) => {
    dispatch(deleteFromCart(id));
  };

  const handleNavigate = (id) => {
    dispatch(getProductById(id)).then(() => {
      navigate("/product");
    });
  };

  return (
    <ContCart>
      <Title>Cart</Title>
      <MainWrapp>
        <CartForm />
        <div>
          <List>
            {cart?.cartProducts?.map(({ productId, quantity }) => (
              <Item
                key={productId._id}
                onClick={() => handleNavigate(productId._id)}
              >
                <ImgBox>
                  <img src={productId.photo} alt={productId.name} />
                </ImgBox>
                <TextBox>
                  <MainTextWrap>
                    <div>
                      <Subtitle>{productId.name}</Subtitle>
                      <Text>{productId.category}</Text>
                    </div>
                    <Price>{`৳ ${productId.price}`}</Price>
                  </MainTextWrap>
                  <BtnBox>
                    <AmountBox>
                      <button
                        type="button"
                        onClick={() => handleIncrease(productId._id)}
                      >
                        <svg>
                          <use href="/symbol-defs.svg#icon-plus" />
                        </svg>
                      </button>
                      <p>{quantity}</p>
                      <button
                        type="button"
                        onClick={() => handleDecrease(productId._id)}
                      >
                        <svg>
                          <use href="/symbol-defs.svg#icon-min-gr" />
                        </svg>
                      </button>
                    </AmountBox>
                    <RemoveBtn
                      type="button"
                      onClick={() => handleDelete(productId._id)}
                    >
                      Remove
                    </RemoveBtn>
                  </BtnBox>
                </TextBox>
              </Item>
            ))}
          </List>
        </div>
      </MainWrapp>
    </ContCart>
  );
};

export default Cart;
