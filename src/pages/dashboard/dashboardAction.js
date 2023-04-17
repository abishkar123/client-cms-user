import { fetchclientproduct } from "../../helper/axioshelper"
import { settrendingProduct } from "./dashboardSlice";

export const gettrendingProductAction = (slug)=> async (dispatch)=>{
    
    const {status,prods }= await fetchclientproduct(slug);
 
    
    status === "success" && dispatch(settrendingProduct(prods))
}