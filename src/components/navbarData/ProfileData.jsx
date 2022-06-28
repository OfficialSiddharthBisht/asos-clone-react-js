import {Link} from "react-router-dom";
import Styled from "styled-components";
import {AiOutlineContacts , AiOutlineClose} from "react-icons/ai"
import {CgProfile , CgShoppingBag} from "react-icons/cg";
import {GrContact} from "react-icons/gr";
import {VscTriangleUp} from "react-icons/vsc";
import {useSelector , useDispatch} from "react-redux";
import {inVisProfile} from "../../Redux/profileData/action"


const StyledDiv = Styled.div`
  position : absolute;
  position : realtive;
   width : 22%;
   border : 1px solid skyblue;
  top : ${(props) => props.visible === true?"60px":"-210px"};
  transition : all 0.5s ease-in;
  right : 40px;
  background-color : white;
  z-index : 10;

  &>div{
    display : flex;
    padding : 10px 0px;
    gap : 20px;
    margin-left : 20px;
  }

  &>div:first-child{
      
       justify-content : space-around;
       
  }
    
`
const StyledLink = Styled(Link)`
font-family : futura-pt,sans-serif;
       text-decoration : none;
       font-size : 16px;
       color : black;

  &:hover{
      color : skyblue;
  }
`

const CloseBtn = Styled.div`
       
`

export const ProfileData = () => {
       const dispatch = useDispatch();
      const {profileVisible } = useSelector((state) => state. ProfileToggle )
      return (
          <StyledDiv visible = {profileVisible} onMouseLeave= {() => dispatch(inVisProfile())}>
                 <div>
                           <div>
                                  <StyledLink link to = "/accountSign/AccountSign">Sign In</StyledLink> 
                                 
                           </div>
                           <div>
                           <StyledLink link to = "/accountSign/AccountJoin">Join</StyledLink>    
                           </div>
                           <div onClick = {() => dispatch(inVisProfile())}>
                                <AiOutlineClose style = {{
                                      cursor : "pointer",
                                }}/>
                           </div>
                 </div>
                 <div>
                         <StyledLink to = "/accountSign/AccountJoin">
                                <CgProfile />
                         </StyledLink>
                         <StyledLink to ="/accountSign/AccountJoin">My Account</StyledLink>
                 </div>
                 <div>
                         <StyledLink to = "/">
                               <CgShoppingBag/>
                         </StyledLink>
                         <StyledLink to ="/">My Orders</StyledLink>
                 </div>
                 <div>
                          <StyledLink to ="/">
                               <AiOutlineContacts/> 
                          </StyledLink>  
                          <StyledLink to ="/">Returns Information</StyledLink> 
                 </div>
                 <div>
                          <StyledLink to ="/">
                               <GrContact/>
                          </StyledLink>  
                          <StyledLink to ="/">Contact Preferences</StyledLink>
                 </div>
                 <VscTriangleUp style = {{
                      color : "white",
                      position : "absolute",
                      top : "-21px",
                      left : "55%",
                      fontSize : "30px",
                 }}/>
          </StyledDiv>
      )
}