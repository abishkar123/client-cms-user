import { Container, Row, Table } from "react-bootstrap"
import { Customelayout } from "../../components/customlayout/Customelayout"
import Stripe from "./Stripe"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { updateOrder } from "../../helper/axioshelper"
import { currentOrderHandler } from "../order/OrderSlice"

const Payment = () => {
  const dispatch = useDispatch()
  
  const { currentOrder } = useSelector((state) => state.orderlist)
  const { cart } = useSelector((state) => state.counter)



  const totalAmount = cart.reduce((a, c) => {
    return a + parseInt(c.shopQty * c.salesPrice)
  }, 0)

  const paymentSuccess = async () => {
    try {
      const { status, order } = await updateOrder({
        orderId: JSON.parse(localStorage.getItem("order"))?._id,
        isPaid: true,
      })

      status === "success" && dispatch(currentOrderHandler(order))
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Customelayout>
      <Container>
        <Row className="text-center">
          <h3>Order Summary</h3>

          <Table striped bordered hover>
            <thead>
              <tr>
                <td>Image</td>
                <td>Name</td>
                <td>Quantity</td>
                <td>Price</td>
                <td>Total</td>
              </tr>
            </thead>

            <tbody>
              {cart?.map((item, i) => (
                <tr key={item?._id}>
                  <td style={{ width: "20%" }}>
                    <img
                      src={
                        item.mainImage &&
                        process.env.REACT_APP_DOMAIN + item.mainImage.substr(6)
                      }
                      alt="item-img"
                      className="w-100"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.shopQty}</td>
                  <td>{item.salesPrice}</td>
                  <td>{item.shopQty * item.salesPrice}</td>
                </tr>
              ))}
              <tr>
                <td>TOTAL</td>
                <td></td>
                <td></td>
                <td></td>
                <td>{totalAmount}</td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <Row className="w-100">
          <Stripe data={currentOrder} paymentSuccess={paymentSuccess} />
        </Row>
      </Container>
    </Customelayout>
  )
}
export default Payment