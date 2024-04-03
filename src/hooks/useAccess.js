import { addAdminInfo } from "../redux/slice/adminSlice";
import { GET_ACCESS_TOKEN } from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const useAccess = () => {
    const dispatch = useDispatch()
    const redirect = useNavigate()
    const [loading,setLoading]=useState(null)

    useEffect(() => {
        const getAccessToken = async () => {
            const response = await fetch(GET_ACCESS_TOKEN, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (response.ok) {
                const responseData = await response.json()
                dispatch(addAdminInfo(responseData?.userInfo))
            }
            else if (response.status == 403) {
                redirect("/");
            }
            else if (response.status == 401) {
                redirect("/");
            }
            else{
                redirect("/");
            }
    
        }
        getAccessToken()
    }, [dispatch])
    return loading;
}

export default useAccess;