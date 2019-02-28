import React,{Component} from 'react'
import {Row,Col,Modal,message} from 'antd'
import './index.less'
import {removeItem} from '../../utils/stroageUntils'
import MemonryUntils from '../../utils/memonryUntils'
import menuList from '../../config/menu-config';
import {withRouter} from 'react-router-dom'
import dayjs from 'dayjs'
import {reqWeather} from '../../api';
 class Header extends Component{
  state={
    sysTime:dayjs().format('YYYY-MM-DD HH:mm:ss'),
    dayPictureUrl: 'http://api.map.baidu.com/images/weather/day/qing.png',
    weather: '晴11'
  }
   componentDidMount () {
     this.updateTime();
     this.getWeather();
   }

   //更新时间
   updateTime = () => {
     this.intervalId = setInterval(() => {
       this.setState({
         sysTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
       })
     }, 1000)
   }

   componentWillUnmount(){
    clearInterval(this.timer)
  }
   getWeather = () => {
     reqWeather('北京')
       .then(res => {
         this.setState({
           dayPictureUrl: res.dayPictureUrl,
           weather: res.weather
         })
       })
       .catch(err => {
         message.error(err);
       })
   }

   logout=()=>{
    Modal.confirm({
      title: '您确认要退出登录吗?',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        //点击确认时触发回调函数
        //清除用户信息（localStorage 内存）
        removeItem();
        MemonryUntils.user = {};
        //返回到登录页面
        this.props.history.replace('/login');
      },
    });
  };
   getTitle = menu => {
     const {pathname} = this.props.location;

     for (let i = 0; i < menu.length; i++) {
       let item = menu[i];
       if (item.children) {
         /*for (let j = 0; j < item.children.length; j++) {
          let cItem = item.children[j];
          if (cItem.key === pathname) {
          return cItem.title;
          }

          }*/
         //递归去找是否有匹配的title，如果有才返回
         const title = this.getTitle(item.children);
         if (title) {
           return title;
         }
       } else {
         if (item.key === pathname) {
           return item.title;
         }
       }
     }
   }
  render(){
    const {username} = MemonryUntils.user
    const title = this.getTitle(menuList);
    const {sysTime,dayPictureUrl, weather}=this.state
    return(
      <div className='header'>
        <Row className='header-top'>
          <span>欢迎, {username}</span>
          <a href="javascript:void(0);" onClick={this.logout}>退出</a>
        </Row>
        <Row className='header-bottom'>
          <Col span={5} className='header-bottom-left'>{title}</Col>
          <Col span={15} className='header-bottom-right'>{sysTime}
            <span>{sysTime}</span>
            <img src={dayPictureUrl} alt="天气"/>
            <span>{weather}</span>
          </Col>
        </Row>
      </div>
    )
  }
}
export default withRouter(Header)