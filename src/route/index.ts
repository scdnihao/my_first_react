import IndexPage from '../view'
import Login from '@/view/login'


const BasicRoute = [
    {
        path:'/',
        name:'/',
        element:IndexPage,
    },
    {
        path:'/index',
        name:'/index',
        element:IndexPage,
    },
    {
        path:'/login',
        name:'/login',
        element:Login,
    }
]


export default BasicRoute;