import {cart_page_Loading,cart_page_Success,cart_page_Failure,Inc_cart_count,cart_subtotal} from "./action";

export const cartReducer=(store={cdata:[],carttotal:0,isLoading2:false,isError2:false,cartCount:0},{type,payload})=>{
    switch(type){
        case cart_page_Loading:
            return{
                ...store,
                isLoading2:true,
                isError2:false,
                cdata:[]
            };
        case  cart_page_Success:
            return{
                ...store,
                isLoading2:false,
                isError2:false,
                cdata:[payload]
            };
        case  cart_page_Failure:
            return{
                ...store,
                isLoading2:false,
                isError2:true,
                cdata:[]
            };
        case  Inc_cart_count:
            return{
               ...store,
               cartCount:store.cartCount+payload
            };
        case   cart_subtotal:
            return{
                ...store,
                carttotal:payload
            }
        default:
            return store;         
    }
}