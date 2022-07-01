import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Rightdivisionbox=styled.div`
  top:180px;
  padding:20px;
  position:fixed;
  width:39.5833333333%;
  max-width:370px;
  transform:translate3d(0,0,0);
  display:inline-block;
  background-color:#fff;
  margin-left:20px;

`;


 const Rightdivision=()=>{
   const navigate=useNavigate();
   const {cdata}=useSelector((state)=>state);
   console.log('rightdivision',cdata.carttotal);
   return(
    <Rightdivisionbox>
      <h2 style={{borderBottom:"1px solid #eee",paddingBottom:"24px",marginBottom:"14px",fontSize:"1.15em",fontStyle:"normal",textTransform:"uppercase",letterSpacing:"2.5px",lineHeight:"22px"}}>TOTAL</h2>
      <p><span style={{fontSize:"15px",fontWeight:"700"}}>Sub-total</span><span style={{float:"right",fontWeight:"400"}}>£{cdata.carttotal}</span></p>
      <p style={{marginTop:"10px"}}><span style={{fontSize:"15px",fontWeight:"700"}}>Delivery</span><span style={{float:"right",fontWeight:"400",borderRadius:"50%",border:"2px solid #ccc",width:"18px",height:"18px",display:"flex",justifyContent:"center",alignItems:"center"}}>i</span></p>
      <select style={{border:"0px",backgroundColor:"#fff",borderBottom:"1px solid #666",color:"#666",width:"100%",fontSize:"16px",cursor:"pointer",height:"28px",marginTop:"10px"}} name="" id="">
        <option value="">Standard Delivery (Free)</option>
        <option value="">Express Delivery (£20.00)</option>
      </select>
     
      <button style={{width:"100%",border:"none",backgroundColor:"#018849",color:"#fff",letterSpacing:"1.9px",fontWeight:"700",cursor:"pointer",fontSize:".875em",lineHeight:"1em",padding:"1.0714285714em",textAlign:"center",textTransform:"uppercase",marginTop:"10px"}}
      onClick={()=>navigate("/checkout")}>CHECKOUT</button>

      <p style={{fontSize:".875em",fontStyle:"normal",fontWeight:"700",letterSpacing:"2px",marginTop:"10px"}} >WE ACCEPT:</p>
      <p style={{marginTop:"10px"}}><img src="https://assets.asosservices.com/asos-finance/images/marketing/single.png" alt="" width="70%" height="20px" /></p>
      <p style={{letterSpacing:".4px",fontWeight:"400",font:"inherit",fontSize:"15px",marginTop:"10px"}}>Got a discount code? Add it in the next step.</p>
    </Rightdivisionbox>
   )
}

export {Rightdivision};