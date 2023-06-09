import { requestPending, requestSuccess, setNotRegistered } from "./LoginSlice";
import { toast } from "react-toastify";

import { fetchAdminProfile, fetchNewAccessJWT, loginUser, updateProfile } from "../../helper/axioshelper";

export const loginAction = (formData) => async (dispatch) => {
    try {
        dispatch(requestPending())
        const pending = loginUser(formData)
        
        toast.promise(pending, { pending: "Please wait ...." });

        const { status, message, toknes, user } = await pending;
        toast[status](message);

        if (status == "success") {
            const { accessJWT, refreshJWT } = toknes;
            sessionStorage.setItem("accessJWT", accessJWT);
            localStorage.setItem("refreshJWT", refreshJWT);
            
            dispatch(getAdminProfile());
           

        } else {
            status === "error" && message.includes("register") && dispatch(setNotRegistered(user))
        }


    } catch (error) {
        return {
            status: "error",
            message: error.messsage,
        };

    }
}

const getAdminProfile = () => async (dispatch) => {
    const { status, user, message } = await fetchAdminProfile();
    toast[status](message);

    status === "success"
        ? dispatch(requestSuccess(user))
        : dispatch(requestSuccess({}));
};

export const updateProfileAction = (data) => async (dispatch) => {
    const { status, message } = await updateProfile (data);

    toast[status](message);
    status === "success" && dispatch(getAdminProfile());

}

export const autoLogin = () => async (dispatch) => {
    //if  accessJWT exist, get the user and mount in our redux store
    //check if accessJWT exist

    const accessJWT = sessionStorage.getItem("accessJWT");
    const refreshJWT = localStorage.getItem("refreshJWT");
    // const cart = JSON.parse(localStorage.getItem("cart"))
  

    if (accessJWT) {
        dispatch(getAdminProfile());
    } else if (refreshJWT) {
        // call for new accessJWT

        const { status, accessJWT } = await fetchNewAccessJWT();
        if (status === "success") {
            sessionStorage.setItem("accessJWT", accessJWT);
            dispatch(getAdminProfile());
            return;
        }
        dispatch(forceLogout());
    } else {
        //force logout
        dispatch(forceLogout());
    }
};

export const forceLogout = () => (dispatch) => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    
    // JSON.parse(localStorage.removeItem("cart"))
    dispatch(requestSuccess({}));
};