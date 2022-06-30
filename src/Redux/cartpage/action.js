export const cart_page_Loading="cart_page_Loading";
export const cart_page_Success="cart_page_Success";
export const cart_page_Failure="cart_page_Failure";

export const cartLoading=()=>({
  type:Prod_desc_page_Loading
});
export const cartSuccess=(payload)=>({
    type:Prod_desc_page_Success,
    payload
  });
  export const cartError=()=>({
    type:Prod_desc_page_Failure
  });
  
  export const getcartdata=({})=>
    async(dispatch)=>{
        try {
            dispatch(proddescLoading());
            let res=await fetch(`http://localhost:8080/cart`);
            // console.log(res)
            let data=await res.json();
            //console.log(data)
            dispatch(proddescSuccess(data));
        } catch (error) {
           // console.log(error)
            dispatch(proddescError())
        }
    };