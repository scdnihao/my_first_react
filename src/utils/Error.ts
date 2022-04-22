

export type ErrorType = "TOKEN_ERROR"| "BUS_ERROR"
export enum ErrorEnum {
    TOKEN_ERROR,
    BUS_ERROR
}

/***
 * 
 * error
 * 
 * **/
export class BusError extends Error{
    constructor(name:ErrorType,message:string) {  
        super()
        this.name=name
        this.message = message
      }
}