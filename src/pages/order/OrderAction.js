
import {toast} from "react-toastify"
import { postOrder } from "../../helper/axioshelper";
import { setorderlist } from "./OrderSlice";

export const postorderAction= (data) =>async dispatch =>{
    const resultPending = postOrder(data);

    toast.promise(resultPending, {
        pending: "please wait...."
    })

    const { status, message} = await resultPending;
    console.log(status)
    toast[status](message);
    
    
  status === "success" && dispatch(setorderlist());
}
