import React, {Component} from 'react'
import {NavLink,withRouter} from 'react-router-dom'
import menuList from '../../config/menu-config'
import './index.less'
import {Menu, Icon}from 'antd'
import Logo from '../../assets/images/logo.png'
 class LeftNav extends Component {
   componentWillMount() {
    this.menu= this.createMenu(menuList)
   }

   //判断是否有子菜单

   createMenu = (menuList) => {
     return menuList.map(item => {
       const Item = Menu.Item
       const SubMenu = Menu.SubMenu;
       if (item.children) {
         const {pathname} = this.props.location;
         //找是否有与children中匹配的pathname
         const result = item.children.find(item => item.key === pathname)
         if (result) {
           //children中有与pathname匹配路径，记录item.key
           this.openKey = item.key;
         }
         return <SubMenu key={item.key} title={<span><Icon type={item.icon}/><span>{item.title}</span></span>}>
           {
             this.createMenu(item.children)
           }
         </SubMenu>
       } else {
         return <Item key={item.key}>
           <NavLink to={item.key}>
             <Icon type={item.icon}/>
             <span>{item.title}</span>
           </NavLink>
         </Item>
       }
     })
   }

   render() {
     const Item = Menu.Item
     const SubMenu = Menu.SubMenu;
     const {pathname} = this.props.location
     return (
       <div className="leftNav">
         <header >
           <NavLink to="/home" className='nav'>
             <img src={Logo} alt="logo"/>
             <h2>尚硅谷后台</h2>
           </NavLink>
         </header>
         <Menu mode="inline" theme="dark" selectedKeys={[pathname]} defaultOpenKeys={[this.openKey]}>
           {
             this.menu
           }
         </Menu>
       </div>
     )
   }
 }
export default withRouter(LeftNav);
