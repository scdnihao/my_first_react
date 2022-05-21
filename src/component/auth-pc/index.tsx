import React ,{useContext, useEffect}from "react";
import {  Layout, Menu, Breadcrumb, MenuProps } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined ,PieChartOutlined} from '@ant-design/icons';
import {useNavigate,Navigate,useLocation} from "react-router-dom"
import {store} from '@/store/store'
import {getSessionStorage} from "@/utils/util"
import request from "@/utils/fetch"
import UseFetch from "@/hooks/useFetch";
import allApiPath from '@/utils/allApiPath'


const { Header, Content, Sider,Footer } = Layout;
interface Props{

}

const AuthPc:React.FC<Props>=(props:Props)=>{
    // const {navigate,location} = props;
    const navigate = useNavigate();
    const location = useLocation();
    const data = UseFetch({
        url:allApiPath.GET_USER_MENU,
        data:{
            accountNumber:JSON.parse(getSessionStorage("_user")||JSON.stringify({accountNumber:''})).accountNumber
        },
        method:"POST"
    })
    console.log("MENU",data)
    const changeMenu =(value:any)=>{
        console.log(value)
    }
    useEffect(()=>{
        init()
    },[])
    const init:any=async()=>{
    //    const data= await request({
    //         url:allApiPath.GET_USER_MENU,
    //         data:{
    //             accountNumber:JSON.parse(getSessionStorage("_user")||JSON.stringify({accountNumber:''})).accountNumber
    //         },
    //         method:"POST"
    //     })
    // debugger
    }
    console.log("store",store.getState())

        return (
            <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible>
                <div className="logo" >11223344</div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onSelect={changeMenu}>
                    <Menu.SubMenu
                        title={
                            <>
                            <PieChartOutlined />
                            <span>Option 2</span>
                            </>
                        }
                        key={1}
                    >
                        <Menu.Item key={1.1}>
                        <PieChartOutlined />
                        <span>Option 1</span>
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu
                        title={
                            <>
                            <PieChartOutlined />
                            <span>Option 2</span>
                            </>
                        }
                        key={2}
                    >
                        <Menu.Item  key={2.1}>
                        <PieChartOutlined />
                        <span>Option 1</span>
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
                </Sider>
                <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    Bill is a cat.
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
            </>
        )
}
export default AuthPc