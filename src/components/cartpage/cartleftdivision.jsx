import styled from "styled-components";
import {useDispatch,useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import { cartsubtotal,getcartdata } from "../../Redux/cartpage/action";

const Leftdivisionbox=styled.div`
  width:60.6382978723%;
  display:inline-block;
  vertical-align:top;
  position:relative;
  animation-name:bag-loading-fadein;
  animation-duration:1s;
`;
const Div1=styled.div`
  padding:24px 30px;
  margin-bottom:9px;
  background-color:#fff;

`;
const Div2=styled.div`
   padding:0;
`;
const Div2innerdivs=styled.div`
padding:10px 30px;
font-size:1.2em;
list-style:none;
margin:0;
overflow:hidden;
position:relative;
width:100%;
display:flex;
background-color:#fff;
`;
const Span=styled.div`
   color:#fff;
   text-shadow:0 0 3px #000;
   display:inline-block;
   margin-right:6px;
   &:hover{
    color:#2d2d2d
   }

`;
const Div3=styled.div`
  letter-spacing:2px;
  font-style:normal;
  font-weight:700;
  line-height:1.375em;
  text-transform:uppercase;
  font-size:.9em;
  text-align:right;
  margin:8px 0 0;
  padding:24px 30px;
  background-color:#fff;
  padding-bottom:40px;
`;
const Div4=styled.div`
   font-style:normal;
   font-weight:400;
   background:#fff;
   margin:8px 0 0;
   padding:23px 30px 23px 100px;
   position:realative;
   display:block;
`;


export const Leftdivision=({cdata})=>{
  console.log("leftdivdata",cdata[0][0].id);
  const dispatch=useDispatch();
  const inputref=useRef();
  const {carttotal}=useSelector((state)=>state.cdata);
  //console.log("carttotal",carttotal)
  const handlecount=()=>{
    let total=0;
    cdata[0].map((item)=>{
      if(item.price.rrp.value===null){
        total=total+item.price.current.value;
      }else{
        total=total+item.price.rrp.value;
      }
      
    })
    console.log("total",total);
     dispatch(cartsubtotal(total))
  }
  // handlecount();
  useEffect(()=>{
    handlecount();
  },[]);

  const deleteitem=(id)=>{
    fetch(`http://localhost:8080/cart/${id}`,{
      method:"DELETE"
    }).then((res)=>res.json).then((res)=>{
       dispatch(getcartdata(id));
    })
  }

  return (
    <Leftdivisionbox>
         <Div1>
          <h1 style={{display:"inline-block",margin:"0",fontSize:"1.15em",fontWeight:"700",textTransform:"uppercase",letterSpacing:"2.5px",lineHeight:"22px"}}>My Bag</h1>
          <p style={{display:"inherit",margin:"0",float:"right",lineHeight:"20px",fontSize:".88em",letterSpacing:".6px"}}>Items are reserved for 60 minutes</p>
         </Div1>
         <Div2>
          {
            cdata[0].map((item)=>(
              <Div2innerdivs key={item.id}>
                <div style={{width:"26%",padding:"10px"}}>
                <img style={{objectFit:"cover"}} src={item.imageUrl[0]} alt="" width="100%" />
                </div>
                <div style={{width:"62%",padding:"10px"}}>
                <p style={{fontSize:"15px",fontWeight:"700",letterSpacing:"1.7px",lineHeight:"26px"}}>{item.price.current.text}</p>
                <p style={{fontSize:".82em",lineHeight:"1.5em",maxHeight:"3.1em",color:"#2d2d2d",letterSpacing:".5px",opacity:".9",overflow:"hidden",padding:"0 25px 8px 0"}}>{item.name}</p>
                <p><span style={{fontSize:".75em",letterSpacing:".6px",borderRight:"1px solid #eee",display:"inline-block",margin:"0 3px 0 0",padding:"0 8px 0 0",color:"#666"}}>{item.colour}</span>
                <span style={{fontSize:".75em",letterSpacing:".6px",borderRight:"1px solid #eee",display:"inline-block",margin:"0 3px 0 0",padding:"0 8px 0 0",color:"#666"}}>{item.size}</span>
                <span style={{fontSize:".75em",letterSpacing:".6px",borderRight:"1px solid #eee",display:"inline-block",margin:"0 3px 0 0",padding:"0 8px 0 0",color:"#666"}}>
                  <select ref={inputref} onChange={(e)=>{
                      item.price.rrp.value=(e.target.value)*(item.price.current.value);
                      handlecount();
                  }} 
                  size="1" style={{border:"0px",backgroundColor:"#fff"}}  name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select></span></p>
                  <div  style={{fontSize:".75em",letterSpacing:".6px",border:"1px solid #eee",display:"inline-block",margin:"0 3px 0 0",padding:"8px 8px 8px 8px",color:"#666",marginTop:"8px"}}><Span><i  className="fa-solid fa-heart"></i></Span>Save for later</div>    
                </div>
                <div style={{marginTop:"15px",padding:"10px"}}>
                  <button style={{backgroundColor:"#fff",border:"0px"}}><i onClick={()=>deleteitem(item.id)} style={{fontSize:"24px"}} className="fa-solid fa-xmark"></i></button>
                </div>
               
                
              </Div2innerdivs>
            ))
          }
           
         </Div2>
         <Div3>
          <p style={{float:"right"}}><span>sub-total</span><span style={{marginLeft:"10px"}}>£{carttotal}</span></p>
         </Div3>
         <Div4>
           <div style={{display:"inline-block",width:"12%"}}>
            <img style={{marginLeft:"-60px"}} src="https://previews.123rf.com/images/chatchaithep/chatchaithep2102/chatchaithep210200032/163903310-fast-delivery-truck-icon-fast-shipping-design-for-website-and-mobile-apps-vector-illustration-.jpg" alt="" width="60px" height="40px" />
           </div>
           <div style={{display:"inline-block",width:"80%"}}>
              <p style={{lineHeight:"1.5em",fontStyle:"normal",fontWeight:"700",letterSpacing:"2px",margin:"0 0 3px",textTransform:"uppercase"}}>FREE* STANDARD DELIVERY</p>
              <p style={{letterSpacing:".4px",lineHeight:"1.5em",fontWeight:"400",textAlign:"left",fontSize:"14px"}}>Faster delivery options available to most countries.</p>
              <a style={{fontSize:"14px",color:"#2d2d2d"}} href="#">More info</a>
           </div>
         </Div4>
    </Leftdivisionbox>
  )
}