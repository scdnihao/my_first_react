import React, { useEffect, useState}from "react"
import {useNavigate,useLocation} from "react-router-dom"
import {RequestRedirect} from '@/types'
import {getLocalStorage,env,handHint} from "@/utils/util"
import { message} from 'antd';
import {ErrorEnum,BusError} from "@/utils/Error"


interface RequestType{
    method:string;
    headers:HeadersInit|any;
    body:any;
    redirect:RequestRedirect;
}
type FetchType = "POST"|"GET";

interface RequestParamType{
    url:string;
    data:Object|string;
    method:FetchType
}


 const  useFetch=  (param:RequestParamType)=>{

    // const navigate = useNavigate();
    // const location = useLocation();
    // debugger
    const [data,setDate] =useState<any>(0);
    // const request =async()=>{
    //     let myHeaders = new Headers();
    //     handHint({
    //         key:'load',
    //         method:'loading',
    //         message:"",
    //     })
    //     if(getLocalStorage("_token")){
    //         myHeaders.append("Authorization",getLocalStorage("_token")||"" );
    //     }else{
    //         // navigate('/login', { state: { route: location.pathname} })
    //     }
    //     myHeaders.append("Content-Type", "application/json");
    
    //     let raw = JSON.stringify(param.data);
    
    //     let requestOptions:RequestType = {
    //     method: param.method,
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: 'follow'
    //     };
    //     try {
    //         Promise.race([
    //             fetch(`${env()}${param.url}`, requestOptions)
    //             .then(response => response.text())
    //             .then((result:any) => {
    //                 setDate(JSON.parse(result))
    //                 if(!result.state){
    //                     throw new BusError(result.errorCode,result.message)
    //                 }
    //             })
    //             .catch(error => {throw new Error(error)}),
    //             new Promise(function(resolve,reject){
    //                 setTimeout(()=> reject(new Error('request timeout')),3000)
    //             })])
    //     } catch (error:any) {
    //         message.destroy("load")
    //         if(error.name === ErrorEnum[0]){
    //             // navigate('/login', { state: { route: location.pathname} })
    //         }else{
    //             if(!(error.name in ErrorEnum)){
    //                 throw new Error("系统异常！")
    //             }
    //             throw error
    //         }
    //     }
    //     message.destroy("load")
    // }
    // useEffect(()=>{
    //     request();
    // },)
        
    return ""
    
}
export default useFetch

