import React from "react";
import {v4 as uuid} from "uuid";
import Styled from "styled-components";
import {FcGoogle} from "react-icons/fc";
import {FaApple} from "react-icons/fa";
import {MdFacebook} from "react-icons/md";
import asosLogoBlack from "../../logos/asosLogoBlack.png";
import {useDispatch , useSelector} from "react-redux";
import {userDetails , getAlluser} from "../../Redux/usersData/action";
import {useNavigate} from "react-router-dom";

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
    margin : auto;
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
         background : black;
         color : white;
         cursor : pointer;
`

const JoinSignDiv = Styled.div`
        width : 90%;
        margin : auto;
        border-bottom : 1px solid grey;
        height : 60px;
        padding-top : 30px;
        margin-bottom : 30px;
        cursor : pointer;
        
        &>div{

              width : 40%;
        }

        &>div:first-child{
              border-right : 1px solid grey;
              border-bottom : 3px solid skyblue;
        }
`
      
const EmailInput = Styled.input`
   border : ${({error}) => error === "true"?"2px solid red":"1px solid black"};
`

const PasswordInput = Styled.input`
border : ${({error}) => error === true?"2px solid red":"1px solid black"};

`

const FirstNameInput = Styled.input`
border : ${({error}) => error === "true"?"2px solid red":"1px solid black"};

`

const LastNameInput = Styled.input`
border : ${({error}) => error === "true"?"2px solid red":"1px solid black"}

`

const BirthInput = Styled.input`
border : ${({error}) => error === "true"?"2px solid red":"1px solid black"}

`

const ErrorDiv = Styled.div`
        color : red;
        font-weight : 700;
`

export const AccountJoin = () => {
       const [email , setEmail] = React.useState("");
       const [password , setPassword] = React.useState("");
       const [firstName , setFirstName] = React.useState("");
       const [lastName , setLastName] = React.useState("");
       const [birth , setBirth] = React.useState("");
       const [firstNameError , setFirstNameError] = React.useState(false);
       const [lastNameError , setLastNameError] = React.useState(false);
       const [emailError , setEmailError] = React.useState(false);
       const [passwordError , setPasswordError] = React.useState(false);
       const [mustPasswordError , setMustPasswordError] = React.useState(false);
       const [birthError , setBirthError] = React.useState(false);
       const [alreadyExist , setAlreadyExist] = React.useState(false);
       const dispatch = useDispatch();
       const navigate = useNavigate();
       

       React.useEffect(() => {
              fetch("http://localhost:8080/users").then((res) => res.json())
              .then((res)=> {
                      dispatch(getAlluser(res))
              })
              .catch((err) => console.log(err))

       } , [dispatch])

       const {users} = useSelector((state) => state.usersData)

       const handleSubmit = (e)=>{

              e.preventDefault()
              if(email === ""){
                   setEmailError(true);
              }else {
                   setEmailError(false);
              }
 
              if(password === ""){
                    setPasswordError(true);
              }else {
                   setPasswordError(false);
              }

              if(password !== "" && password.length < 10){
                     setMustPasswordError(true);
               }else {
                    setMustPasswordError(false);
               }

              if(firstName === ""){
                     setFirstNameError(true)
              }else {
                    setFirstNameError(false)
              }

              if(lastName === ""){
                     setLastNameError(true);
              }else {
                      setLastNameError(false);
              }

              if(birth === ""){
                     setBirthError(true);
              }else {
                      setBirthError(false);
              }

                    
        //fatching the users data from database and checking if already exist or not.
        // if not exist already then we post the another user else again we put as true.

 if(firstName !== "" && lastName !== "" && 
 birth !== "" && email !== "" && password !== "" && password.length >= 10 ){ 
       
               let userFlag = true;
              for(let i = 0; i < users.length; i++){
                     if(users[i].email === email){
                          userFlag = false;
                          setAlreadyExist(true);
                            break;
                     }
              }

        if(userFlag){  
              setAlreadyExist(false);
              const payload = {
                     id : uuid(),
                     firstName : firstName,
                     lastName : lastName,
                     email : email,
                     password : password,
                     DateBirth : birth
              }

              fetch(" http://localhost:8080/users",{
                     method : "POST",
                     body : JSON.stringify(payload), 
                     headers : {
                            "Content-Type" : "application/json"
                     }
              }).then((res) => res.json())
                .then((res) => {
                     dispatch(userDetails(res));
                      navigate("/accountSign/AccountSign")
              })
                
                .catch((error) => console.log(error));
          
          }
     }

}

     return (
            <StyledDiv>  
                    <div style = {{ 
                              textAlign : "center",
                             }}>
                           <img alt = "logo" src = {asosLogoBlack} width = "120px"/>
                   
                    </div>
                  <div>

                    <JoinSignDiv>
                             <div>JOIN</div>
                              <div onClick = {() => navigate( "/accountSign/AccountSign")}>SIGN IN</div>
                    </JoinSignDiv>
                      
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
                 
                 
                  <StyledForm onSubmit = {handleSubmit}>
                         
                           <div>
                                  <label>EMAIL ADDRESS:</label>
                                  <EmailInput error = {emailError.toString()} type = "email" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                                  {emailError && <ErrorDiv>Oops! You need to type your Email</ErrorDiv>}
                                  {alreadyExist && <ErrorDiv>This Email is already Exist</ErrorDiv>}
              
                           </div>
                           
                           <div>
                                  <label>FIRST NAME:</label>
                                  <FirstNameInput  error = {firstNameError.toString()}  type = "text" value = {firstName} onChange = {(e) => setFirstName(e.target.value)}/>
                                  {firstNameError && <ErrorDiv>We need your first name - it's nicer that way</ErrorDiv>}
                           </div>

                           <div>
                                  <label>LAST NAME:</label>
                                  <LastNameInput error = {lastNameError.toString()}   type = "text" value = {lastName} onChange = {(e) => setLastName(e.target.value)}/>
                                  {lastNameError && <ErrorDiv>Last name , too , please!</ErrorDiv>}
                           </div>

                           <div>
                                  <label>DATE OF BIRTH:</label>
                                  <BirthInput error = {birthError.toString()}  type = "date" value = {birth} onChange = {(e) => setBirth(e.target.value)}/>
                                  {birthError && <ErrorDiv>Oops! You have to give your Date of Birth</ErrorDiv>}
                           </div>

                           <div>
                                  <label>PASSWORD:</label>
                                  <PasswordInput error = {passwordError || mustPasswordError} type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                                   {mustPasswordError && <ErrorDiv>Must be 10 or more Characters</ErrorDiv>}
                                  {passwordError && <ErrorDiv>Hey , We need a password here</ErrorDiv>}
                           </div>

                             <div>  
                              <MostP>Mostly Interested In:</MostP>
                            <RadioDiv>
                                  <div>
                                         <input type = "radio" id = "womenswear" name = "gender"/>
                                         <label htmlFor = "womenswear">Womenswear</label>
                                </div> 

                                  <div>
                                         <input type = "radio" id = "menswear" name = "gender"/>
                                         <label htmlFor = "menswear">Menswear</label>
                                  </div>
                            </RadioDiv>
                            </div>

                        <SubmitInput type = "submit" value = "JOIN ASOS"/>
                 </StyledForm>
            </div>
                   

          </StyledDiv>

     )
}