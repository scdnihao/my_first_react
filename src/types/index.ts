

export type RequestRedirect = "error" | "follow" | "manual";


export type InfoType = "error"|"success"|"loading"


export interface HintType{
        method:InfoType;
        time?:number;
        message:string;
        callBack?:()=>void;
        key?:string;
}