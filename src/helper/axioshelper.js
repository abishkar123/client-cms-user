import axios from "axios";
const rootUrl = "http://localhost:8001/api/v1";
const clientapi = rootUrl + "/user";
const DashboardCardApi = rootUrl + "/product";
const catapi= rootUrl + "/category";
const paymentapi = rootUrl + "/payments";
const orderApi = rootUrl + "/order";

const fetchProcesser =async ({method, url, data,token, isPrivate} )=>{

    try {
        // await axios.post(adminApi + "/register", data);
        const jwtToken = token || sessionStorage.getItem("accessJWT");
        
       
        const headers = isPrivate
          ? {
              Authorization: jwtToken,
            }
          : null;
    
        const res = await axios({
          method,
          url,
          data,
          headers,
        });
        return res.data  
    } catch (error) {
        const message = error.message;
    
        if (error?.response?.data?.message === "jwt expired") {
          const { accessJWT } = await fetchNewAccessJWT();
          sessionStorage.setItem("accessJWT", accessJWT);
          return fetchProcesser({ method, url, data, isPrivate, token: accessJWT });
        }
    
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

export const postEmailVerification = async (data) => {
    const url = clientapi + "/verify";
    const obj = {
        method: "post",
        url,
        data,
    };

    return fetchProcesser(obj);
};

export const loginUser = async (loginData) => {
    const url = clientapi + "/login";
    const obj = {
        method: "post",
        url,
        data: loginData,
    };
    return fetchProcesser(obj);
};


export const fetchAdminProfile = async () => {
    const url = clientapi + "/user-profile";
    const obj = {
        method: "get",
        url,
        isPrivate: true,
      
    };


    return fetchProcesser(obj);
};
export const fetchNewAccessJWT = async () => {
    const url = clientapi + "/new-accessjwt";
    const token = localStorage.getItem("refreshJWT");

    const obj = {
        method: "get",
        url,
        isPrivate: true,
        token,
    };
    return fetchProcesser(obj);
}

export const fetchOtpRequest = async (data) => {
    const url = clientapi + "/request-otp";
    const obj = {
        method: "post",
        url,
        data,
    };
    return fetchProcesser(obj);
};

export const resetPassRequest = async (data) => {
    const url = clientapi + "/reset-password";
    const obj = {
        method: "patch",
        url,
        data,
    };
    return fetchProcesser(obj);
};

export const updateProfile = async (data) => {
    const url = clientapi + "/user-profile";
    const obj = {
        method: "put",
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
        isPrivate:true,
       
    };


    return fetchProcesser(obj);

};

///Category
export const fetchcategory= async ()=>{

    const url = catapi;
    const obj ={
        method: "get",
        url,
        isPrivate:true,
    };
    return fetchProcesser(obj);

};

/// payment 
export const fetchpayment= async ()=>{

    const url = paymentapi;
    const obj ={
        method: "get",
        url,
        isPrivate:true,
    };
    
    return fetchProcesser(obj);

};


export const postOrder = async (order) => {
    const url = orderApi + "/add";
    const obj = {
        method: "post",
        url,
        isPrivate: true,
        data: order,
    };

    return fetchProcesser(obj);

}

export const getorder = async () => {
    const url = orderApi ;
    const obj = {
        method: "get",
        url,
        isPrivate: true,
     
    };

    return fetchProcesser(obj);

}

