import React,{Component} from 'react'
import Logo from './logo.png'
import './index.less'
import '../../assets/index.less'
import LoginForm from '../../components/login-form'

export default class Login extends Component{
    render(){

        return (
            <div className="login">
                <header className="header">
                    <img src={Logo} alt="logo"/>
                    <h1>React后台管理项目</h1>
                </header>
                <section>
                    <div className="register">
                        <h2>用户登录</h2>
                        <LoginForm/>

                    </div>
                </section>
            </div>
        )
    }
}