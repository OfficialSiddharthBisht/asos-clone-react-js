import React from "react";
import { useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import { useParams } from "react-router";
import {getcartdata} from "../../Redux/cartpage/action";
import styled from "styled-components";
import { Leftdivision } from "./cartleftdivision";
import { Rightdivision } from "./cartrightdivision";


const Maindisplay=styled.div`
   background-color:#eee;
   min-height:438px;
   color:#2d2d2d;
   width:100%;
   padding:0;
   position:relative;
   margin-left:0;
   transition:margin-left .6s ease-in-out;
   box-sizing:border-box;
   font-family: futura-pt-n4,futura-pt,"FuturaPT",Futura,Tahoma,Geneva,Verdana,Arial,sans-serif;
   font-style:normal;
   font-weight:400;
`;
const Maindivisionbox=styled.div`
   max-width:960px;
   min-width:500px;
   padding:10px;
   margin:0 auto;
   animation-name:bag-loading-fadein;
   animation-duration:1.5s;

`;


export const Cartdisplay=()=>{
    const {cdata,isLoading2,isError2}=useSelector((state)=>state.cdata);
    const dispatch=useDispatch();
    const productid=useParams();
    useEffect(()=>{
        dispatch(getcartdata(productid));
    },[dispatch]);
    console.log(cdata,isLoading2,isError2)
    if(isLoading2){
        return <h1>Loading ...</h1>
    }
    else if(isError2){
        return <h1>SomeThing Went Wrong </h1>
    }
    if(cdata.length>=1){
        return(
            <Maindisplay>
                <Maindivisionbox>
                   <Leftdivision cdata={cdata} />
                   <Rightdivision />
                </Maindivisionbox>
            </Maindisplay>
        )
    }else{
        return(
            <Maindisplay>
                <Maindivisionbox>
                  <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"438px"}}>
                    <div>
                    <i style={{fontSize:"40px",marginLeft:"36%"}} class="fa-solid fa-cart-flatbed-suitcase"></i>
                    <p style={{marginTop:"20px",fontSize:"30px",fontWeight:"700"}}>Your cart is empty</p>

                    </div>
                  </div>
                </Maindivisionbox>
            </Maindisplay>
        )
    }
    
}