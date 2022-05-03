import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counterSlice'
 
// 2.应用thunkMiddleware中间件
// 在创建store之前, 通过applyMiddleware方法, 告诉Redux需要应用哪些中间件



export const store = configureStore({
    reducer: {
        counter:counterSlice
    },
})