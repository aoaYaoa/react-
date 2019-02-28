import React,{Component} from 'react'
import Logo from '../../assets/images/logo.png'
import './index.less'
import '../../assets/index.less'
import LoginForm from '../../components/login-form'
import {reqLogin} from '../../api'
import {setItem} from '../../utils/stroageUntils';
import MemonryUntils from '../../utils/memonryUntils'
export default class Login extends Component{
  state={
    errMsg:''
  }
  //登陆方法
  login = async (username, password) => {
    //请求登陆
    const result = await reqLogin(username, password);
    console.log(result)
    if (result.status === 0) {
      //用户登陆成功
      //保存用户信息
      setItem(result.data);
      //在内存中保存一份
      MemonryUntils.user = result.data;
      //跳转到admin页面
      this.props.history.replace('/');
    } else {
      //用户登陆失败
      //提示错误信息
      this.setState({
        errMsg:result.msg
      })
    }
  }

  render(){
     const {errMsg} = this.state;
     const height = errMsg ? 30 : 0;
        return (

            <div className="login">
                <header className="header">
                    <img src={Logo} alt="logo"/>
                    <h1>React后台管理项目</h1>
                </header>
                <section>
                    <div className="register">
                      <div className='err-msg' style={{height}}>{errMsg}</div>
                        <h2>用户登录</h2>
                        <LoginForm login={this.login}/>

                    </div>
                </section>
            </div>
        )
    }
}