/**
 * Created by 乘龙 on 2019/2/26.
 */
import React,{Component} from 'react'
import {BrowserRouter as Router,Route ,Switch}from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
import {Button} from 'antd'
export default  class App extends Component{
    render(){
        return  (
            <Router>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/' component={Admin}/>
                </Switch>
            </Router>
        )

    }
}
