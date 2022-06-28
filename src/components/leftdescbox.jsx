import styled from "styled-components";

const Leftdescbox=({pdata})=>{
    const Mleftbox=styled.div`
      display:inline-block;
      width:42%;
      margin-left:250px;
      border:1px solid blue;
      padding:10px;
    `;
    
     console.log(pdata)
    return(
        <Mleftbox>
          
        </Mleftbox>
    )
}
export {Leftdescbox}
