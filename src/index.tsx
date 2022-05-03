import React ,{Suspense ,lazy}from 'react';
import ReactDOM from 'react-dom';
import {store} from './store/store'
import {routes} from "./route"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Auth from '@/component/auth-component'
import {Provider} from 'react-redux'
import 'antd/dist/antd.css';
import {useNavigate,Navigate,useLocation} from "react-router-dom"
// import '@/utils/rem'
import Login from '@/view/login'
import Home from '@/view/pc/home'


const App:React.FC=()=>{
  const navigate=useNavigate();
  const location=useLocation()

    return (
      <>
      <Provider store={store}>
          <Routes>
            <Route key="Login" path='/login/' element={<Login/>}></Route>
          </Routes>
          <Auth>
            <Routes>
              {
                routes.flatMap((item:any,index:any)=>{
                  return <Route key={index} path={item.path} element={<item.element/>}></Route>
                })
              }
            </Routes>
          </Auth>
      </Provider>
      </>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
  document.getElementById('root')
);
