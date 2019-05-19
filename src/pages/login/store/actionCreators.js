import axios from 'axios'
import {CHANGE_LOGIN,LOGINOUT} from './constants'


const changeLogin=()=>({
    type:CHANGE_LOGIN,
    value:true
})

export const login=(account,password)=>{
    return dispatch=>{
      axios.get('/api/login.json?account='+account + '&password'+password)
      .then((res)=>{
          const result = res.data.data;
          if(result){
            dispatch(changeLogin())
          }else{
              alert("账号密码错误")
          }
      })
    }
}

export const loginOut=()=>({
     type:LOGINOUT,
     value:false
})