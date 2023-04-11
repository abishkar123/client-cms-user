import { fetchclientproduct } from "../../helper/axioshelper"
import { settrendingProduc } from "./dashboardSlice";

export const gettrendingProductAction = ()=> async (dispatch)=>{
    const {status,trendingProducts }= fetchclientproduct();
    console.log(trendingProducts)
    
    status === "success" && dispatch(settrendingProduc(trendingProducts))
}