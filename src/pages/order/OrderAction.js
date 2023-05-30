
import {toast} from "react-toastify"
import { getorder, postOrder } from "../../helper/axioshelper";
import { currentOrderHandler, setorderlist } from "./OrderSlice";


export const fetchorder = () => async (dispatch) => {
  const { status,order} = await getorder();
  
 
  status === "success" && dispatch(setorderlist(order));
};


export const postorderAction= (data) =>async dispatch =>{
    const resultPending = postOrder(data);

    toast.promise(resultPending, {
        pending: "please wait...."
    })

    const { status, message, order} = await resultPending;
    console.log(order)
    
  
    toast[status](message);
    status === "success"
    ? dispatch(currentOrderHandler(order))
    : dispatch(currentOrderHandler())
    
  status === "success" && dispatch(fetchorder());
}
