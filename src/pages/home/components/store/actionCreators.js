
import axios from 'axios'
import {fromJS } from 'immutable'
import {CHANGE_HOME_DATA,CHANGE_MORE_LIST,TOGGLE_SCROLL_TOP,} from './constants'
const changeHomeData=(result)=>({
    type:CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommend:result.recommend,
    writeList:result.writeList
})

const changeMoreList=(list,nextPage)=>({
    type:CHANGE_MORE_LIST,
    list:fromJS(list),
    nextPage //传递过来的页数 转发给reducer
})

// const writeList=()=>({
//     type:WRITE_LIST
// })
 
export const getHomeInfo=()=>{
    return dispatch=>{
        axios.get('/api/home.json').then((res)=>{
            const result=res.data;
            dispatch(changeHomeData(result))
        })
    }
}

export const getMoreList=(page)=>{
    return dispatch=>{//通过地址栏？后面的数据去向后台请求分页接口
        axios.get('/api/homeList.json?page='+page).then((res)=>{
            const result=res.data;
            dispatch(changeMoreList(result,page+1))//传递给我们的action 
        })
    }
}

export const  toggleTopShow=(show)=>({
      type:TOGGLE_SCROLL_TOP,
      show
})
