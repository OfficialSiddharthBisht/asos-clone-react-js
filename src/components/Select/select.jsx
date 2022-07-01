import "./Select.css";
import React from "react";
export const Select = ({handleSort,SetFilterType,SetColour}) => {
const [sortType,SetSortType] = React.useState("")
const [filterType,SetfilterType] = React.useState("")
const [colour,SetColorType] = React.useState("")


handleSort = (sortType) 
SetFilterType(filterType)
SetColour(colour)


console.log("colour type is" , colour)
  return (
   <div>
     <h3 className="info">Men's Sale</h3>
      <p className="para">Looking for something new? Discover emerging trends, the latest clothing for men and the freshest new fits with our ASOS New In page. From sharp office shirts and suits to see you right through to 5PM, to the shorts, tees and vests that’ll keep you looking fresh– you can find the look here as soon as it lands. What’s more, our men’s new clothing selection includes all those accessory touches that make the difference, from laidback caps and timeless shades to boardroom-ready watches and belts.
      </p>
    <div className="select-div">
      <select className="select" value={sortType} onChange={(e)=>SetSortType(e.target.value)}  >
        <option value="">Sort</option>
        <option value="highToLow">Price high to low</option>
        <option value="lowToHigh">Price low to high</option>
      </select>

      <select  className="select" value={filterType} onChange={(e)=>SetfilterType(e.target.value)}>
        <option value="">Category</option>
        <option value="bag">bag</option>
        <option value="t-shirt">t-shirt</option>
        <option value="cap">cap</option>
        <option value="socks">socks</option>
      </select>
      <br />
      <select name="" className="select" value={colour} onChange={(e)=>SetColorType(e.target.value)}>
        <option value="">Colour</option>
        <option value="Black">Black</option>
        <option value="Blue">Blue</option>
        <option value="Dark Navy">Dark Navy</option>
        <option value="Yellow">Yellow</option>
        <option value="White">White</option>
      </select>


      <select name="" className="select">
        <option value="">Responsible</option>
        <option value="">Recycled(4)</option>
        <option value="">Sustainable Material</option>
      </select>
      <select name="" className="select">
        <option value="">Sale/New Season</option>
        <option value="">New Season(4)</option>
        <option value="">Sale</option>
      </select>
      <select name="" className="select" >
        <option value="">Product type</option>
        <option value="">Accessories(5)</option>
        <option value="">Face + Body(1)</option>
        <option value="">Footwear</option>
        <option value="">Jeans & Trousers</option>
        <option value="">Knitwear& Sweats</option>
     
        <option value="">Outwear(6)</option>
        <option value="shorts" >Shorts</option>
        <option value="">Swimwear</option>
        <option value="">Tops</option>
        <option value="">Underwear& Nightwear</option>
      </select>
      <select name="" className="select">
        <option value="">Style</option>
        <option value="">5-Panel(10)</option>
        <option value="">Across Body(30)</option>
        <option value="">A Line</option>
        <option value="">Ankle(6)</option>
        <option value="">Ankle Strap(5)</option>
        <option value="">Aviator(3)</option>
        <option value="">Baker Boy</option>
        <option value="">Caps</option>
        <option value="">Barrel(8)</option>
        <option value="">Baseball</option>
        <option value="">Beret(3)</option>
        <option value="">Biker</option>
        <option value="">Blanket(26)</option>
        <option value="">Boat shoes</option>
        <option value="">Bomber Coats</option>
        <option value="">Bomber Jackets</option>
        <option value="">Bootcut</option>
        <option value="">Boyfriend</option>
        <option value="">Cable</option>
        <option value="">Cagoule</option>
        <option value="">Cargo Shorts</option>
        <option value="">Cargo Trousers</option>
      </select>
      <select name="" className="select">
        <option value="">Discount%</option>
        <option value="">Up to 20%</option>
        <option value="">20% - 30%</option>
        <option value="">30% - 40%</option>
        <option value="">40% - 50%</option>
        <option value="">50% - 60%</option>
        <option value="">60% - 70%</option>
      </select>
      <select name="" id="select">
        <option value="">Style</option>
        <option value="">ASOS 4505</option>
        <option value="">ASOS DESIGN(30)</option>
        <option value="">ASOS EDITION</option>
        <option value="">ASOS MADE IN</option>
        <option value="">ASOS Unrvlld Spply(1)</option>
      </select>
    
      <select name="" className="select">
        <option value="">Size</option>
        <option value="">UK2</option>
        <option value="">UK3.5</option>
        <option value="">UK4</option>
        <option value="">UK5</option>
        <option value="">UK6</option>
      </select>
    </div>
   </div>
  );
};
