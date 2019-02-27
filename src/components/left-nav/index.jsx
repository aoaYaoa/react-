import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.less'
import {Menu, Icon}from 'antd'
import Logo from '../../assets/images/logo.png'
export default class LeftNav extends Component {
  render() {
    const Item = Menu.Item
    const SubMenu = Menu.SubMenu;
    return (
      <div className="leftNav">
        <header >
          <NavLink to="/home" className='nav'>
            <img src={Logo} alt="logo"/>
            <h2>尚硅谷后台</h2>
          </NavLink>

        </header>
        <Menu mode="inline" theme="dark">
          <Item>
            <NavLink to="/home">
              <Icon type="home"/>
              <span>首页</span>
            </NavLink>
          </Item>
          <SubMenu title={<span><Icon type="appstore"/><span>商品</span></span>}>

            <Item >
              <NavLink to="category">
                <Icon type="pic-center"/>
                <span> 品类管理</span>
              </NavLink>
            </Item>


            <Item >
              <NavLink to="/product">
                <Icon type="pic-left"/>
                <span>商品分类</span>
              </NavLink>
            </Item>


          </SubMenu>
        </Menu>
      </div>
    )
  }
}