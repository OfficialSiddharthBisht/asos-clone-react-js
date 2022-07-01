import React from "react";
import Styled from "styled-components";
import asosLogoBlack from "../../logos/asosLogoBlack.png";
import {useSelector , useDispatch} from "react-redux";
import {getAlluser} from "../../Redux/usersData/action";
import {useNavigate} from "react-router-dom";
import {logIn} from "../../Redux/AuthLogin/action";


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
}`

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
        }

        &>div:nth-child(2){
              border-bottom : 3px solid skyblue;
        }
`

     const EmailInput = Styled.input`
            border : ${({error}) => error === true?"2px solid red":"1px solid black"}
     `

     const PasswordInput = Styled.input`
     border : ${({error}) => error === true?"2px solid red":"1px solid black"}
            
     `

     const ErrorDiv = Styled.div`
            color : red;
            font-weight : 700;
     `

     const SubmitInput = Styled.input`
     display : block;
     width : 70%;
     margin : auto;
     height : 40px;
`

export const AccountSign = () => {
      const [email , setEmail] = React.useState("");
      const [password , setPassword] = React.useState("");
      const [emailError , setEmailError] = React.useState(false);
      const [passwordError , setPasswordError] = React.useState(false);
      const [mustPasswordError , setMustPasswordError] = React.useState(false);
      const [subError , setSubError] = React.useState(false);
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

             if(password !== "" && password.length < 10){
                  setMustPasswordError(true)
             }else {
                  setMustPasswordError(false)
             }

             if(password === ""){
                   setPasswordError(true);
             }else {
                  setPasswordError(false);
             }
          
      if(email !== "" && password !== "" && password.length >= 10){
              let userFlag = false ;
              let id = ""
              for(let i = 0; i < users.length; i++){
                   if(users[i].email === email && users[i].password === password){
                          userFlag = true;
                          id = users[i].id;
                          break;
                   }
              }

              if(userFlag){
                    fetch(`http://localhost:8080/users/${id}`)
                    .then((res) => res.json())
                    .then((res) => {
                        console.log(res)
                        dispatch(logIn(res))
                        navigate("/")
                     })
                    .catch((error) => console.log(error))
              }else{
                    setSubError(true);
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
                             <div onClick = {() => navigate( "/accountSign/AccountJoin")}>JOIN</div>
                              <div>SIGN IN</div>
                    </JoinSignDiv>

                    <StyledForm onSubmit = {handleSubmit}>
                         
                          {subError && <ErrorDiv>Wrong Email & Password</ErrorDiv>}
                         <div>
                                <label>EMAIL ADDRESS:</label>
                                <EmailInput error = {emailError||subError} type = "email" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                               {emailError && <ErrorDiv>Oops! You need to type your Email</ErrorDiv>}
                               
                         </div>
                         
                         <div>
                                <label>PASSWORD:</label>
                                <PasswordInput error = {passwordError||subError||mustPasswordError} type = "password" value = {password} onChange= {(e)=> setPassword(e.target.value)}/>
                                 {mustPasswordError && <ErrorDiv>Must be 10 or more Characters</ErrorDiv>}
                                {passwordError && <ErrorDiv>Hey , We need a password here</ErrorDiv>}
                               
                         </div>

                        <SubmitInput type = "submit" value = "SIGN IN"/>
                  </StyledForm>
                  </div>
           </StyledDiv>
     )
}