import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import {
  deleteFromCart,
  getCartItems,
  updateCart,
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
  const cart = useSelector((state) => state.pharm.cart);

  // const handleAmountChange = async (productId, type, currentQuantity) => {
  //   const newAmount =
  //     type === "increase"
  //       ? currentQuantity + 1
  //       : Math.max(currentQuantity - 1, 0);

  //   if (newAmount === 0) {
  //     await dispatch(deleteFromCart({ productId }));
  //   } else {
  //     const updatedProducts = cart.cartProducts.map((item) =>
  //       item.productId._id === productId
  //         ? { productId, quantity: newAmount }
  //         : { productId: item.productId._id, quantity: item.quantity }
  //     );

  //     await dispatch(updateCart({ products: updatedProducts }));
  //   }

  //   dispatch(getCartItems());
  // };

  // const handleDelete = (id) => {
  //   dispatch(deleteFromCart(id));
  //   dispatch(getCartItems());
  // };

  const handleAmountChange = async (productId, type, currentQuantity) => {
    const newAmount =
      type === "increase"
        ? currentQuantity + 1
        : Math.max(currentQuantity - 1, 0);

    if (newAmount === 0) {
      await dispatch(deleteFromCart({ productId })).unwrap();
    } else {
      const updatedProducts = cart.map((item) =>
        item.productId._id === productId
          ? { productId, quantity: newAmount }
          : { productId: item.productId._id, quantity: item.quantity }
      );
      await dispatch(updateCart({ products: updatedProducts })).unwrap();
    }

    await dispatch(getCartItems());
  };

  const handleDelete = async (id) => {
    await dispatch(deleteFromCart({ productId: id })).unwrap();
  };

  return (
    <ContCart>
      <Title>Cart</Title>
      <MainWrapp>
        <CartForm />
        <div>
          <List>
            {cart?.map(({ productId, quantity }) => (
              <Item key={productId._id}>
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
                        onClick={() =>
                          handleAmountChange(
                            productId._id,
                            "increase",
                            quantity
                          )
                        }
                      >
                        <svg>
                          <use href="/symbol-defs.svg#icon-plus" />
                        </svg>
                      </button>
                      <p>{quantity}</p>
                      <button
                        type="button"
                        onClick={() =>
                          handleAmountChange(
                            productId._id,
                            "decrease",
                            quantity
                          )
                        }
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
