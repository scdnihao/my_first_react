import { createSlice } from "@reduxjs/toolkit";
import {RouteType} from '@/types'


const menuSlice = createSlice({
    name:"menuSlice",
    initialState:{
        menu:[
            {
                menuCode:"home",
                menuName:"主页",
                menuRoute:"/home",
                isShow:false,
                menuType:"PC",
                parentCode:"",
                children:[

                ]
            }
        ],
        menuNow:""
    },
    reducers:{
        addRoutes(state,{payload}){
        }
    }
})

export const {addRoutes} = menuSlice.actions
export default menuSlice.reducer