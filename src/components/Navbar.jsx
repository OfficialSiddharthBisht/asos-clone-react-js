import Styled from "styled-components";
import {Link} from "react-router-dom";
import { BiSearch } from 'react-icons/bi';
import {CgProfile} from "react-icons/cg";
import {BsHeartHalf , BsBag} from "react-icons/bs";
import { MenData } from "./navbarData/MenData";
import {WomenData}  from "./navbarData/WomenData"
import React from "react";
import {ProfileData} from "./navbarData/ProfileData"
import {useDispatch} from "react-redux";
import {toggleProfile , inVisProfile} from "../Redux/profileData/action";
import asosLogo from  "./../logos/asosLogo.png";

const HeaderDiv = Styled.div`
font-family : futura-pt,sans-serif;
`

const NavbarFirst = Styled.div`

  display : flex;
  position : relative;
//   background : #2D2D2D;
    background : black;
  justify-content : space-around;
  padding : 0px 20px;
  height : 60px;
  align-items : center;


  &>div:nth-child(1) , &>div:nth-child(2) , &>div:nth-child(3){
      width : 8%;
  }


  &>div:nth-child(2):hover , &>div:nth-child(3):hover {
           background :  #525050;
           padding : 21px 0px 21px 5px;
        
  }

  &>div:nth-child(4){
    width : 55%;
}

  &>div:nth-child(5){
    width : 12%;
    display : flex;
    justify-content : space-around;
}

`
const WomenDiv = Styled.div`
text-align : center;
padding : 21px 0px 21px 5px;
border : ${(props) => props.border === "womenBorder"?"1px solid skyblue":"none"};
background-color : ${(props) => props.gender === "women" ? "#525050":"none"};
`

const MenDiv = Styled.div`
  text-align : center;
padding : 21px 0px 21px 5px;
border : ${(props) => props.border === "menBorder"?"1px solid skyblue":"none"};
background-color : ${(props) => props.gender === "men" ? "#525050":"none"};
`

const StyledLink = Styled(Link)`
     text-decoration : none;
     color : white;
 &>img{
     width : 80px;
 }

`
const SearchBox = Styled.div`
position : relative;
 &>input{  
  width : 98%;
  height : 35px;
  border-radius : 20px;
  padding-left : 20px;
  outline-color : skyblue;
  font-family : futura-pt,sans-serif;
 }
`

const NavbarSecond = Styled.div`
        height : 50px;
        background : #525050;
        z-index : -2;
`
const NavbarThird = Styled.div`

`

const Navbar = () => {
    const [click , setClick] = React.useState("men");
    const [border , setBorder] = React.useState("");
    const dispatch = useDispatch();
   

    const handleClick1 = ()=> {
         setClick("women");
         setBorder("womenBorder")
    }

    const handleClick2 = ()=> {
          setClick("men");
          setBorder("menBorder")

    }
      return (
          <HeaderDiv>
                    <NavbarFirst>
                             <div>
                                   <StyledLink to = "/">
                                       <img alt = "logo" src = {asosLogo} />
                                   </StyledLink>
                             </div>   
                             <WomenDiv border = {border} gender = {click} onClick = {handleClick1}>
                                    <StyledLink to = "/">WOMEN
                                          
                                    </StyledLink>
                             </WomenDiv>  
                             <MenDiv border = {border} gender = {click} onClick = {handleClick2}>
                                     <StyledLink to = "/">MEN</StyledLink>
                             </MenDiv>  
                             <div>
                                      <SearchBox>
                                            <input placeholder = "Search for items and brands"/>
                                            <BiSearch style = {{
                                                 fontSize : "20px",
                                                 position : "absolute",
                                                 right : "2px",
                                                 top : "12px",
                                                 cursor : "pointer"
                                                 
                                            }}/>
                                      </SearchBox>
                              </div> 
                             
                             <div>
                             <div onMouseOver = {() => dispatch(toggleProfile())}>
                                  <CgProfile style = {{
                                        fontSize : "23px",
                                        color : "white",
                                        cursor : "pointer"
                                   }}/> 
                             </div>  
                             <div>

                                  <StyledLink to ="/">
                                  <BsHeartHalf style = {{
                                         fontSize : "23px",
                                         color : "white",
                                         cursor : "pointer"

                                    }}/>
                                  </StyledLink>
                                   
                             </div>  
                             <div>
                                   <StyledLink to = "/">
                                     <BsBag style = {{
                                           fontSize : "23px",
                                           color : "white",
                                           cursor : "pointer"
                                     }}/>
                                     </StyledLink>
                             </div> 
                                  
                             </div>
                             <ProfileData/>
                    </NavbarFirst>
                            
                     <NavbarSecond>
                        {  
                            click === "men"?(< MenData  />):(<WomenData />)
                        }
                    </NavbarSecond>

                      <NavbarThird>
                           
                      </NavbarThird>
          </HeaderDiv>
      )
}

export default Navbar

