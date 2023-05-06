import { fetchcategory } from "../../helper/axioshelper";
import { setCategories } from "./categorySlice";

export const fetchcategoryAction = ()=> async (dispatch)=>{
    
    const {status, cats}= await fetchcategory();
   
 
    
    status === "success" && dispatch(setCategories(cats))
}