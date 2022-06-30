import MenProduct from './MenProduct'
import { useEffect,useState } from "react";
import { Select } from "../Select/select";

export function MenPage() {
    const [data,setData] = useState([]);
 
  useEffect(() => {
    fetchData();
  }, []);

  

  const fetchData = async () => {
    const Data = await fetch("http://localhost:5000/men-all").then((res) => res.json());
    setData(Data)
  };
  console.log("data" , data)
  return (
    <div className="App">
       <Select/>
      <div id="box">
        {data.map((e) => {
          return (
            <MenProduct
              
              image={e.imageUrl}
              name={e.name}
              price={e.price}
            />
          );
        })}
      </div>
      
    </div>
  )
}

export default MenPage
