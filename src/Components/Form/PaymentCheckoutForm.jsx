import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

import "./PayCheckoutForm.css";
import { Button } from "../ui/button";
import axios from "axios";
import { AuthContext } from "@/Providers/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";


const PaymentCheckoutForm = ({ classInfo }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const [payLoading, setPayLoading] = useState(false);

  useEffect(() => {
    const getClientSecret = async () => {
      // server request
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/crate-payment-intent/${classInfo?._id}`
      );
      setClientSecret(data?.secret?.client_secret);
    };
    getClientSecret();
  }, [classInfo]);

  //   For send enrolled data to server
  const { mutate: enrollData } = useMutation({
    mutationFn: async (enrollData) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/enrolled`,
        enrollData
      );
      return data;
    },
    onSuccess: () => {
      setPayLoading(false);
      Swal.fire({
        title: "Payment Success",
        icon: "success",
        draggable: true,
      });

      setTimeout(() => {
        navigate("/dashboard/my-courses");
      }, 1000);
    },
  });

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    setPayLoading(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, _paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setPayLoading(false);
    } else {
      //   console.log("[PaymentMethod]", paymentMethod);
      setCardError(null);

      //   Decuted money
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName,
          },
        },
      });

      if (result?.error) {
        setCardError(result?.error?.message);
        setPayLoading(false);
        return;
      }

      if (result?.paymentIntent?.status === "succeeded") {
        const orderData = {
          classId: classInfo?._id,
          classTitle: classInfo?.title,
          image: classInfo?.image,
          price: classInfo?.price,
          description: classInfo?.description,
          userEmail: user?.email,
          userName: user?.displayName,
          paymentStatus: "paid",
          enrollDate: new Date(),
          transactionId: result?.paymentIntent?.id,
          instructor: {
            name: classInfo?.instructor?.name,
            email: classInfo?.instructor?.email,
          },
        };

        enrollData(orderData);
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
      {cardError && <p className="text-red-500">{cardError}</p>}
      <Button type="submit" disabled={!stripe} className={"cursor-pointer"}>
        {
          payLoading ? <MoonLoader size={20} color="white" /> : `Pay ৳${classInfo?.price}`
        }
      </Button>
    </form>
  );
};

export default PaymentCheckoutForm;
