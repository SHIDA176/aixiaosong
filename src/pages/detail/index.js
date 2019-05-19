import React,{PureComponent} from 'react'
import { connect } from 'react-redux'
import {getDetail}  from './store/actionCreators'
import {
    DetailWrapper,
    Header,
    Content,
    DetailTitle,
    DetailItem
} from './style'
class Detail extends PureComponent{
    render(){
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <DetailTitle>
                <img src="//upload.jianshu.io/users/upload_avatars/4229114/c413cdd4-cf5a-48c9-b593-28f01e01bb50.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="" />
                        <DetailItem>
                            <span>Sin信仰</span>
                            <img className="badge-icon" data-toggle="tooltip" title="" src="//cdn2.jianshu.io/assets/badges/excellent-34cdda4de26ee9910f190239ffecf886c24045136468fa26f041b0156a143cd9.png" alt="" data-original-title="日更达人" />
                            <b>+关注</b>
                            <ul>
                                <li>4.2</li>
                                <li>2019.03.05 09:47</li>
                                <li>字数 1003</li>
                                <li>阅读 790</li>
                                <li>评论 2</li>
                                <li>喜欢 15</li>
                            </ul>
                        </DetailItem>
                </DetailTitle>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}} />
            </DetailWrapper>    
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapStateToProps=(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})

const mapDispatchToProps=(dispatch)=>({
    getDetail(id){
        dispatch(getDetail(id))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Detail)