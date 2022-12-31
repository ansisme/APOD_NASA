import React,{useState,useEffect} from "react";
import Header from './components/Header/Header';
import axios from 'axios';
const App=()=> {
const [nasadata, setNasadata] = useState([]);
const api = process.env.NASA_API_KEY;
useEffect(()=>{ 
   async function getNasaData(){
       const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api}&count=1&media_type=image`)
       setNasadata(res.data);
       console.log(res.data);
}
   getNasaData();
})
  return (
  <>
    <Header/>
    <img src={nasadata.url} alt="nasa" />
    <p>{nasadata.explanation}</p>
    <h6>{nasadata.date}</h6>
    <p>{nasadata.thumnail_url}</p>
  </>
    
  );

}

export default App;
