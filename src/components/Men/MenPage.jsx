import MenProduct from './MenProduct'
import { useEffect,useState } from "react";
import { Select } from "../Select/select";

export function MenPage() {
    const [data,setData] = useState([]);
    const [sortType,SetSortType] = useState("")
    const [filterType,SetFilterType] = useState("")
    const [colour,SetColour] = useState("")    
    console.log("type of filter",filterType)
    console.log("type of colour",colour)

console.log("sorttype is" ,sortType)
  useEffect(() => {
    fetchData();
  }, [colour],[filterType]);

  const fetchData = () => {
    if(colour=="" ){
      fetch(`http://localhost:8080/men-all?q=${filterType}`) .then((res) => res.json()).then((res)=>{
      setData(res)
    })
    }
    else {
      fetch(`http://localhost:8080/men-all?q=${filterType}&colour=${colour}`) .then((res) => res.json()).then((res)=>{
      setData(res)
    })
    }

      
  };
  const handleSort = (value) =>{
    SetSortType(value)
  }
  // const handleFilter = (value) =>{
  //   console.log("filter",value)
  //   SetFilterType(value)
  //   }


  return (
    <div className="App">
       <Select handleSort={handleSort} SetFilterType={SetFilterType} SetColour={SetColour}/>
      <div id="box">
        {
        data.map((e) => {
          return (
            <MenProduct
              id={e.id}  
              image={e.imageUrl[0]}
              name={e.name}
              priceCurr={e.price.current.text}
              pricePrev = {e.price.previous.text}
            />
          );
        })}
      </div>
    </div>
  )
      }
export default MenPage
