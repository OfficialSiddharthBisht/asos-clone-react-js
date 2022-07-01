export const cart_page_Loading="cart_page_Loading";
export const cart_page_Success="cart_page_Success";
export const cart_page_Failure="cart_page_Failure";
export const Inc_cart_count="Inc_cart_count";
export const cart_subtotal="cart_subtotal"

export const cartLoading=()=>({
  type:cart_page_Loading
});
export const cartSuccess=(payload)=>({
    type:cart_page_Success,
    payload
  });
  export const cartError=()=>({
    type:cart_page_Failure
  });
  export const incCart=(payload)=>({
    type:Inc_cart_count,
    payload
  })
  export const cartsubtotal=(payload)=>({
    type:cart_subtotal,
    payload
  })
  
  export const getcartdata=({productid})=>
    async(dispatch)=>{
        try {
            dispatch(cartLoading());
            let res=await fetch(`http://localhost:8080/cart`);
            // console.log(res)
            let data=await res.json();
            //console.log(data)
            dispatch(cartSuccess(data));
        } catch (error) {
           // console.log(error)
            dispatch(cartError())
        }
    };