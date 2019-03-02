/**
 * Created by 乘龙 on 2019/2/27.
 */
import ajax from './ajax.js'
import jsonp from 'jsonp'

const prefix = process.env.NODE_ENV === 'development' ? '' : 'http://localhost:5000';


export const reqLogin = (username, password) => ajax(prefix + '/login', {username, password}, 'POST');
export const reqAddUser = user => ajax(prefix + '/manage/user/add', user, 'POST');
export const reqWeather = city => {
  return new Promise((resolve, reject) => {
    jsonp(
      `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`,
      {},
      (err, data) => {
        if (!err) {
          //请求成功
          resolve(data.results[0].weather_data[0])
        } else {
          //请求失败
          console.log('天气请求失败：', err);
          reject('天气请求失败~');
        }
      })
  })
}
export const reqCategories = parentId => ajax(prefix + '/manage/category/list', {parentId});
export const reqAddCategory = (parentId, categoryName) => ajax(prefix + '/manage/category/add', {parentId, categoryName}, 'POST');
export const reqUpdateCategoryName = (categoryId, categoryName) => ajax(prefix + '/manage/category/update', {categoryId, categoryName}, 'POST');
