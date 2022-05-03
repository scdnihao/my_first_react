import React ,{useContext}from "react";
import {  Layout, Menu, Breadcrumb, MenuProps } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined ,PieChartOutlined} from '@ant-design/icons';
import {useNavigate,Navigate,useLocation} from "react-router-dom"


const { Header, Content, Sider,Footer } = Layout;
interface Props{

}

const AuthPc:React.FC<Props>=(props:Props)=>{
    // const {navigate,location} = props;
    const navigate = useNavigate();
    const location = useLocation();

        return (
            <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible>
                <div className="logo" >11223344</div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.SubMenu
                        title={
                            <>
                            <PieChartOutlined />
                            <span>Option 2</span>
                            </>
                        }
                        key={1}
                    >
                        <Menu.Item>
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
                        <Menu.Item>
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
                        key={3}
                    >
                        <Menu.Item>
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