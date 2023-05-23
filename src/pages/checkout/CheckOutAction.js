import { fetchpayment } from "../../helper/axioshelper";
import { setpaymentMethods } from "./CheckOutSlice";


export const fetchpaymentsAction= ()=> async (dispatch)=>{
    
    const {status, paym}= await fetchpayment();

    status === "success" && dispatch(setpaymentMethods(paym))
}