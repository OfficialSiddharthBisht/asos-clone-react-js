import {combineReducers,applyMiddleware} from "redux";
import {createStore} from "redux"
import {ProddescReducer} from "./proddesc/reducer";
import thunk from "redux-thunk";
const rootReducer=combineReducers({
    pdata:ProddescReducer
})

export const store=createStore(rootReducer,applyMiddleware(thunk));
