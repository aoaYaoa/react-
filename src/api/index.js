/**
 * Created by 乘龙 on 2019/2/27.
 */
import ajax from './ajax.js'

const prefix = process.env.NODE_ENV === 'development' ? '' : 'http://localhost:5000';


export const reqLogin = (username, password) => ajax(prefix + '/login', {username, password}, 'POST');
export const reqAddUser = user => ajax(prefix + '/manage/user/add', user, 'POST');