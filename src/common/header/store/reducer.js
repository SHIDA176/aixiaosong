
import {SEARCH_FOCUS,SEARCH_BLUR,CHANGE_LIST,MOUSE_ENTER,MOUSE_LEAVE,CHANGE_PAGE} from './constants'
import {fromJS} from 'immutable'
const defaultState=fromJS({
    focused:false,
    mouseIn:false,//用来控制当失去焦点 但是我们的鼠标还在菜单中 不让菜单消失
    list:[], //用来保存ajax返回的数据
    page:1, //你切换页面的时候切换到最后又会返回第一页 用来控制最后会再返回第一页
    totalPage:1  //这是总体一共有多少页
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case SEARCH_FOCUS:
        return state.set('focused',true)
        case SEARCH_BLUR:
        return state.set('focused',false)
        case CHANGE_LIST:
        return state.merge({//merge可以同时改变多个数据
            list:action.data,
            totalPage:action.totalPage
        })
        // .set('list',action.data) //因为list是一个immutable对象 要用set方法取数据 thunk中间件发送的action 里面带有data数据 我们要需要这个数据必须从action中点出来
        // .set('totalPage',action.totalPage)   //获取action带来的数组
        case MOUSE_ENTER:
        return state.set('mouseIn',true)
        case MOUSE_LEAVE:
        return state.set('mouseIn',false);
        case CHANGE_PAGE:
        return state.set('page',2)
        default:
        return state
    }
}