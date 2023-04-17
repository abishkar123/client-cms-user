import axios from "axios";
const rootUrl = "http://localhost:8001/api/v1";
const DashboardCardApi = rootUrl + "/product";
const catapi= rootUrl + "/category"

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


export const fetchclientproduct = async (slug)=>{

    const url =  slug? DashboardCardApi + "/" + slug : DashboardCardApi;
    const obj ={
        method: "get",
        url,
        slug,
       
    };


    return fetchProcesser(obj);

};


export const fetchcategory= async ()=>{

    const url = catapi;
    const obj ={
        method: "get",
        url,
       
    };


    return fetchProcesser(obj);

};

