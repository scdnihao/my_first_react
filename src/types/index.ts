import { ReactNode } from "react";


export type RequestRedirect = "error" | "follow" | "manual";


export type InfoType = "error"|"success"|"loading"
export type EquType = "mobile"|"pc"|"all"


export interface HintType{
        method:InfoType;
        time?:number;
        message:string;
        callBack?:()=>void;
        key?:string;
}

export interface RouteType {
        path:string,
        name:string,
        element:ReactNode,
        isMenu:boolean,
        mobileOrPc:EquType;
        menuName:string,
        menuKey:number,
        children?:RouteType[]
}