import styled from "styled-components";
import { useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import {incCart} from "../../Redux/cartpage/action";
import { useNavigate } from "react-router";

const Mrightbox=styled.div`
  display:inline-block;
  width:22%;
  margin-right:16%;
  padding:10px;
  margin-bottom:50px;
`;
const Select=styled.select`
  width:100%;
  padding-top:6px;
  padding-bottom:6px;
  padding-left:8px;
  &:focus{
    ouline:none;
    box-shadow: 0 0 3px 1px #0770cf;
  };
  font-family:"futura-pt-n4","futura-pt",Tahoma,Geneva,Verdana,Arial,sans-serif;
  font-weight:400;
  background: #fff  no-repeat right 12px center;
  text-indent:1px;
  padding:7px 10% 7px 8px;
  color:#2d2d2d;
  border:1px solid #999;
  font-size:16px;
  line-height:1.5;
  letter-spacing:.4px;
  box-sizing:border-box;
`;
const Span=styled.div`
display:flex;
justify-content:center;
align-items:center;
  float:right;
  margin-right:9px;
  width:40px;
  height:40px;
  font-size:24px;
  border-radius:50%;
  color:white;
  background-color:#eee;
  &:hover{
     color:#2d2d2d
  };
`;

const Button=styled.button`
   width:80%;
   height:42px;
   line-height:41px;
   font:inherit,
   text-align:center;
   justify-content:center;
   color:#fff;
   letter-spacing:2px;
   text-transform:uppercase;
   cursor:pointer;
   background-color:#018849;
   &:hover{
     background-color:#006637;
  };
`;
const Button1=styled.button`
width:100%;
  padding-top:6px;
  padding-bottom:6px;
  padding-left:8px;
  &:focus{
    ouline:none;
    box-shadow: 0 0 3px 1px #0770cf;
  };
  font-family:"futura-pt-n4","futura-pt",Tahoma,Geneva,Verdana,Arial,sans-serif;
  font-weight:400;
  background: #fff  no-repeat right 12px center;
  text-indent:1px;
  padding:7px 10% 7px 8px;
  color:#2d2d2d;
  border:1px solid #999;
  font-size:16px;
  line-height:1.5;
  letter-spacing:.4px;
  box-sizing:border-box;
`;

const Productdetails=styled.div`
  margin-top:30px;
  border-top:1px solid #ccc;
  border-bottom:1px solid #ccc;
  padding:10px;

`;
const Brand=styled.div`
  border-bottom:1px solid #ccc;
  padding:10px;

`;
const Size=styled.div`
  border-bottom:1px solid #ccc;
  padding:10px;

`;
const Lookafterme=styled.div`
  border-bottom:1px solid #ccc;
  padding:10px;

`;
const Aboutme=styled.div`
  border-bottom:1px solid #ccc;
  padding:10px;

`;
 
const Rightdescbox=({pdata})=>{
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const sizeref=useRef();
  const stylealert=useRef();
  const box1ref=useRef();
  const box1ref1=useRef();
  const box2ref=useRef();
  const box2ref1=useRef();
  const box3ref=useRef();
  const box3ref1=useRef();
  const box4ref=useRef();
  const box4ref1=useRef();
  const box5ref=useRef();
  const box5ref1=useRef();
  const handledisplay1=()=>{
    if(box1ref.current.style.display==="block"){
      box1ref.current.style.display="none";
      box1ref1.current.children[1].className="fa-solid fa-plus";
    }else{
      box1ref.current.style.display="block";
      box1ref1.current.children[1].className="fa-solid fa-minus";
    }
  } 
  const handledisplay2=()=>{
    if(box2ref.current.style.display==="block"){
      box2ref.current.style.display="none";
      box2ref1.current.children[1].className="fa-solid fa-plus";
    }else{
      box2ref.current.style.display="block";
      box2ref1.current.children[1].className="fa-solid fa-minus";
    }
  }
  const handledisplay3=()=>{
    if(box3ref.current.style.display==="block"){
      box3ref.current.style.display="none";
      box3ref1.current.children[1].className="fa-solid fa-plus";
    }else{
      box3ref.current.style.display="block";
      box3ref1.current.children[1].className="fa-solid fa-minus";
    }
  }
  const handledisplay4=()=>{
    if(box4ref.current.style.display==="block"){
      box4ref.current.style.display="none";
      box4ref1.current.children[1].className="fa-solid fa-plus";
    }else{
      box4ref.current.style.display="block";
      box4ref1.current.children[1].className="fa-solid fa-minus";
    }
  }
  const handledisplay5=()=>{
    if(box5ref.current.style.display==="block"){
      box5ref.current.style.display="none";
      box5ref1.current.children[1].className="fa-solid fa-plus";
    }else{
      box5ref.current.style.display="block";
      box5ref1.current.children[1].className="fa-solid fa-minus";
    }
  }

  const Addtocart=()=>{
    // console.log(sizeref.current.value);
    // console.log(stylealert.current.style.display);
    if(sizeref.current.value==="Please select"){
      stylealert.current.style.display="block"
    }else{
      let Size=sizeref.current.value;
      stylealert.current.style.display="none";
      let data={...pdata[0],size:Size};
      fetch(`http://localhost:8080/cart`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      }).then((res)=>res.json())
      .then((res)=>{
          console.log("testing",res);
          dispatch(incCart(1));
          navigate("/cart")
      })
    }
  }
 return(
    <Mrightbox>
  
        <h1 style={{fontFamily:"futura-pt-n4,futura-pt,Tahoma,Geneva,Verdana,Arial,sans-serif",fontStyle:"normal",fontWeight:"400",fontSize:"20px",lineHeight:"1.3",
        letterSpacing:"1.3px",paddingBottom:"12px",color:"#2d2d2d"}}
        >{pdata[0].name}</h1>
        {
            pdata[0].price.previous.value===null ? 
            <span style={{fontSize:"20px",lineHeight:"1.1",letterSpacing:"2.8px",fontFamily:"futura-pt-n7,futura-pt,Tahoma,Geneva,Verdana,Arial,sans-serif",
             fontStyle:"normal",fontWeight:"700",color:"#555"}}
            >{pdata[0].price.current.text}</span>
            :<span style={{fontSize:"20px",lineHeight:"1.1",letterSpacing:"2.8px",fontFamily:"futura-pt-n7,futura-pt,Tahoma,Geneva,Verdana,Arial,sans-serif",
             fontStyle:"normal",fontWeight:"700",color:"#d01345"}}
            ><s>{pdata[0].price.previous.text}</s>{" "}
            <span style={{color:"#2d2d2d"}}>{pdata[0].price.current.text}</span></span>
        }
        <p><span style={{color:"#2d2d2d",fontSize:"12px",lineHeight:"1.7",letterSpacing:"1.7px",textTransform:"uppercase",paddingRight:"6px",
         fontFamily:"futura-pt,Tahoma,Geneva,Verdana,Arial,sans-serif",fontStyle:"normal",fontWeight:"700"}}
        >Colour:</span>
        <span style={{color:"#2d2d2d",font:"inherit",verticalAlign:"baseline",letterSpacing:".4px"}}
        >{pdata[0].colour}</span></p>

        <div style={{width:"100%",fontFamily:"futura-pt,Tahoma,Geneva,Verdana,Arial,sans-serif"}}>
         <span style={{verticalAlign:"bottom",color:"#2d2d2d",fontSize:"12px",lineHeight:"1.7",letterSpacing:"1.7px",textTransform:"uppercase",
         paddingRight:"6px",fontWeight:"700",fontStyle:"normal"}}
         >Size:</span>
        <a style={{float:"right",color:"#2d2d2d",fontWeight:"400",cursor:"pointer",
         fontSize:"14px",fontStyle:"normal",lineHeight:"1.7",letterSpacing:".4px",fontFamily:"futura-pt,Tahoma,Geneva,Verdana,Arial,sans-serif"}} href="#"
        >Size Guide</a></div>

        <Select ref={sizeref} name="" id="">
            <option value="Please select">Please select</option>
            <option value="UK 4">UK 4</option>
            <option value="UK 6">UK 6</option>
            <option value="UK 8">UK 8</option>
            <option value="UK 10">UK 10</option>
            <option value="UK 12">UK 12</option>
            <option value="UK 14">UK 14</option>
            <option value="UK 16">UK 16</option>
            <option value="UK 18">UK 18</option>
        </Select>

        <div ref={stylealert} style={{width:"100%",padding:"10px",backgroundColor:"#fae7ec",marginTop:"20px",display:"none"}}>
          <p>Please select from the available colour and size options</p>
        </div>

        <div style={{width:"100%",fontFamily:"futura-pt,Tahoma,Geneva,Verdana,Arial,sans-serif",marginTop:"30px"}} >
         <Button onClick={()=>Addtocart()} >ADD TO BAG</Button>   
         <Span> <i  className="fa-solid fa-heart"></i></Span>
        </div>

        <div style={{border:"1px solid #ccc",marginTop:"30px",padding:"10px"}}>
            <p><span><i className="fa-solid fa-truck"></i></span><span>&nbsp;&nbsp;Free Delivery</span></p>
             <p style={{font:"inherit",letterSpacing:".6px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ts & Cs apply.<a style={{color:"#2d2d2d"}} href="#">Learn more</a>  </p>
        </div>
        
        <Productdetails >
          <div><Button1 ref={box1ref1} onClick={()=>{handledisplay1()}} style={{width:"100%",backgroundColor:"white",border:"0px",fontWeight:"700"}}><span style={{float:"left"}}>Product Details</span><i style={{float:"right"}} className="fa-solid fa-minus"></i></Button1>
                    <div ref={box1ref} style={{display:"block"}}>
                      <br />
                       <strong><a style={{color:"#2d2d2d"}} href="#">Trousers</a></strong><span>&nbsp;by&nbsp;</span><strong><a style={{color:"#2d2d2d"}} href="#">ASOS DESIGN</a></strong>
                      <ul style={{lineHeight:"1.7",marginLeft:"20px"}}>
                          <li>Part of our responsible edit</li>
                          <li>Regular rise</li>
                          <li>Elasticated drawstring waist</li>
                          <li>Functional ockets</li>
                          <li>Slim fit</li>
                      </ul>
                      <p>Product Code: 113833645</p>
                    </div> 
          </div>
        </Productdetails>

        <Brand >
        <div><Button1 ref={box2ref1} onClick={()=>{handledisplay2()}}  style={{width:"100%",backgroundColor:"white",border:"0px",fontWeight:"700"}}><span style={{float:"left"}}>Brand</span><i style={{float:"right"}} className="fa-solid fa-plus"></i></Button1>
                    <div ref={box2ref}  style={{display:"none",lineHeight:"1.4"}}>
                      <br />
                      This is &nbsp; 
                      <a style={{color:"#2d2d2d"}} href="#"><strong>ASOS DESIGN&nbsp; </strong></a>
                      – your go-to for all the latest trends, no matter who you are, 
                      where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, 
                      and comes in Plus and Tall. Created by us, styled by you.
                      <br />
                      <br />
                    </div> 
          </div>
        </Brand>
        
        <Size>
        <div><Button1 ref={box3ref1} onClick={()=>{handledisplay3()}}  style={{width:"100%",backgroundColor:"white",border:"0px",fontWeight:"700"}}><span style={{float:"left"}}>Size & Fit</span><i style={{float:"right"}} className="fa-solid fa-plus"></i></Button1>
                    <div ref={box3ref} style={{display:"none",lineHeight:"1.4"}}>
                      <br />
                      <p>Model's height: 188cm/6'2"</p>
                      <p>Model is wearing: Size Medium</p>
                    </div> 
          </div>
        </Size>
        <Lookafterme>
        <div><Button1 ref={box4ref1} onClick={()=>{handledisplay4()}} style={{width:"100%",backgroundColor:"white",border:"0px",fontWeight:"700"}}><span style={{float:"left"}}>Look After Me</span><i style={{float:"right"}} className="fa-solid fa-plus"></i></Button1>
                    <div ref={box4ref}  style={{display:"none",lineHeight:"1.4"}}>
                      <br />
                      Machine wash according to instructions on care label
                      <br />
                      <br />
                    </div> 
          </div>
        </Lookafterme>
        <Aboutme>
        <div><Button1 ref={box5ref1} onClick={()=>{handledisplay5()}} style={{width:"100%",backgroundColor:"white",border:"0px",fontWeight:"700"}}><span style={{float:"left"}}>About Me</span><i style={{float:"right"}} className="fa-solid fa-plus"></i></Button1>
                    <div ref={box5ref} style={{display:"none",lineHeight:"1.4"}}>
                      <br />
                      By choosing our Better Cotton products, you’re supporting ASOS’s 
                      investment in Better Cotton’s mission. This product is sourced via a 
                      system of mass balance and therefore may not contain Better Cotton.
                      
                      See: https://www.asos.com/responsible-fashion/partner/our-certification-partners/
                      <br />
                      <br />
                      Main: 100% Cotton.
                      <br />
                      <br />
                    </div> 
          </div>
        </Aboutme>
    </Mrightbox>
 )
}


export {Rightdescbox};
