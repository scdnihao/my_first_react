import { createSlice } from "@reduxjs/toolkit";
import {RouteType} from '@/types'


const menuSlice = createSlice({
    name:"menuSlice",
    initialState:{
        menu:[],
        menuNow:""
    },
    reducers:{
        addRoutes(state:any,{payload}:any){
            state.menu=[...state.menu,...payload]
        }
    }
})

export const {addRoutes} = menuSlice.actions
export default menuSlice.reducer