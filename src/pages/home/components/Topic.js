import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {
    TopicWrapper,
    TopicItem
} from './../styled'
class Topic extends PureComponent{
    render(){
        const {list }=this.props
        return (
            <TopicWrapper>
                   {
                      list.map((item)=>{
                           return <TopicItem key={item.get('id')}> 
                                     <img className='topic-pic' alt='' src={item.get('imgUrl')}/> {/*从我们的reducer中拿出来的数据 immutable对象*/ }
                                      {item.get('title')}
                                 </TopicItem>
                       })
                   }
            </TopicWrapper>
        )
    }
}

const mapStateToProps=(state)=> ({
    list:state.get('home').get('topicList')
})

export default connect(mapStateToProps)(Topic)