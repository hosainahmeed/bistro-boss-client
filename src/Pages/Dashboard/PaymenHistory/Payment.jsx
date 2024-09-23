import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckOut from "./CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);

function Payment() {
  const [cart,] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div className="w-full px-4">
      <SectionTitle
        subheading="please proceed"
        heading="Payment"
      ></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckOut cart={cart} price={price}></CheckOut>
      </Elements>
    </div>
  );
}

export default Payment;
