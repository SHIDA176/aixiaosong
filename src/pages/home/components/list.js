import React,{PureComponent} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {getMoreList} from './store/actionCreators'
import {
    ListItem,
    ListInfo,
    LoadMore
} from './../styled'
class List extends PureComponent{
    render(){
        const {article,getMoreList,page}=this.props;
        return (
            <div> 
               {
                   article.map((item,index)=>{
                       return (   
                           <Link key={index} to={"/detail/" + item.get('id')}>
                       <ListItem>
                           <img className="pic" src="//upload-images.jianshu.io/upload_images/16793090-69517d842eab74fa.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt="" />
                                <ListInfo key={index}>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">
                                {item.get('desc')}
                                </p>
                                </ListInfo>
                        </ListItem>
                        </Link>
                       )
                   })
               }
               <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>           
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
     article:state.get('home').get('articleList'),
     page:state.getIn(['home','articlePage'])
})

const mapDispatchToProps=(dispatch)=>({
    getMoreList(page) {
       dispatch(getMoreList(page))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(List)