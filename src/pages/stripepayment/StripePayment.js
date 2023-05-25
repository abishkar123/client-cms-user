import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import {fetchorder} from "../order/OrderAction"

const appearance = {
  theme: "stripe",
};
export const StripePayment = () => {
//   const dispatch = useDispatch()
//  const { cart } = useSelector((state) => state.counter)

//  const totalAmount = cart.reduce((acc, pp)=>{
//   return acc + parseInt(pp.shopQty* pp.salesPrice)})

//   const {order} = useSelector((state)=>state.orderlist)
//   const {_id} = order
//  const findoneOrder = order ? order.find((item)=>item._id === _id):[]
//  console.log(findoneOrder, order)


  // useEffect(()=>{
  //   dispatch(fetchorder())
  // },[dispatch])
 
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

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!stripe || !elements) {
//       return;
//     }
//     const cardElement = elements.getElement(CardElement);
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement,
//     });

//     if (error) {
//       console.log("[error]", error);
//       setError(error.message);
//     } else {
//       console.log("[PaymentMethod]", paymentMethod);
      
//       const response = await  processpayment({
//         amount: 300 * 100, // Set the desired amount
//         currency: "aud", // Set the desired currency
//         billing_details: {
//           address: {
//             postal_code: "2215", // Replace with the value from your postal code field
//           },
//         },
//       })
      
      
//     //   await fetch("http://localhost:8001/process-payment", {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify(),
//     //   });
//       const { clientSecret, error } = await response;
//       if (error) {
//         console.log("[error]", error);
//         setError(error);
//       } else {
//         const result = await stripe.confirmCardPayment(clientSecret, {
//           payment_method: paymentMethod.id,
//         });


//         if (result.error) {
//           console.log("[error]", result.error);
//           setError(result.error.message);
//         } else {
//           console.log("[PaymentIntent]", result.paymentIntent);
//           setSuccess(true);
//         }
//       }
//     }
//   };

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
