import React from 'react';
import Navbar from "./components/Navbar";
import {AccountSign} from "./components/accountSign/AccountSign";
import {AccountJoin} from "./components/accountSign/AccountJoin"
import {Routes , Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logIn , logOut} from "./Redux/AuthLogin/action"
import {LoginProfile} from "./components/navbarData/LoginProfile";
import {getAlluser} from "./Redux/usersData/action";
import Home from './components/Men/home'
import {MenPage} from './components/Men/MenPage';
import Footer  from './components/Footer/footer';
import WomenHome from "./components/Women/Womenhome";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch("http://localhost:8080/users").then((res) => res.json())
    .then((res)=> {
            dispatch(getAlluser(res))
    })
    .catch((err) => console.log(err))

} , [dispatch])

  React.useEffect(() => {
      const userAuth = JSON.parse(localStorage.getItem("userAuth"))
       if(userAuth === null){
          dispatch(logOut());
       }else {
           dispatch(logIn(userAuth))
       }
  } , [dispatch])

  return (
    <div>
         <Navbar />
         <Routes>
                <Route path = "/" element = {<Home/>}></Route>  
                <Route path = "/Men/Home" element = {<Home/>}></Route>
                <Route path = "/accountSign/AccountSign" element = {<AccountSign />}></Route>
                <Route path = "/accountSign/AccountJoin" element = {<AccountJoin />}></Route>
                <Route path = "/navbarData/LoginProfile" element = {<LoginProfile />}></Route>
                <Route path='/Men/MenPage' element={<MenPage/>}></Route>
                <Route path='/Women/Womenhome' element={<WomenHome/>}></Route>
         </Routes>
         <Footer />
    </div>
  );
}

export default App;
