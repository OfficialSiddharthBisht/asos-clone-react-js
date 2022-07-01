import {HANDLE_PROFILE} from "./action";
import {HANDLE_PROFILE_INVIS} from "./action";


export const profileReducer = (store = {profileVisible : false} , action) => {
       switch(action.type){
           case HANDLE_PROFILE:
              return{
                  ...store , profileVisible : true
              }

            case HANDLE_PROFILE_INVIS:
               return {
                   ...store , profileVisible : false
               }
            default:
              return store

       }
}