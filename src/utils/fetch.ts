import {RequestRedirect} from '@/types'
import { createBrowserHistory } from 'history';
import {setToken,getToken} from "@/utils/util"
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
    if(getToken("_token")){
        myHeaders.append("Authorization",getToken("_token")||"" );
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
            fetch(`http://first-thebestwebsite.com/server/${param.url}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                // if(JSON.parse(result).authToken != undefined && JSON.parse(result).authToken!=null){
                //     setToken("_token",JSON.parse(result).authToken);
                // }
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
        if(error.name ===ErrorEnum[0]){
            history.push("/login")
        }else{
            throw error
        }
    }
    return result
}
export default request;