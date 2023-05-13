
import {toast} from "react-toastify"
import { getorder, postOrder } from "../../helper/axioshelper";
import { setorderlist } from "./OrderSlice";


export const fetchorder = () => async (dispatch) => {
  const { status,order} = await getorder();
  console.log(order)
  status === "success" && dispatch(setorderlist(order));
};


export const postorderAction= (data) =>async dispatch =>{
    const resultPending = postOrder(data);

    toast.promise(resultPending, {
        pending: "please wait...."
    })

    const { status, message} = await resultPending;
    console.log(status)
    toast[status](message);
    
    
  status === "success" && dispatch(fetchorder());
}
