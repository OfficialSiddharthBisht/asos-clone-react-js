import React from "react";
import { useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import {getProductdesc} from "../../Redux/proddesc/action";
import { useParams } from "react-router";
import { Leftdescbox } from "./leftdescbox";
import { Rightdescbox } from "./rightdescbox";
import { MightAlsoLike } from "./Mightalsolike";



export const Productdetails=()=>{
    const {pdata,isLoading1,isError1}=useSelector((state)=>state.pdata);
    const productid=useParams();
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProductdesc(productid));
    },[dispatch]);
    console.log(pdata,isLoading1,isError1)
    if(isLoading1){
        return <h1>Loading ...</h1>
    }
    else if(isError1){
        return <h1>SomeThing Went Wrong </h1>
    }
    if(pdata.length!=0){
        return(
            <div style={{width:"100%"}}>
               <div style={{width:"86%",padding:"10px",margin:"auto"}}>
               <a style={{color:"#2d2d2d",cursor:"pointer",textDecoration:"none",font:"inherit",fontSize:".875rem"}}>Home</a>{"   "}{">"}{"   "}
                <a style={{color:"#2d2d2d",cursor:"pointer",textDecoration:"none",font:"inherit",fontSize:".875rem"}}>New IN</a>{"   "}{">"}{"   "}
                <span style={{color:"#767676",textOverflow:"ellipsis",overflow:"hidden",fontSize:".875rem"}}>{pdata[0].name}</span>
               </div>
               <div style={{borderBottom:"1px solid #ccc",display:"flex"}}>
                 <Leftdescbox pdata={pdata}/>
                 <Rightdescbox pdata={pdata} /> 
               </div>
               
               <MightAlsoLike />
            </div>
        )
       
    } 
    
}
