import React,{Component} from 'react'
import {Row,Col} from 'antd'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from '../home'
import Category from '../category'
import Product from '../product'

import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './index.less'
export default class Amdin extends Component{
    render(){
        return (

              <Row className='main'>
                  <Col span={4} className='left'>
                      <LeftNav/>
                  </Col>
                  <Col span={20} className='conent'>
                      <Header/>
                      <div className="conent">
                        <Switch>
                          <Route path={'/home'} component={Home}/>
                          <Route path={'/category'} component={Category}/>
                          <Route path={'/product'} component={Product}/>
                          <Redirect to='/home'/>
                        </Switch>
                      </div>
                      <Footer/>
                  </Col>
              </Row>

        )
    }
}