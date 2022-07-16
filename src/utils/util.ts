import {message} from 'antd';
import {HintType} from "@/types"



/**
 * 判断移动端或pc
 * 
 * **/
export const isMobile = () => {
    return /(iPhone|iPad|iPod|iOS|Android|Linux armv8l|Linux armv7l|Linux aarch64)/i.test(navigator.platform);
};



/***
 * 存储localStorage
 * 
 * ***/
export const setLocalStorage=(name:string,value:string)=>{
    try{
        localStorage.setItem(name,value)
    }catch(e){
        console.log(e)
    }
}


/***
 * 
 * 获取localStorage
 * 
 ***/

export const getLocalStorage=(name:string)=>{
    let localValue=null
    try{
        localValue=localStorage.getItem(name)
    }catch(e){
        return false;
    }
    return localValue
}

/**
 * 
 * 存储sessionStorage
 * 
 * **/

export const setSessionStorage =(name:string,value:string)=>{
    try{
        sessionStorage.setItem(name,value)
    }catch(e){
        console.log(e)
    }
}

/***
 * 
 * 获取sessionStorage
 * 
 * **/

export const getSessionStorage =(name:string)=>{
    let sessionValue
    try{
        sessionValue=sessionStorage.getItem(name);
    }catch(e){
        console.log(e)
    }
    return sessionValue
}


/***
 * 
 * 环境判断
 * 
 * 
 * **/
export const env=()=>{
    let url =window.location.href
    // if(url.indexOf("http://localhost/")){
    //     return "http://localhost:8080/"
    // }
    return "http://first-thebestwebsite.com/server/"
}

/***
 * 
 * 根据不同环境提示框
 * 
 * ****/

export const handHint=(param:HintType)=>{

    if(isMobile()){

    }else{
        switch(param.method){
            case 'error':
                message.error(param.message,param.time||3,param.callBack)
                break;
            case 'success':
                message.success(param.message,param.time||3,param.callBack)
                break;
            case 'loading':
                message.loading({
                    content:'加载中',
                    key:param.key,
                    duration:0
                })
                break;
        }
    }
}

/**
 * 根据环境隐藏弹框
 * ***/

export const closeHint =(key:string)=>{
    if(isMobile()){

    }else{
        message.destroy(key);
    }
}