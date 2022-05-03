import React,{ FC, useEffect } from "react";
import {getLocalStorage,getSessionStorage} from "@/utils/util"
import {useNavigate,Navigate,useLocation} from "react-router-dom"


const Auth:React.FC =({children})=>{
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        if((!getLocalStorage("_token") || !getSessionStorage("_user"))&& location.pathname.indexOf("/login")===-1){
            navigate('/login', { state: { route: location.pathname} })
        }
    },[location])
    console.log(location)
    return(
            <>
            {
                children
            }
            </>
    )
}

export default Auth