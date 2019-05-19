import axios from 'axios'
import {CHANGE_DETAIL} from './constants'


const changeDetail=(title,content)=>({
      type:CHANGE_DETAIL,
      title,
      content 
})

export const getDetail=(id)=>{
    return dispatch=>{
        axios.get('/api/detail.json?id='+id).then((res)=>{
            const result=res.data.data;
            dispatch(changeDetail(result.title,result.content))
        })
    }
}