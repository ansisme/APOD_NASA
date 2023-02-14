import React,{useState,useEffect} from "react";
import Header from './components/Header/Header';
import './App.css';
import axios from 'axios';
import Card from './components/Card/Card';
const App=()=> {
const [nasadata, setNasadata] = useState([]);
const [loading, setLoading] = useState(false);
const api = process.env.NASA_API_KEY;
useEffect(()=>{ 
 getNasaData();
   async function getNasaData(){
    setLoading(true);
       const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=0sjtOnurfaDY11BDkgjYrNOcaYstUZFeOyZlbImI`)
       const data = await res.json();
       setNasadata(data);
       setLoading(false);
      }
    getNasaData();
   console.log(nasadata);
}, []);

if(!nasadata){
  return (
    <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading" />
    )
}
const handleData=(event)=>{
  setNasadata(event.target.value);
};
  return (
  <>
    <Header/>
    <div className="nasadata">
         <h2>{nasadata.title}</h2><br></br>
         <h4>{nasadata.date} </h4>
        <img src={nasadata.url} alt="nasa"  />
        <p>{nasadata.explanation}</p>
        <p>{nasadata.thumnail_url}</p>
        <h5>Copyright @Anshul 2023</h5>
      </div>
      
  </>
    
  );

}

export default App;
