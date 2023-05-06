import axios from "axios";
const rootUrl = "http://localhost:8001/api/v1";
const clientapi = rootUrl + "/user";
const DashboardCardApi = rootUrl + "/product";
const catapi= rootUrl + "/category";
const paymentapi = rootUrl + "/payments";

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
//Registeration
export const postnewuser = async (data)=>{

    const url = clientapi + "/register";
    const obj ={
        method: "post",
        url,
        data,
       
    };


    return fetchProcesser(obj);

};


//Products
export const fetchclientproduct = async (slug)=>{

    const url =  slug? DashboardCardApi + "/" + slug : DashboardCardApi;
    const obj ={
        method: "get",
        url,
        slug,
       
    };


    return fetchProcesser(obj);

};

///Category
export const fetchcategory= async ()=>{

    const url = catapi;
    const obj ={
        method: "get",
        url,
    };
    return fetchProcesser(obj);

};

/// payment 
export const fetchpayment= async ()=>{

    const url = paymentapi;
    const obj ={
        method: "get",
        url,
    };
    return fetchProcesser(obj);

};

