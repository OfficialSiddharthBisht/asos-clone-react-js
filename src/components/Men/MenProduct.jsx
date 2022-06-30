import "./MenProduct.css"
import { Link } from "react-router-dom"

export const MenProduct = ({id,image,name,priceCurr,pricePrev})=>{
    return (
       <Link className="link" to={`/Product/${id}`}>
        <div className = "card">
            <div id = "img_div">
               <img id = "image" src={image} alt="img" />
            </div>
            <div id = "desc">{name}</div>
            <div id = "price">  <p id="pricePrev">{pricePrev}</p>  <p  id="priceCurr">{priceCurr}</p></div>
       </div>
       </Link>
        
  )
}

export default MenProduct
