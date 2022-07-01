import MenProduct from './MenProduct'
import { useEffect,useState } from "react";
import { Select } from "../Select/select";
import {Link} from "react-router-dom"

export function MenPage() {
    const [data,setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  

  const fetchData = async () => {
    const Data = await fetch("http://localhost:8080/men-all") .then((res) => res.json())
    setData(Data)
  };

  return (
    <div className="App">
       <Select/>
      <div id="box">
        {data.map((e) => {
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
