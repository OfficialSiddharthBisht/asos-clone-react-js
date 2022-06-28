export const Prod_desc_page_Loading="Prod_desc_page_Loading";
export const Prod_desc_page_Success="Prod_desc_page_Success";
export const Prod_desc_page_Failure="Prod_desc_page_Failure";


export const proddescLoading=()=>({
  type:Prod_desc_page_Loading
});
export const proddescSuccess=(payload)=>({
    type:Prod_desc_page_Success,
    payload
  });
  export const proddescError=()=>({
    type:Prod_desc_page_Failure
  });

  export const getProductdesc=({productid})=>
    async(dispatch)=>{
        try {
            dispatch(proddescLoading());
            //console.log(productid.productid)
            let res=await fetch(`http://localhost:8080/men-all/${productid}`);
            console.log(res)
            let data=await res.json();
            console.log(data)
            dispatch(proddescSuccess(data));
        } catch (error) {
            console.log(error)
            dispatch(proddescError())
        }
    };
  
