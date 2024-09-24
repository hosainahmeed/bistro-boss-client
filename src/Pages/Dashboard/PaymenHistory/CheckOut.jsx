import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import "../styles/Common.css";

function CheckOut({ cart, price }) {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState();
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState(false);
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return "!stripe";
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return "Card element not found";
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message, // Fix error handling
      });
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      Swal.fire({
        icon: "success",
        title: "Payment successful",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      }
    );

    if (confirmError) {
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: confirmError.message, // Handle confirm error
      });
      setProcessing(false);
      return;
    }

    setProcessing(false);

    if (paymentIntent?.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        quantity: cart.length,
        cartIds: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.menuItemId),
        itemsName: cart.map((item) => item.name),
        status: "service pending",
        date: new Date(),
      };

      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.insertedId) {
          console.log(res.data.insertedId);
        }
      });
    }
  };

  useEffect(() => {
    axiosSecure.post("/create-checkout-session", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  return (
    <div>
      <form className="text-center" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
              complete: {
                color: "#4caf50",
                iconColor: "#4caf50",
              },
            },
          }}
        />
        <button
          className="btn btn-active btn-primary px-12 text-xl mt-12 "
          type="submit"
          disabled={!stripe || !clientSecret || processing} // Changed 'proccesing' to 'processing'
        >
          Pay
        </button>
      </form>
      {transactionId && (
        <p className="text-xl text-green-700 text-center">
          Payment succeeded with transaction Id: {transactionId}
        </p>
      )}
    </div>
  );
}

export default CheckOut;
