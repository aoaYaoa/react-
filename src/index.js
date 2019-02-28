/**
 * Created by 乘龙 on 2019/2/26.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import  MemonryUntils from './utils/memonryUntils'
import {getItem } from './utils/stroageUntils';
const user = getItem();
if (user && user._id) {
  MemonryUntils.user = user;
}
ReactDOM.render(<App/>,document.getElementById('root'))
