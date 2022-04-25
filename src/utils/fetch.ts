import {RequestRedirect} from '@/types'
import { createBrowserHistory } from 'history';
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

const request=async (param:RequestParamType)=>{
    let history = createBrowserHistory();
    let myHeaders = new Headers();
    handHint({
        key:'load',
        method:'loading',
        message:"",
    })
    if(getLocalStorage("_token")){
        myHeaders.append("Authorization",getLocalStorage("_token")||"" );
    }else{
        history.push("/login")
    }
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(param.data);

    let requestOptions:RequestType = {
    method: param.method,
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    let result
    try {
        result= await Promise.race([
            fetch(`${env()}${param.url}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                return JSON.parse(result)
            })
            .catch(error => {throw new Error(error)}),
            new Promise(function(resolve,reject){
                setTimeout(()=> reject(new Error('request timeout')),3000)
            })])
            if(!result.state){
                throw new BusError(result.errorCode,result.message)
            }
    } catch (error:any) {
        message.destroy("load")
        if(error.name === ErrorEnum[0]){
            history.push("/login")
        }else{
            if(!(error.name in ErrorEnum)){
                throw new Error("系统异常！")
            }
            // console.log()
            throw error
        }
    }
    message.destroy("load")
    return result
}
export default request;