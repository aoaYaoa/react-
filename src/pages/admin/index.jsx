import React,{Component} from 'react'
import {Row,Col} from 'antd'
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

                      </div>
                      <Footer/>
                  </Col>
              </Row>

        )
    }
}