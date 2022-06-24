import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm.jsx';
import OrderSummary from './OrderSummary.jsx';

const initStripe = async () => {
  const res = await axios.get("/api/publishable-key");
  const publishableKey = await res.data.publishable_key;

  return loadStripe(publishableKey);
};

const Checkout = () => {
  const stripePromise = initStripe();

  const [clientSecretSettings, setClientSecretSettings] = useState({
    clientSecret: "",
    loading: true,
  });

  useEffect(() => {
    async function createPaymentIntent() {
      const response = await axios.post("/api/create-payment-intent", {});

      setClientSecretSettings({
        clientSecret: response.data.client_secret,
        loading: false,
      });
    }

    createPaymentIntent();
  }, []);

  return (
    <div class="w-9/12 mx-auto mt-10">
      <h1 class="ml-5 mb-5 font-semibold text-3xl font-sans text-indigo-600">Llama Store 🦙</h1>
      <div class="content-center flex flex-row">
        <div class="rounded-l-xl bg-gray-200 basis-1/2 p-10">
          <OrderSummary />
        </div>
        <div class="rounded-r-xl bg-blue-200 basis-1/2 p-10">
          {clientSecretSettings.loading ? (
            <h1 class="font-semibold text-3xl font-sans">Loading ...</h1>
          ) : (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret: clientSecretSettings.clientSecret,
                appearance: { theme: "stripe" },
              }}
            >
              <CheckoutForm />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
