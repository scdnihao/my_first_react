import React from "react";
import { Form, Input, Button, Checkbox, Tabs} from 'antd';
import {SizeType} from 'antd/lib/config-provider/SizeContext'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less'
import {isMobile} from "@/utils/util"
import request from "@/utils/fetch"

const { TabPane } = Tabs;

interface props {
    count?:string | number
}
interface thisState{
    size?:SizeType;
}



export default class Login extends React.Component<props,thisState>{
    constructor(props:any){
        super(props)
        this.state={
             size:'large'
        }
    }

    callback(key:any){
        console.log(key);
    }
    componentDidMount (){
        (async()=>{
            let data = await request({
                url:"users.login",
                // url:"users.updatePassword",
                data:{
                    accountNumber:"root",
                    password:"1234321"
                },
                method:"POST"
            })
            console.log(data)
        })()
    }

    render(){
        return (
            <>
            <div  id="login">
                <div className={isMobile()?"":"content content_pc"}>
                <Tabs onChange={this.callback} type="card" size={this.state.size}>
                    <TabPane tab="登录" key="1">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        // onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: '请输入账号' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '请输入密码' }]}
                            >
                                <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住密码</Checkbox>
                                </Form.Item>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" block >
                                登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                    <TabPane tab="注册" key="2">
                        注册
                    </TabPane>
                </Tabs>
                </div>
            </div>
            </>
        )
    }
}