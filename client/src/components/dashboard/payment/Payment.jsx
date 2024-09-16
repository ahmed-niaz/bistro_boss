import SectionTitle from "../../shared/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk);

const Payment = () => {
  return (
    <main>
      <div className="m-12">
        <SectionTitle heading="Payment" subHeading="Pay" />
      </div>
      <div className="w-10/12 mx-auto bg-[#F6F6F6] p-12 my-24">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </main>
  );
};

export default Payment;
