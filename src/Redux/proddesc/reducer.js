import {Prod_desc_page_Loading,Prod_desc_page_Success,Prod_desc_page_Failure} from "./action";

export const ProddescReducer=(store={pdata:[],isLoading1:false,isError1:false},{type,payload})=>{
    switch(type){
        case Prod_desc_page_Loading:
            return{
                ...store,
                isLoading1:true,
                isError1:false,
                pdata:[]
            };
        case  Prod_desc_page_Success:
            return{
                ...store,
                isLoading1:false,
                isError1:false,
                pdata:[payload]
            };
        case  Prod_desc_page_Failure:
            return{
                ...store,
                isLoading1:false,
                isError1:true,
                pdata:[]
            }; 
        default:
            return store;         
    }
}