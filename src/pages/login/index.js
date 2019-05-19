import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {LoginWrapper,LoginBox,Input,Button} from './style'
import {login} from './store/actionCreators'
class Login extends PureComponent{
    render(){
        let { loginStates } = this.props;
        if(!loginStates){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="请输入用户名" innerRef={(input)=>{this.account=input}}/>{/*想要获取输入的内容要通过ref 
                        把这个标记的DOM存在this.account中  innerRef 是styled-components提供的方法 获取DOM的方法
                        */}
                        <Input type="password" placeholder="请输入密码" innerRef={(input)=>{this.password=input}}/>
                        <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/" />
        }
        
    }
}

const mapStateToProps=(state)=>({
    loginStates:state.getIn(['login','login'])
})

const mapDispatchToProps=(dispatch)=>({
    login(accountElem,passwordElem){
      dispatch(login(accountElem,passwordElem))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)