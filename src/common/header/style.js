import styled from 'styled-components'
import logoPic from './../../statics/1.png'
export const HeaderWrapper=styled.div`
    z-index:1;
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`;

export const Logo=styled.div`
    display:block;
    position:absolute;
    left:0;
    top:0;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain; 
`;

export const Nav=styled.div`
    width:960px;
    padding-right:70px;
    box-sizing:border-box;
    height:100%;
    margin:0 auto;
`

export const NavItem=styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;

export const SearchWrapper=styled.div`
    position:relative;
    float:left;
    .zoom{
        position:absolute;
        right:6px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center; 
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`;

export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
   width:160px;
   height:38px;
   margin-top:9px;
   margin-left:20px;
   padding:0 35px 0 20px;
   box-sizing:border-box;
   border:none;
   outline:none;
   border-radius:19px;
   background:#eee;
   font-size:14px;
   color:#666;
   &::placeholder{
       color:#999;
   }
   &.focused{
       width:240px;
   }
   &.slide-enter{
    width:160px;
    transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px; 
    }
`;

export const SearchInfo=styled.div`
     position:absolute;
     left:0;
     top:56px;
     width:240px;
     padding:0 20px;
     box-shadow:0 0 8px rgba(0,0,0,.2);
     background:#fff;
`;

export const SearchInfoTitle=styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;

export const SearchInfoSwitch=styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;

`;

export const SearchInfoItem=styled.a`
    font-size:12px;
    float:left;
    display:block;
    margin-right:10px;
    margin-bottom:15px;
    padding:0 5px;
    line-height:20px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:2px;
`;

export const SearchInfoList=styled.div`
    overflow:hidden;
`;

export const Addition=styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;

export const Button=styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`;
