import {legacy_createStore as createStore , combineReducers,applyMiddleware} from "redux";
import {profileReducer} from "./profileData/reducer";
import {userDetailReducer} from "./usersData/reducer";
import {authReducer} from "./AuthLogin/reducer";
import {ProddescReducer} from "./proddesc/reducer";
import thunk from "redux-thunk";
import { cartReducer } from "./cartpage/reducer";


const rootReducer = combineReducers({
    ProfileToggle : profileReducer,
    usersData : userDetailReducer,
    AuthData : authReducer,
    pdata:ProddescReducer,
    cdata:cartReducer

})


export const store = createStore(rootReducer,applyMiddleware(thunk))


  store.subscribe(() => {
    console.log(store.getState());
  })
