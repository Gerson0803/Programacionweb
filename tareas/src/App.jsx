import { useState,useEffect } from 'react'
import axios from "axios"
import './App.css'
import Busqueda from './helpers/Busqueda';
function App() {
  const [data, setData] = useState([]);

  const getData=async()=>{
    try{
      const response= await axios.get("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project");
      setData(response.data)
    }catch(error){
      console.error('Error fetching data',error)
    }
  };
  useEffect(() => {
    getData();
}, []);
  return (
    <div>
      
       <>
       <Busqueda data={data} setData={setData} />
       </>
    </div>
  )
}

export default App
