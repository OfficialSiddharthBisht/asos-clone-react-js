import {LOG_IN , LOG_OUT} from "./action";

export const authReducer = (store = {users : [] ,Auth : false} , action) => {
       switch(action.type) {
           case LOG_IN:
              localStorage.setItem("userAuth" , JSON.stringify(action.payload))
              return{
                   ...store , Auth : true , users : [action.payload]
              }
            case LOG_OUT:
                localStorage.removeItem("userAuth")
                return {
                      ...store , Auth : false
                }
            default : 
              return store
       }
}