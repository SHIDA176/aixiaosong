import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class Write extends PureComponent{
    render(){
        let { loginStates } = this.props;
        if(loginStates){
            return (
               <div>写文章页面</div>
            )
        }else{
            return <Redirect to="/login" />
        }
        
    }
}

const mapStateToProps=(state)=>({
    loginStates:state.getIn(['login','login'])
})


export default connect(mapStateToProps,null)(Write)