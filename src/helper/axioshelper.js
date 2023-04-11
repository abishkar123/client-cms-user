import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const DashboardCardApi = rootUrl + "/product";

const fetchProcesser =async ({method, url, data,} )=>{
    try {
        const res = await axios({
            method,
            url,
            data,
           
            
        })

        return res.data  
    } catch (error) {
    return {
        status: "error",
        message: error.message,
      };
        
    }
}


export const fetchclientproduct = async (data)=>{
    const url = DashboardCardApi;
    const obj ={
        method: "get",
        url,
        data,
       
    };


    return fetchProcesser(obj);

};