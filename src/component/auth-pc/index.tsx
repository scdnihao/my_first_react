import React ,{useContext, useEffect, useState}from "react";
import {  Layout, Menu, Breadcrumb, MenuProps } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined ,PieChartOutlined,UserOutlined} from '@ant-design/icons';
import {useNavigate,Navigate,useLocation} from "react-router-dom"
import {store} from '@/store/store'
import {getSessionStorage} from "@/utils/util"
import request from "@/utils/fetch"
import useFetch from "@/hooks/useFetch";
import allApiPath from '@/utils/allApiPath'
import { addRoutes } from "@/store/features/menuSlice";
import './index.less'


const { Header, Content, Sider,Footer } = Layout;

interface T{

}
interface Props extends T{

}
interface MenuItemProps{
    children: object[];
    isShow: number;
    menuCode: string;
    menuName: string;
    menuRoute: string;
    menuType: number;
    parentCode: string;
}

const AuthPc:React.FC<Props>=(props:Props)=>{
    // const {navigate,location} = props;
    const navigate = useNavigate();
    const location = useLocation();
    const {request} = useFetch()
    const [menu,setMenu ] = useState<Array<MenuItemProps>>([])
    const changeMenu =(value:any)=>{
        console.log(value)
    }
    useEffect(()=>{
        if(getSessionStorage("_user")){
            init()
        }
    },[getSessionStorage("_user")])
    const init:any=async()=>{
    // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDIyMDQyMTA4MDIiLCJ1c2VyTmFtZSI6InJvb3QiLCJleHAiOjE2NTMxMzc0ODQsImlhdCI6MTY1MzEzNTY4NH0.h13gWQtUcdkEGumsU2akXRF5DERz-lPiB4gQcoxvCTs
    try{
        const {data}= await request({
            url:allApiPath.GET_USER_MENU,
            data:{
                accountNumber:JSON.parse(getSessionStorage("_user")||JSON.stringify({accountNumber:''})).accountNumber
            },
            method:"POST"
        })
        if(data){
            store.dispatch(addRoutes(data));
            setMenu(data)
        }
    }catch(e){
        console.log(e)
    }
    console.log("store",store.getState().menu)
    }

        return (
            <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible>
                <div className="logo" >11223344</div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onSelect={changeMenu}>
                    {
                        (menu)&&(
                            menu.flatMap((item:MenuItemProps)=>{
                                console.log(item)
                                if(item.children){
                                    return (
                                        <Menu.SubMenu
                                            title={
                                                <>
                                                <PieChartOutlined />
                                                <span>{item.menuName}</span>
                                                </>
                                            }
                                            key={item.menuCode}
                                        >
                                            {
                                              item.children.map((value:any)=>{
                                                  return(
                                                    <Menu.Item key={value.menuRoute}>
                                                    <PieChartOutlined />
                                                    <span>{value.menuName}</span>
                                                    </Menu.Item>
                                                  )
                                              })
                                            }
                                        </Menu.SubMenu>
                                    )
                                }
                            })
                        )
                    }
                </Menu>
                </Sider>
                <Layout className="site-layout">
                <Header className="site-layout-background layout-header" style={{ padding: 0 }} >
                    <div className="user-info">
                        <img className="user-img" src={require('../../static/headPortrait.jpg').default} alt="" />
                    </div>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>陕ICP备2022004127号</Footer>
                </Layout>
            </Layout>
            </>
        )
}
export default AuthPc