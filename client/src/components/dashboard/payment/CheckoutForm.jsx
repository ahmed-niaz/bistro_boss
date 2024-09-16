import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [tdxId, setTdxId] = useState("");
  const navigate = useNavigate()

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: err } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.name || "anonymous",
          },
        },
      }
    );

    if (err) {
      console.log(err, "confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTdxId(paymentIntent.id);

        // save the payment in the database
        const payment = {
          email: user.email,
          transactionId: paymentIntent.id,
          price: totalPrice,
          date: new Date(),
          cartIds: cart.map((item) => item._id),
          menuItemIds: cart.map((item) => item.menuID),
          status: "pending",
        };

        const res = await axiosSecure.post("/payment", payment);
        console.log("Payment saved", res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          toast.success("Payment is done");
          navigate('/dashboard/payment-history')
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          },
        }}
      />
      <div className="flex items-center flex-col justify-center mt-12">
        <button
          className="btn glass btn-wide bg-[#835D23] rounded-none text-white hover:bg-[#835D21] mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <small className="font-cinzel text-red-700 font-bold mt-4">
          {error}
        </small>
        {tdxId && (
          <p className="text-green-500">Your transaction id {tdxId} </p>
        )}
      </div>
    </form>
  );
};

export default CheckoutForm;
