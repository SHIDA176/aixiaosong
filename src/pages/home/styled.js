import styled from 'styled-components'

export const HomeWrapper=styled.div`
   overflow:hidden;
   width:960px;
   margin:0 auto;  
`;

export const HomeLeft=styled.div`
   width:625px;
   margin-left:15px;
   padding-top:30px; 
   float:left;
   .banner-img{
       width:100%;
       height:270px;
   }
`;

export const HomeRight=styled.div`
   width:280px;
   float:right;
`;

export const TopicWrapper=styled.div`
   overflow:hidden;
   padding:20px 0px 10px 0px;
   margin-left:-18px;
`;

export const TopicItem=styled.div`
     float:left;
     height:32px;
     line-height:32px;
     padding-right:10px;
     margin-left:18px;
     margin-bottom:18px;
     background:#f7f7f7;
     font-size:14px;
     border:1px solid #dcdcdc;
     border-radius:4px;
     .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
     }
`;

export const ListItem=styled.div`
     overflow:hidden;
     padding:20px 0px;
     border-bottom:1px solid #dcdcdc;
     .pic{
        width:125px;
        height:100px;
        display:block;
        float:right;
        border-radius:10px;
     }
`;

export const ListInfo=styled.div`
    width:500px;
    float:left;
    .title{
       line-height:27px;
       font-size:18px;
       font-weight:bold;
       color:#333;
    }
    .desc{
       font-size:13px;
       margin:0 0 0 8px;
       line-height:24px;
       color:#999;
    }
`;

export const RecommendWrapper=styled.div`
     width:280px;
     margin:30px 0;
     .qrcode{
        width:50px;
        height:50px;
        float:left;
        margin-right:10px;
     }
     h3,p{
        margin-top:10px;
     }
     
`;

export const RecommendItem=styled.div`
         width: 280px;
         height:50px;
         background:url(${(props)=>props.imgUrl});
         background-size:contain;
         margin:5px 0 5px 0;
`;

export const WriteWrapper=styled.div`
         width:278px;
         height:300px;
         .p1{
            float:left;
         }
         .p2{
            float:right;
         }
         .div1{
            height:50px;
         }
         .div2{
            width:260px;
            height:35px;
            background:#f7f7f7;
            color:#787878;
            border:1px solid #dcdcdc;
            border-radius:10px;
            margin:0 auto;
            margin-top:20px;
            cursor:pointer;
            p{
               text-align:center;
               padding-top:8px;
            }
         }
`; 

export const Writecontext=styled.div`
      overflow:hidden;
      display:block;
      margin-bottom:20px;
      img{
         float:left;
         width:48px;
         height:48px;
         border:1px solid #ddd;
         border-radius:20px;
      }
`;

export const WriteItem=styled.div`
color:#333;
      span{
         float:right;
         color:#090;
      }
      .p3{
         margin-left:60px;
         padding-top:5px;
         font-size:14px;
      }
      .p4{
         margin-top:15px;
         margin-left:60px;
         font-size:12px;
         color:#ddd;
      }
`;

export const LoadMore=styled.div`
     width:100%;
     height:40px;
     line-height:40px;
     margin:30px 0;
     background:#a5a5a5;
     text-align:center;
     border-radius:20px;
     color:#fff;
     cursor:pointer;
`;

export const BackTop=styled.div`
      position:fixed;
      right:30px;
      bottom:30px;
      width:60px;
      height:60px;
      line-height:60px;
      text-align:center;
      border:1px solid #ccc; 
      font-size:14px;
      cursor:pointer;
`;
