import {legacy_createStore as createStore , combineReducers,} from "redux";
import {profileReducer} from "./profileData/reducer.js"


const rootReducer = combineReducers({
    ProfileToggle : profileReducer,
})


export const store = createStore(rootReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
    console.log(store.getState());
  })