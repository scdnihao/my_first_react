

export type ErrorType = "TOKEN_ERROR"| "BUS_ERROR"
export enum ErrorEnum {
    TOKEN_ERROR,
    BUS_ERROR,
    AN_OR_PS_ERROR
}

/***
 * 
 * error
 * 
 * **/
 export class BusError extends Error{
    constructor(name:string,message:string) {  
        super()
        this.name=name
        this.message = message
    }
}