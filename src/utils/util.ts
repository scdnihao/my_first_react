


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
export const setToken=(name:string,token:string)=>{
    try{
        localStorage.setItem(name,token)
    }catch(e){
        console.log(e)
    }
}


/***
 * 
 * 获取localStorage
 * 
 ***/

export const getToken=(name:string)=>{
    let token=null
    try{
        token=localStorage.getItem(name)
    }catch(e){
        return false;
    }
    return token
}