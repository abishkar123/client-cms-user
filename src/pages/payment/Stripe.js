import { CardElement,Elements,useElements,useStripe,} from "@stripe/react-stripe-js"
  import { loadStripe } from "@stripe/stripe-js"
  import { useState } from "react"
  import { Button, Form } from "react-bootstrap"
  import { processpayment } from "../../helper/axioshelper"
  import { useSelector } from "react-redux"
  import { useNavigate } from "react-router-dom"

  
  const PaymentForm = ({ data: value, paymentSuccess }) => {
    const { cart } = useSelector((state) => state.counter)
    const [processing, setProcessing] = useState("")
    const stripe = useStripe()
    const elements = useElements()
    const navigate = useNavigate()
  
    const totalAmount = cart.reduce((a, c) => {
      return a + parseInt(c.shopQty * c.salesPrice)
    }, 0)
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      setProcessing(true)
      const clientSecret = await processpayment({ amount: totalAmount * 100 })
  
      try {
        const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
  
        if (payload.paymentIntent.status === "succeeded") {
          console.log("success")
          setProcessing(false)
          paymentSuccess()
        } else {
          console.log("failed")
          setProcessing(false)
          console.log(payload.error)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
  
    return (
      <Form onSubmit={handleSubmit}>
        <h3 className="text-center">Enter Card Details</h3>
        <hr />
        <CardElement id="card-element" />
        <Button className="w-100 mt-4" type="submit">
          PAY HERE 
        </Button>
        {processing && <h4 className="text-center mt-2">Processing...</h4>}
      </Form>
    )
  }
  
  const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY)
  
  const Stripe = ({ data, paymentSuccess }) => {
    return (
      <div>
        <Elements stripe={promise}>
          <PaymentForm data={data} paymentSuccess={paymentSuccess} />
        </Elements>
      </div>
    )
  }
  export default Stripe