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
