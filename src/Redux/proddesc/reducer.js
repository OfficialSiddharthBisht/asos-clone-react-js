import {Prod_desc_page_Loading,Prod_desc_page_Success,Prod_desc_page_Failure,Inc_cart_count} from "./action";

export const ProddescReducer=(store={pdata:[],isLoading:false,isError:false,cartCount:0},{type,payload})=>{
    switch(type){
        case Prod_desc_page_Loading:
            return{
                ...store,
                isLoading:true,
                isError:false,
                pdata:[]
            };
        case  Prod_desc_page_Success:
            return{
                ...store,
                isLoading:false,
                isError:false,
                pdata:[payload]
            };
        case  Prod_desc_page_Failure:
            return{
                ...store,
                isLoading:false,
                isError:true,
                pdata:[]
            };
        case  Inc_cart_count:
            return{
               ...store,
               cartCount:store.cartCount+payload
            };    
        default:
            return store;         
    }
}