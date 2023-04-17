import { fetchclientproduct } from "../../helper/axioshelper"
import { settrendingProduct } from "./dashboardSlice";

export const gettrendingProductAction = ()=> async (dispatch)=>{
    
    const {status,prods }= await fetchclientproduct();
 
    
    status === "success" && dispatch(settrendingProduct(prods))
}