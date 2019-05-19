
import {fromJS} from 'immutable'
import {CHANGE_HOME_DATA,CHANGE_MORE_LIST,TOGGLE_SCROLL_TOP} from './constants'
const defaultState=fromJS({
    topicList: [],
    articleList:[],
    recommend:[],
    writeList:[],
    articlePage:1,  //更多文字功能的变量  当前页 第一页
    showScroll:false  //默认回到顶部不显示
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case CHANGE_HOME_DATA:
        return state.merge({
            topicList:fromJS(action.topicList),
            articleList:fromJS(action.articleList),
            recommend:fromJS(action.recommend),
            writeList:fromJS(action.writeList)
        })
        case CHANGE_MORE_LIST:
        return state.merge({
            'articleList':state.get('articleList').concat(action.list),
            'articlePage':action.nextPage//更多文字   分页去后台请求数据
        })
        //concat 追加的内容
        case TOGGLE_SCROLL_TOP:
        return state.set('showScroll',action.show)
        default:
        return state
    }
}