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