import {useRoutes} from "react-router-dom";
import React, { lazy ,Suspense} from 'react'
import Home from '@/view/pc/home'




 export const routes = [
  // {
  //   path: '/login',
  //   auth:false,
  //   element:lazy(() => import('@/view/login'))
  // },
  {
    path: '/home',
    auth:true,
    element:Home,
    // children: [
    //   { 
    //     path: '/Portal/Home',
    //     auth:true,
    //     element:lazy(() => import('@/view/pc/home'))
    //   },
    // ]
  },
//   { 
//     path: '*',
//     auth:false,
//     component:lazy(() => import('../page/error/NotFound'))
//   }
]
 
//根据路径获取路由
const checkAuth = (routers:any, path:String)=>{
  for (const data of routers) {
    if (data.path==path) return data
    if (data.children) {
      const res:any = checkAuth(data.children, path)
      if (res) return res
    }
  }
  return null
}
 
// 路由处理方式
const generateRouter = (routers:any) => {
  return routers.map((item:any) => {
    if (item.children) {
      item.children = generateRouter(item.children)
    }
    item.element = <Suspense fallback={
      <div>加载中...</div>
    }>
      {/* 把懒加载的异步路由变成组件装载进去 */}
      <item.component />
    </Suspense>
    return item
  })
}
 
const Router = () => useRoutes(routes)
const checkRouterAuth = (path:String)=>{
  let auth = null
  auth = checkAuth(routes,path)
  return auth
}
export{ Router,checkRouterAuth}