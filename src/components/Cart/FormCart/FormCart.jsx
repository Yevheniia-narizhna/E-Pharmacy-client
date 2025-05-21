import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartSchema } from "../../../utils/schemas";
import { toast } from "react-toastify";
import { cartCheckout } from "../../../redux/pharm/operations";
import {
  Form,
  InputBox,
  OrderBox,
  PaymentBox,
  RadioBox,
  SubmitBtn,
  SubTitle,
  Text,
  TotalBox,
} from "./FormCart.styled";
import { clearCart } from "../../../redux/pharm/slice";

const CartForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.pharm.cart);
  const total = cart
    ?.reduce((sum, item) => {
      return sum + item.quantity * item.productId.price;
    }, 0)
    .toFixed(2);
  const [isCashPayment, setIsCashPayment] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      payment: "cash",
    },
    resolver: yupResolver(cartSchema),
    mode: "onTouched",
  });

  useEffect(() => {
    setValue("payment", isCashPayment ? "cash" : "bank");
  }, [isCashPayment, setValue]);

  const onSubmit = (data) => {
    if (!cart?.length) {
      toast.error("Please select product to make an order");
      return;
    }
    dispatch(cartCheckout(data))
      .unwrap()
      .then(() => {
        // toast.success("Order placed successfully!");
        navigate("/home");
        dispatch(clearCart());
      })
      .catch(() => {
        toast.error("Failed to place order. Please try again.");
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <SubTitle>Enter shipping info </SubTitle>
      <Text>
        Enter your delivery address where you get the product. You can also send
        any other location where you send the products.
      </Text>

      <InputBox>
        <label>
          Name
          <input type="text" placeholder="Enter text" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </label>

        <label>
          Email
          <input type="text" placeholder="Enter text" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </label>

        <label>
          Phone
          <input type="text" placeholder="Enter text" {...register("phone")} />
          {errors.phone && <span>{errors.phone.message}</span>}
        </label>

        <label>
          Address
          <input
            type="text"
            placeholder="Enter text"
            {...register("address")}
          />
          {errors.address && <span>{errors.address.message}</span>}
        </label>
      </InputBox>

      <PaymentBox>
        <SubTitle>Payment method</SubTitle>
        <Text>
          You can pay us in a multiple way in our payment gateway system.
        </Text>

        <RadioBox>
          <label>
            <input
              type="radio"
              value="cash"
              checked={isCashPayment}
              onChange={() => setIsCashPayment(true)}
            />
            Cash On Delivery
          </label>

          <label>
            <input
              type="radio"
              value="bank"
              checked={!isCashPayment}
              onChange={() => setIsCashPayment(false)}
            />
            Bank
          </label>

          {errors.payment && <span>{errors.payment.message}</span>}
        </RadioBox>
      </PaymentBox>

      <OrderBox>
        <SubTitle>Order details </SubTitle>
        <Text>
          Shipping and additional costs are calculated based on values you have
          entered.
        </Text>
        <TotalBox>
          <p>Total:</p>
          <p>{`৳ ${total}`}</p>
        </TotalBox>
      </OrderBox>

      <SubmitBtn type="submit">Place order</SubmitBtn>
    </Form>
  );
};

export default CartForm;
