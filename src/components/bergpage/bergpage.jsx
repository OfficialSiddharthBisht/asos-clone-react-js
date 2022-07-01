
import { useEffect,useState } from "react";
import { Select } from "../Select/select";

import {Berghause} from"./Berghause"

export function Bergpage() {
  const [data,setData] = useState([])
 
  useEffect(() => {
    fetchData();
  }, []);

  

  const fetchData = async () => {
    const data = await fetch("http://localhost:5000/bargpage").then((d) => d.json());
    setData(data)
  
  };
  return (
    <div className="App">
       <Select/>
      <div id="box">
        {data.map((e) => {
          return (
            <Berghause
              
              image={e.image}
              description={e.Description}
              price={e.Price}
            />
          );
        })}
      </div>
      
    </div>
  );
}



