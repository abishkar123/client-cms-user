import { toast } from "react-toastify";
import { fetchpayment } from "../../helper/axioshelper";
import { setpaymentMethods } from "./CheckOutSlice";


export const fetchpaymentsAction= ()=> async (dispatch)=>{
    
    const {status, paym, message}= await fetchpayment();

    toast[status](message);
    status === "success" && dispatch(setpaymentMethods(paym))
}