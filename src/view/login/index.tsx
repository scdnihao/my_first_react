import React from "react";
import { Form, Input, Button, Checkbox, Tabs, FormInstance} from 'antd';
import {SizeType} from 'antd/lib/config-provider/SizeContext'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less'
import {getLocalStorage, setLocalStorage,setSessionStorage} from "@/utils/util"
import {isMobile,handHint} from "@/utils/util"
import request from "@/utils/fetch"
// import {ErrorEnum} from "@/utils/Error"

const { TabPane } = Tabs;

interface props {
    count?:string | number;
}
interface thisState{
    size?:SizeType;
    loginInitvalues?:object|undefined;
}



export default class Login extends React.Component<props,thisState>{
    formRef = React.createRef<FormInstance>();
    rules={
        accountNumber:[{ required: true, message: '请输入账号' },
        { pattern: /^[a-zA-Z0-9]{4,12}$/ ,message:"账号4到12位字母或数字"}],
        password:[{ required: true, message: '请输入密码' },
        { pattern: /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/ ,message:"密码长度6-12，特殊符号加大写字母小写字母加数字"},
        ]
    }
    constructor(props:props){
        super(props)
        let checkedRememberValue = getLocalStorage("_this_us")
        let value = {
            accountNumber:"",
            password:"",
            remember:false
        }
        if(typeof checkedRememberValue != undefined && checkedRememberValue!=null&&checkedRememberValue){
            value={
                ...value,
                ...JSON.parse(checkedRememberValue)
            }
        }
        this.state={
             size:'large',
            loginInitvalues:value
        }
    }

    tabsChange=(key:string)=>{
        if(key==="login"){
            this.formRef.current?.resetFields()
        }
    }
    //登录提交
    loginOnFinish = async(val:any)=>{
        try{
            const data = await request({
                url:"users.login",
                data:val,
                method:"POST"
            })
            if(data.authToken !== undefined && data.authToken!==null){
                setLocalStorage("_token",data.authToken);
            }
            if(data.data !== undefined && data.data!==null){
                setSessionStorage("_user",data.data)
            }
            if(val.remember){
                setLocalStorage("_this_us",JSON.stringify(val))
            }else{
                localStorage.removeItem("_this_us")
            }
            handHint({
                message:"登录成功",
                method:"success",
            })
        }catch(e:any){
            handHint({
                message:e.message,
                method:"error",
            })
        }
    }
    //注册提交
    regOnFinish= async(val:any)=>{
        console.log(val)
        try{
            const data = await request({
                url:"users.reg",
                data:val,
                method:"POST"
            })
            if(data.state){
                handHint({
                    message:"注册成功",
                    method:"success",
                })
                this.formRef.current?.resetFields()
            }
        }catch(e:any){
            handHint({
                message:e.message,
                method:"error",
            })
        }

    }

    render(){
        return (
            <>
            <div  id="login">
                <div className={isMobile()?"":"content content_pc"}>
                <Tabs onChange={this.tabsChange} type="card" size={this.state.size}>
                    <TabPane tab="登录" key="login">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={this.state.loginInitvalues}
                        onFinish={this.loginOnFinish}
                        >
                            <Form.Item
                                name="accountNumber"
                                rules={this.rules.accountNumber}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={this.rules.password}
                            >
                                <Input.Password 
                                 prefix={<LockOutlined className="site-form-item-icon" />}
                                 type="password"
                                 placeholder="密码"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住密码</Checkbox>
                                </Form.Item>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" block htmlType="submit"  >
                                登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </TabPane>
                    <TabPane tab="注册" key="reg">
                    <Form
                        labelCol={{ span: 5 }}
                        name="register"
                        ref={this.formRef}
                        onFinish={this.regOnFinish}
                        initialValues={{
                            accountNumber: "",
                            email: '',
                            password:"",
                            username:""
                        }}
                        scrollToFirstError
                        >
                        <Form.Item
                        name="accountNumber"
                        label="账号"
                        rules={this.rules.accountNumber}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="邮箱"
                            rules={[
                            {
                                type: 'email',
                                message: '请输入合法邮箱号码',
                            },
                            {
                                required: true,
                                message: '请输入邮箱号码',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="密码"
                            rules={this.rules.password}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="确认密码"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                            {
                                required: true,
                                message: '请再一次输入密码！',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('两次密码不一致!'));
                                },
                            }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            label="用户名"
                            tooltip="用户名非账号"
                            rules={[{ required: true, message: '请输入用户名', whitespace: true }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" block htmlType="submit"  >
                            注册
                            </Button>
                        </Form.Item>
                        </Form>
                    </TabPane>
                </Tabs>
                </div>
            </div>
            </>
        )
    }
}