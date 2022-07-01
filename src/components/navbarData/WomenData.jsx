import Styled from "styled-components";
import React from "react";
import {SaleData} from "./Sale";

const StyledDiv = Styled.div`
      display : flex;
      height : 50px;
      gap : 5px;
      align-items : center;
      font-family : futura-pt,sans-serif;
      font-size : 13px;
      color : white;
      margin-left : 60px;

    

      &>div{
         cursor : pointer;
         padding: 8px;
      }
      &>div:hover{
        padding: 17px 8px;
         background : white;
         color : black;
        
     }
      &>div.active{
        padding : 15px 20px;
        border : 1px solid skyblue;
        
    }

    &>div:nth-child(1):hover>div ,  &>div:nth-child(13):hover>div{
        padding : 0px 15px;
        background : white;
        color : black;
    }
      
`
const ParentParaDiv = Styled.div`
     &.activeunique{
        border : 1px solid skyblue;
        padding : 0px 15px;
     }

`

const ParaDiv = Styled.div`
transform: skew(-20deg);
background: #D01345;
dispay : flex;
padding : 17px 15px;
align-items : center;
justify-content : center;

`

export const WomenData = () => {
    const [id , setId] = React.useState("")
      const [state, setState] = React.useState({  
        activeData : [],
        data : [
        {
          id : 1,
          type : "Sale"
        } , 
        {
            id : 2,
            type : "New In"
        } , 
        {
            id : 3,
           type :  "Clothing"
        } , 

        {
            id : 5,
           type : "Dresses"
       }, 
        {
             id : 6,
            type : "Shoes"
        }, 
        {
             id : 5,
            type : "SportsWear"
         } , 
         {
             id : 7,
            type : "Accessories"
         } , 
         {
             id : 8,
            type : "Summer"
        } , 
         {
              id : 9,
            type : "Trending Now"
        } ,
         {
             id : 10,
            type : "Topman"
        } , 
         {
              id : 11,
            type : "Face + Body"
        } , 
         {
             id : 12,
           type :  "Brands"
        } , 
         {
             id : 13,
            type : "Outlet"
        } , 
         {
             id : 14,
            type : "MarketPlace"
        }
    ]
})

 
    function toggleActive(index){
        setState({...state , activeData : state.data[index]})
  }
 
   

    const toggleActiveClass = (index)=>{
         if(state.data[index] === state.activeData){
            return "active"
         }else { 
            return "inactive"
        }
    }
       return(
          <>
           <StyledDiv>
                {
                    state.data.map((element , index) => (
                        
                         element.type === "Sale"?(<ParentParaDiv id = {()=> setId(element.id)} key = {index} className = {toggleActiveClass(index)+"unique"} onClick = {()=>toggleActive(index)}><ParaDiv>{element.type}</ParaDiv></ParentParaDiv>):(element.type=== "Outlet")?(<ParentParaDiv id = {() => setId(element.id)} key = {index} className = {toggleActiveClass(index)+"unique"}  onClick = {()=>toggleActive(index)}><ParaDiv>{element.type}</ParaDiv></ParentParaDiv>):
                         (<div id = {() => setId(element.id)} key = {index} className = {toggleActiveClass(index)} onClick = {()=>toggleActive(index)}>{element.type}</div>)
                        
                    ))
                }
           </StyledDiv>
             {id === 1 && <SaleData/>}
             {id === 2 && <SaleData />}
         </>
       )

    }