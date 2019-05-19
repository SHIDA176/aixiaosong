import React,{PureComponent} from 'react'
import { connect } from 'react-redux'
import {
    WriteWrapper,
    Writecontext,
    WriteItem
} from './../styled'
class Writer extends PureComponent{
    render(){
        const {writeList}=this.props;
        return (
            <WriteWrapper>
                  <div className="div1">
                      <p className="p1">推荐作者</p>
                      <p className="p2">换一批</p>
                  </div>
                  {
                    writeList.map((item,index)=>{
                        return (
                            <Writecontext key={index}>
                                   <img alt="" src={item.get('imgUrl')}/>
                                <WriteItem>
                                    <span>+关注</span><p className="p3">{item.get('writeName')}</p>
                                    <p className="p4">写了113.8k字 · 22.5k喜欢</p>
                               </WriteItem>
                            </Writecontext>
                        )
                    })
                  }
                  <div className="div2">
                      <p>查看更多></p>
                  </div>
            </WriteWrapper>
        )
    }
}

const mapStateToProps=(state)=>({
    writeList:state.getIn(['home','writeList'])
})
// const mapDispatchToProps=(dispatch)=>({
//     changeHomeData(action){
//           dispatch(action)
//     }
// })
export default connect(mapStateToProps)(Writer)