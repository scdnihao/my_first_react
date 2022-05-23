import { useCallback}from "react"
import {useNavigate,useLocation} from "react-router-dom"
import {RequestRedirect} from '@/types'
import {getLocalStorage,env,handHint,closeHint} from "@/utils/util"
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


 export default function useFetch  (){

    const navigate = useNavigate();
    const location = useLocation();
    const request = useCallback( async(param:RequestParamType)=>{
        let myHeaders = new Headers();
        handHint({
            key:'load',
            method:'loading',
            message:"",
        })
        if(getLocalStorage("_token")){
            myHeaders.append("Authorization",getLocalStorage("_token")||"" );
        }else{
            navigate('/login', { state: { route: location.pathname} })
            return 
        }
        myHeaders.append("Content-Type", "application/json");
    
        let raw = JSON.stringify(param.data);
    
        let requestOptions:RequestType = {
            method: param.method,
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        return await Promise.race([
                fetch(`${env()}${param.url}`, requestOptions)
                .then(response => response.text())
                .then((result:any) => {
                    let json = JSON.parse(result)
                    console.log(json)
                    if(!json.state){
                        throw new BusError(json.errorCode,json.message)
                    }
                    closeHint("load")
                    return json
                }).catch(error => {
                    closeHint("load")
                if(error.name === ErrorEnum[0]){
                    handHint({
                        method:"error",
                        message:"用户信息已过期，请从新登录",
                        time:2,
                        callBack:()=>{
                            localStorage.removeItem("_token");
                            sessionStorage.removeItem("_user");
                            navigate('/login', { state: { route: location.pathname} })
                        },
                    })
                }else{
                    if(!(error.name in ErrorEnum)){
                        handHint({
                            method:"error",
                            message:"系统异常！",
                        })
                    }
                }}),
                new Promise(function(resolve,reject){
                    setTimeout(
                        ()=> reject(new Error('请求超时'))
                    ,3000)
                })]).catch(err=>{
                    handHint({
                        method:"error",
                        message:err.message,
                    })
                })
    },[])
        
    return {
        request
    }
    
}

