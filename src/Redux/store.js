<<<<<<< HEAD
import {combineReducers,applyMiddleware} from "redux";
import {createStore} from "redux"
import {ProddescReducer} from "./proddesc/reducer";
import thunk from "redux-thunk";
import { cartReducer } from "./cartpage/reducer";
const rootReducer=combineReducers({
    pdata:ProddescReducer,
    cdata:cartReducer
})

export const store=createStore(rootReducer,applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState());
})
=======
import {legacy_createStore as createStore , combineReducers,} from "redux";
import {profileReducer} from "./profileData/reducer";
import {userDetailReducer} from "./usersData/reducer";
import {authReducer} from "./AuthLogin/reducer";


const rootReducer = combineReducers({
    ProfileToggle : profileReducer,
    usersData : userDetailReducer,
    AuthData : authReducer,

})


export const store = createStore(rootReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
    console.log(store.getState());
  })
>>>>>>> f76f4e070b15c958cf11c67e593b9a2b2430f2be
