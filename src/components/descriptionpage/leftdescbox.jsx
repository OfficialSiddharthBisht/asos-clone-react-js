import styled from "styled-components";
import "../../cssfiles/Leftdescbox.css";
import { useRef} from "react";


const Mleftbox=styled.div`
      display:inline-block;
      width:42%;
      margin-left:16%;
      padding:10px;  
      display:flex; 
      // position:fixed;
      // top:6%;
      // margin-top:3rem;
      
`;

const Smallimages=styled.div`
  width:16%;
  display:flex;
  flex-direction:column;
  padding:20px;
`;

const Largeimages=styled.div`
 width:72%;
 display:inline-block;
 padding:10px;
`;

const Button=styled.button`
  &:focus{
    ouline:none;
    box-shadow: 0 0 3px 1px #0770cf;
  };
  cursor:pointer;
  background-color:none;
  font-family:"futura-pt-n4","futura-pt",Tahoma,Geneva,Verdana,Arial,sans-serif;
  font-weight:400;
  text-indent:1px;
  color:#2d2d2d;
  border:none;
  line-height:1.5;
  letter-spacing:.4px;
  box-sizing:border-box;
`;
const Leftdescbox=({pdata})=>{

  console.log(pdata);

  let imagesarr=pdata[0].imageUrl;
  //console.log(imagesarr)
  let imgindex=1;
  let imgref=useRef();
    const handleleftscroll=()=>{
      if(imgindex===0){
        imgindex=imagesarr.length-1;
       }else{
        imgindex-=1;
       }
       imgref.current.src=imagesarr[imgindex]; 
    }
    const handlerightscroll=()=>{
      
      if(imgindex===imagesarr.length-1){
       imgindex=0;
      }else{
        imgindex+=1;
      }
      imgref.current.src=imagesarr[imgindex]; 
    }
    
     console.log(pdata)
    return(
        <Mleftbox >
          <Smallimages>
           <div style={{marginBottom:"20px"}}><Button><img onClick={()=>{imgref.current.src=imagesarr[0]}} src={imagesarr[0]} alt="" width="40px" height="52px" /></Button></div>
           <div style={{marginBottom:"20px"}}><Button><img onClick={()=>{imgref.current.src=imagesarr[1]}} src={imagesarr[1]} alt="" width="40px" height="52px"/></Button></div>
           <div style={{marginBottom:"20px"}}><Button><img onClick={()=>{imgref.current.src=imagesarr[2]}} src={imagesarr[2]} alt="" width="40px" height="52px" /></Button></div>
           <div style={{marginBottom:"20px"}}><Button><img onClick={()=>{imgref.current.src=imagesarr[3]}} src={imagesarr[3]} alt="" width="40px" height="52px" /></Button></div>
          </Smallimages>
          <Largeimages>
            <div className="Slider">
              <Button style={{backgroundColor:"rgba(0,0,0,0)"}} onClick={()=>{handleleftscroll()}}  className="left">
              <i className="fa-solid fa-chevron-left  left-arrow"></i>
              </Button>
              <img ref={imgref} style={{width:"100%"}} src={pdata[0].imageUrl[0]} alt="" />
              <Button style={{backgroundColor:"rgba(0,0,0,0)"}} onClick={()=>{handlerightscroll()}}  className="right">
              <i className="fa-solid fa-chevron-right right-arrow"></i>
              </Button>
            </div>
          </Largeimages>
        </Mleftbox>
    )
}
export {Leftdescbox}
