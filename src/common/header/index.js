import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {searchFocus,searchBlur,getList,mouseEnter,mouseLeave,changePage} from './../header/store/actionCreators'
import {loginOut} from './../../pages/login/store/actionCreators'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem ,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'


class Header extends Component{
     
    getListArea(){
        let {focused,list,page,mouseIn,mouseEnter,mouseLeave}=this.props;
        const newList=list.toJS();//这是immutable对象的一个方法 可以把immutable对象类型的数组转换为普通对象的数组
        const pageList=[];
       if(newList.length){//解决key值为undefined问题 并且 再没有获得数据的情况下就开始执行
            for(let i=(page - 1) * 10 ; i < page * 10;i++){//当前页面是1的时候开始循环
                pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
       }

        if(focused || mouseIn){//当我的focused是true的时候显示 或者 mouseIn是true的时候
            return (
                <SearchInfo
                 onMouseEnter={()=>mouseEnter()}
                 onMouseLeave={()=>mouseLeave()}
                 >
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch
                     onClick={()=>changePage()}
                     >
                     <i className="iconfont">&#xe61d;</i>
                     换一批
                     </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {    //list是一个immutable对象 但是它也提供了一个map方法
                         //可以让我们进行遍历 item是我们每一个数组的元素w
                       pageList    //当前页我们要显示列表的数目
                    }
                </SearchInfoList>
            </SearchInfo>
            )
        }else{
            return null
        }
    }
    render(){
        const {focused,searchBlur,searchFocus,getList,list,login,loginOut}=this.props;
        
        return (
            <HeaderWrapper>
                <Link to="/">  {/*路由跳转 */}
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login ?  <NavItem onClick={loginOut} className="right">退出</NavItem>:
                            <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                        >
                            <NavSearch className={focused ? 'focused':''}
                            onFocus={()=>searchFocus(getList(list))}
                            onBlur={()=>searchBlur()}
                             ></NavSearch>
                        </CSSTransition>
                       <i className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe637;</i>
                       {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                    <Button className="writting">
                    <i className="iconfont">&#xe608;</i>
                    写文章</Button>
                     </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
      focused: state.getIn(['header','focused']),
      list:state.getIn(['header','list']),//获取我们header里面的list数组
      page:state.getIn(['header','page']),  //获取当前页码
      totalPage:state.setIn(['header','totalPage']),
      mouseIn:state.getIn(['header','mouseIn']),
      login:state.getIn(['login','login'])
    }
}

// const mapDispatchToProps=(dispatch)=>{//把dispatch传到props中 让我们的方法可以获得到dispatch
//     return {
//         // handleInputFocus(){
//         //     //用来获取ajax数据的dispatch（action）
//         //    dispatch(getList());// 报错 忘记安装redux-immutable  这是创建一个异步方法，发送dispatch（action）
//         //    dispatch(searchFocus())
//         // },
//         // handleInputBlur(){
//         //    dispatch(searchBlur())
//         // }
//         handleChangePage(page,totalPage){
//             if(page < totalPage){
//                 dispatch(changePage(page+1))
//             }else{
//                 dispatch(changePage(1))
//             }
//         }
//     }
// }

export default connect(mapStateToProps,{searchFocus,searchBlur,getList,mouseEnter,mouseLeave,changePage,loginOut})(Header)
          //connect连接全局store，让