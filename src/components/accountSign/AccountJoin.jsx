import Styled from "styled-components";
import {FcGoogle} from "react-icons/fc";
import {FaApple} from "react-icons/fa";
import {MdFacebook} from "react-icons/md";
import asosLogoBlack from "../../logos/asosLogoBlack.png";

const StyledDiv = Styled.div`
  
   border : 1px solid red;
   
    &>div:nth-child(2){
        width : 50%;
        border : 1px solid green;
        margin : auto;

        &>div:nth-child(1){
            display : flex;
            font-size : 20px;
            justify-content : space-around;
            margin : 20px 0px 30px 0px;
        }
    }
`

const IconDiv = Styled.div`
   display : flex;
   justify-content : space-around;
   margin-top : 30px;

   &>div{
         display : flex;
         justify-content : space-around;
         gap : 20px;
         height : 50px;
         align-items : center;
         font-size : 16px;
         border : 1px solid grey;
         width : 30%;

   }


`
const SignUpDiv = Styled.div`
      font-size : 20px;
      font-weight : 700;
      text-align : center;

`
const StyledForm = Styled.form`
       width : 70%;
       margin : auto;
       margin-top : 40px;
       margin-bottom : 50px;

     &>div {
          display : flex;
          flex-direction : column;
          width : 70%;
          margin : auto;
          margin-bottom : 30px;

    &>input{
          height : 40px;
          font-size : 16px;
          margin-top : 10px;
          outline-color : skyblue;
      }

      &>div{
           font-size : 14px;
      }

     }`

const MostP = Styled.p`
font-size : 20px;
`

const RadioDiv = Styled.div`
   display : flex;
    width : 60%;
   justify-content : space-between;
`

const TextDiv = Styled.div`
       width : 95%;
       margin : auto;
       text-align : center;
       margin-top : 40px;
       margin-bottom : 30px;`

const SubmitInput = Styled.input`
         display : block;
         width : 70%;
         margin : auto;
         height : 40px;
`
      


export const AccountJoin = () => {
     return (
            <StyledDiv>  
                    <div style = {{ 
                              textAlign : "center",
                             }}>
                           <img alt = "logo" src = {asosLogoBlack} width = "120px"/>
                   
                    </div>
                  <div>

                    <div>
                             <div>JOIN</div>
                              <div>SIGN IN</div>
                    </div>
                      
                      <SignUpDiv>SIGN UP WITH...</SignUpDiv>
                      <IconDiv>
                                <div>
                                      <FcGoogle/>
                                       <div>GOOGLE</div>
                                </div>
                                <div>
                                      <FaApple/>
                                       <div>APPLE</div>
                                </div>

                                <div>
                                      <MdFacebook/>
                                       <div>FACEBOOK</div>
                                </div>
                      </IconDiv>

                      <TextDiv>Signing up with social is super quick. No extra passwords to remember - no brain fail. Don't worry, we'd never share any of your data or post anything on your behalf #notevil</TextDiv>
                      
                       
                        <SignUpDiv>OR SIGN UP WITH EMAIL</SignUpDiv>
                 
                 
                  <StyledForm>
                         
                           <div>
                                  <label>EMAIL ADDRESS:</label>
                                  <input type = "email"/>
                                  <div>Oops! You need to type your Email</div>
                           </div>
                           
                           <div>
                                  <label>FIRST NAME:</label>
                                  <input type = "text"/>
                                  <div>We need your first name - it's nicer that way</div>
                           </div>

                           <div>
                                  <label>LAST NAME:</label>
                                  <input typee = "text"/>
                                  <div>Last name , too , please!</div>
                           </div>

                           <div>
                                  <label>DATE OF BIRTH:</label>
                                  <input type = "date"/>

                           </div>

                           <div>
                                  <label>PASSWORD:</label>
                                  <input type = "password"/>
                                   <div>Must be 10 or more Characters</div>
                                  <div>Hey , We need a password here</div>
                           </div>

                             <div>  
                              <MostP>Mostly Interested In:</MostP>
                            <RadioDiv>
                                  <div>
                                         <input type = "radio" id = "womenswear" name = "gender"/>
                                         <label for = "womenswear">Womenswear</label>
                                </div> 

                                  <div>
                                         <input type = "radio" id = "menswear" name = "gender"/>
                                         <label for = "menswear">Menswear</label>
                                  </div>
                            </RadioDiv>
                            </div>

                        <SubmitInput type = "submit" value = "JION ASOS"/>
                 </StyledForm>
            </div>
                   

          </StyledDiv>

     )
}