import "./MenProduct.css"

export const MenProduct = ({image,name,price})=>{
    console.log("image url is", {image})
    console.log("name is", {name})
    return (
        <div className = "card">
            <div id = "img_div">
               <img id = "image" src={image} alt="img" />
            </div>
            <div id = "desc">{name}</div>
            <div id = "price">£{price}</div>
       </div>
        
  )
}

export default MenProduct
