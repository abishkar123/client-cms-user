import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import {fetchorder} from "../order/OrderAction"

const appearance = {
  theme: "stripe",
};
export const StripePayment = () => {

 
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);



  const handleSubmit = async e =>{
   
    e.preventDefault()

    fetch('http://localhost:8001/api/v1/order/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem("accessJWT")
        },
        body: JSON.stringify({
          amount: 100, // amount in cents
          currency: 'aud',
          payment_method_types: ['card'],
        }),
      }).then((response) => {
        return response.json();
      }).then((data) => {
        // Confirm the payment on the client side
        console.log(data)
        stripe.confirmCardPayment(data.clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }).then((result) => {
          if (result.error) {
            // Show error to customer
            console.log(result.error.message);
          } else {
            // Payment succeeded
            console.log(result.paymentIntent);
          }
        });
      }).catch((err) => {
        console.log(err);
      });
            
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay Here
      </button>
      {error && <div>{error}</div>}
      {success && <div>Payment successful!</div>}
    </form>
  );
};
