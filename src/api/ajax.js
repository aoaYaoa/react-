/**
 * Created by 乘龙 on 2019/2/27.
 */
import axios from 'axios'
import {message}from 'antd'
// export default function ajax(url,data={},method='GET') {
//    return new Promise((resolve,reject)=>{
//     let promise = null
//     if(method==='GET'){
//       promise= axios.get(url,{params:data})
//     }else{
//       promise= axios.post(url,data)
//     }
//     promise.then(reponse=>{
//       resolve(reponse.data)
//     })
//       .catch((err)=>{
//       console.log(err)
//         message.error('网络连接中断,请稍后再试')
//       })
//   })
//
//
// }
export  default  function ajax(url,data={},method='GET') {
return  new Promise ((resolve,reject)=>{
    let promise = null
    if(method==='GET'){
      promise =axios.get(url,{params:data})
    }else if(method === 'POST'){
      promise = axios.post(url,data)
    }
    promise.then((response)=>{
      resolve(response.data)
    })
      .catch((err)=>{
      console.log(err)
        message.error('网络连接中断,请稍后再试')
      })
  })

}