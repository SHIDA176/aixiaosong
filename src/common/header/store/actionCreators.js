import {SEARCH_FOCUS,SEARCH_BLUR,CHANGE_LIST,MOUSE_ENTER,MOUSE_LEAVE,CHANGE_PAGE} from './constants'
import axios from 'axios'
import { fromJS } from 'immutable';

const changeList=(data)=>({//data是我们传过来得ajax数据
    type:CHANGE_LIST,//定义的一个常量
    data:fromJS(data),   //因为你的数据是immutable对象  ajax返回的数据
    totalPage:Math.ceil(data.length / 10)  //后台返回的数据的长度 我们每次只要其中十个 并且取整数
})//发送这个action去找reducer


export const searchFocus=()=>({
    type:SEARCH_FOCUS
})

export const searchBlur=()=>({
    type:SEARCH_BLUR
})

export const getList = () => {//通过thunk中间件进行异步操作
    return dispatch=>{//我们要派发dispatch（action） 所以我们要有一个dispatch的参数
         axios.get('/api/headerList.json')//axios获取ajax数据 接口位置是和后台商量好的接口位置
         .then(res=>{
             const data=res.data;//获取数据，因为ajax返回数据，被response接收到一个json，点出来我们需要的数据
             dispatch(changeList(data.data));//整体的数据是data 需要的数据在data里面 我们要点出来
         }).catch(e=>{
             console.log("error")
         })
     }
}

export const mouseEnter=()=>({
    type:MOUSE_ENTER
});

export const mouseLeave=()=>({
    type:MOUSE_LEAVE
});

export const changePage=(page)=>({
    type:CHANGE_PAGE,
    page
})
