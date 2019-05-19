import React,{PureComponent} from 'react'
import { connect } from 'react-redux'
import Topic from './components/Topic'
import List from './components/list'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import {getHomeInfo,toggleTopShow} from './components/store/actionCreators'
import {
       HomeWrapper,
       HomeLeft,
       HomeRight,
       BackTop
} from './styled'
class Home extends PureComponent{//PureComponent内部自己实现了一个sholdComponentUpDate

    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                  <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/> 
                   <Topic />
                   <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
                
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();//通过生命周期的方法取调用这个方法转发action
        this.bindEvents();  //通过生命周期方法来调用
    }
    // componentWillUnMount(){//当事件执行完毕我们要对事件进行解绑,这个事件就不会影响其他事件
    //     window.removeaddEventListener('scroll',this.props.changeScrollTopShow)
    // }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
        //通过事件对象方法 addE 来调用下面的函数 来对reducer里面的数据进行更改
    }
}


const mapStateToProps=(state)=>({
    showScroll:state.getIn(['home','showScroll']) //从store中获取这个属性的值
})

const mapDispatchToProps=(dispatch)=>({//一般我们要用容器组件去进行逻辑处理
    changeHomeData(){
       dispatch(getHomeInfo())       
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 400){
            dispatch(toggleTopShow(true))  
        }else{
            dispatch(toggleTopShow(false))  
        }
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)