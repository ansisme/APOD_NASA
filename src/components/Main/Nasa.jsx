import React, { useState, useEffect }  from 'react'
import Header from '../../components/Header/Header.jsx'; 
const Nasa = () => {
    const REACT_APP_NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
    const [nasadata, setNasadata] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      getNasaData();
  
      async function getNasaData() {
        setLoading(true);
        try {
          const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_NASA_API_KEY}`);
          const data = await res.json();
          setNasadata(data);
        } catch (error) {
          console.error("Error fetching NASA data:", error);
        } finally {
          setLoading(false);
        }
      }
  
      console.log(nasadata); // Log the fetched data
  
    }, []);
  
    if (loading) {
      return (
        <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" className='loader' alt="loading" />
      );
    }
  
    return (
      <>
        <Header />
        <div className="nasadata">
          <h2>{nasadata.title}</h2><br></br>
          <h4>{nasadata.date} </h4>
          <img src={nasadata.url} alt="nasa" />
          <p>{nasadata.explanation}</p>
          <p>{nasadata.thumnail_url}</p>
          <h5>Copyright @Anshul 2023</h5>
        </div>
      </>
    );
  };


export default Nasa