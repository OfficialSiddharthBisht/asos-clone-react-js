import {USER_DETAIL , GET_ALL_USER} from "./action";

export const userDetailReducer = (store = {users : []} , {type , payload})=>{
        switch(type){
            case USER_DETAIL:
                return {
                    ...store , users : [...store.users , payload]
                }

            case GET_ALL_USER:
                return {
                      ...store , users : payload
                }
            default: 
              return store
        }
}