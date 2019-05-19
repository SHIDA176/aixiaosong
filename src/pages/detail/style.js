import styled from 'styled-components'

export const DetailWrapper=styled.div`
   overflow:hidden;
   width:620px;
   margin:0 auto;  
   padding-bottom:10px;
`;

export const Header=styled.div`
   margin:50px 0 20px 0px;
   line-height:44px;
   font-size:34px;
   color:#333;
   font-weight:bold; 
   text-align:center;
`;

export const DetailTitle=styled.div`
    overflow:hidden;
    position:relative;
    width:620px;
    margin:50px 0px;
    img{
        width:48px;
        height:48px;
        border-radius:50px;
    }
`;

export const DetailItem=styled.div`
    position:absolute;
    left:60px;
    top:0;
    img{
        width:20px;
        height:20px;
        margin:5px 0px -5px 5px;

    }
    b{
        width:52px;
        height:18px;
        background:#090;
        color:#fff;
        border-radius:15px;
        font-size:12px;
        padding:0 5px;
        margin-left:5px;
    }
    ul{
        list-style-type:none;
    }
    li{
        float:left;
        margin:15px 10px 0px 5px;
        font-size:12px;
        color:#969696;
    }
`;

export const DetailUl=styled.div`

`;

// 内容组件
export const Content=styled.div`
    color:#2f2f2f;
    img{
        width:100%;
        height:350px;
        margin-bottom:20px;
    }
    p{
        margin:20px 0;
        font-size:16px;
        line-height:30px; 
    }
`;