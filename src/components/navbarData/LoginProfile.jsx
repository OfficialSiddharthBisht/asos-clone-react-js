import React from "react";
import Styled from "styled-components";
import {useSelector , useDispatch} from "react-redux";
import {CgProfile , CgShoppingBag , CgGift} from "react-icons/cg";
import {Link} from "react-router-dom";
import {GrContact} from "react-icons/gr";
import {BiLock , BiDetail , BiHelpCircle , BiNotepad} from "react-icons/bi";
import {AiOutlineHome} from "react-icons/ai";
import {MdPayment , MdOutlineAssignmentReturned ,MdOutlineKeyboardReturn} from "react-icons/md";
import {TiSocialGithub , TiShoppingBag} from "react-icons/ti";
import {logOut , logIn} from "../../Redux/AuthLogin/action"


  const StyledDiv = Styled.div`
          &>div>div{
                display : flex;
                gap : 20px;
                height : 50px;
                margin : 5px 0px;
                align-items : center;
                border-bottom : 5px solid white;
                
          }
  `

  const StyledLink = Styled(Link)`
       font-size : 18px;
       text-decoration : none;
       color : black;
      
  `
const NameDiv = Styled.div`
        display : flex;
        gap : 20px;
        height : 200px;
        align-items : center;
        padding : 30px 0px;
        border-bottom : 10px solid white;
`

  const CircleDiv = Styled.div`
     background: black;
     width : 80px;
     border-radius : 50%;
     color : white;
     font-size : 30px;
     font-weight : 700;
     text-align : center;
     padding : 25px;
    
  `

export const LoginProfile = () => {
       const dispatch = useDispatch();
     
       React.useEffect(()=> {
            const userAuth = JSON.parse(localStorage.getItem("userAuth"))
            if(userAuth === null){
               dispatch(logOut());
            }else {
                dispatch(logIn(userAuth))
            }
       } , [dispatch])


  const authData = useSelector((state) => state.AuthData);



       return(
             <StyledDiv>
                      <h2>MY ACCOUNT</h2>  
                      <div style = {{
                           marginLeft : "10%",
                           width : "25%",
                           border : "1px solid red",
                           background : "#EEEEEE",
                           marginBottom : "40px",
                      }}>
                             <NameDiv>
                                      <CircleDiv>
                                               {authData.users[0].firstName[0]}
                                               {authData.users[0].lastName[0]}
                                      </CircleDiv>
                                      <div>
                                              <div style ={{fontWeight : 700, fontSize : "20px"}}>Hi</div>
                                              <div>
                                                      <span>{authData.users[0].firstName}{"  "}{authData.users[0].lastName}</span>
                    
                                              </div>
                                      </div>
                             </NameDiv>
                             <div> 
                                      <StyledLink to ="#">
                                            <CgProfile/> 
                                      </StyledLink>
                                      <StyledLink to = "#">Account Overview</StyledLink>
                             </div>
                             <div> 
                                      <StyledLink to ="#">
                                            <CgShoppingBag/> 
                                      </StyledLink>
                                      <StyledLink to = "#">My Orders</StyledLink>
                             </div>
                             <div> 
                                      <StyledLink to ="#">
                                            <BiDetail/> 
                                      </StyledLink>
                                      <StyledLink to = "#">My Details</StyledLink>
                             </div>
                             <div> 
                                      <StyledLink to ="#">
                                            <BiLock/> 
                                      </StyledLink>
                                      <StyledLink to = "#">Change Password</StyledLink>
                             </div>
                             <div> 
                                      <StyledLink to ="#">
                                            <AiOutlineHome/> 
                                      </StyledLink>
                                      <StyledLink to = "#">Address Book</StyledLink>
                             </div>
                             <div> 
                                      <StyledLink to ="#">
                                            <MdPayment/> 
                                      </StyledLink>
                                      <StyledLink to = "#">Payment Methods</StyledLink>
                             </div>
                             <div> 
                                      <StyledLink to ="#">
                                            <GrContact/> 
                                      </StyledLink>
                                      <StyledLink to = "#">Contact Preferences</StyledLink>
                             </div>
                             <div> 
                                      <StyledLink to ="#">
                                            <TiSocialGithub/> 
                                      </StyledLink>
                                      <StyledLink to = "#">Social Accounts</StyledLink>
                             </div>
                             <div> 
                                      <StyledLink to ="#">
                                            <CgGift/> 
                                      </StyledLink>
                                      <StyledLink to = "#">Gift Cards & Vouchers</StyledLink>
                             </div>
                             <div> 
                                      <StyledLink to ="#">
                                            <BiHelpCircle/> 
                                      </StyledLink>
                                      <StyledLink to = "#">Need help ?</StyledLink>
                             </div>
                             <div> 
                                      <StyledLink to ="#">
                                            <TiShoppingBag/> 
                                      </StyledLink>
                                      <StyledLink to = "#">Where is my order ?</StyledLink>
                             </div>
                             <div> 
                                      <StyledLink to ="#">
                                            <MdOutlineAssignmentReturned/> 
                                      </StyledLink>
                                      <StyledLink to = "#">How do i make a return ?</StyledLink>
                             </div>
                             <div> 
                                      <StyledLink to ="#">
                                            <BiHelpCircle/> 
                                      </StyledLink>
                                      <StyledLink to = "#">Need help ?</StyledLink>
                             </div>
                             <div> 
                                      <StyledLink to ="#">
                                            <BiNotepad/> 
                                      </StyledLink>
                                      <StyledLink to = "#">I need a new returns note</StyledLink>
                             </div>
                             <div> 
                                      <StyledLink to ="#">
                                            <MdOutlineKeyboardReturn/> 
                                      </StyledLink>
                                      <StyledLink to = "#">Sign Out</StyledLink>
                             </div>
                      </div> 
             </StyledDiv>
       )
}