import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import {
    RecommendWrapper,
    RecommendItem
} from './../styled'
class Recommend extends PureComponent{
    render(){
        const {commend}=this.props;
        return (
            <div>
               <RecommendWrapper>
                {
                    commend.map((item)=>{
                        return <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
                    })
                }
              
              <img className="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
               <h3>下载简书手机App</h3>
               <p>随时随地发现和创作内容</p>
            </RecommendWrapper>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    commend:state.getIn(['home','recommend'])
})

export default connect(mapStateToProps)(Recommend)