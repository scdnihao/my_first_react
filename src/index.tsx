import React from 'react';
import ReactDOM from 'react-dom';
import BasicRoute from './route/index'
import { createBrowserHistory } from 'history';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Auth from '@/component/auth-component'
import 'antd/dist/antd.css';
// import '@/utils/rem'

interface props {
}


class APP extends React.Component<props> {
  constructor(props:props){
    super(props)
  }

  render(){
    const history = createBrowserHistory()
    console.log(history)
    return (
      <>
      <Auth>
        <Router>
            <Routes>
              {
                BasicRoute.map((item,index)=>{
                  return <Route key={index}path={item.path} element={<item.element/>}></Route>
                })
              }
            </Routes>
        </Router>
      </Auth>
      </>
    )
  }
}

ReactDOM.render(
    <APP/>,
  document.getElementById('root')
);
