import { Route , Routes } from 'react-router-dom';
import Home from './Components/Home';
import { Navbar } from './Components/Navbar';
import './index.css';
import FireDetection from './Components/FireDetection';
import axios from 'axios';
import {  useEffect, useState } from 'react';

function App() {
  const [details , setDetails] = useState([]);
  const [imgPath , setImgPath] = useState("");

  useEffect(() => {
    console.log(imgPath)
    axios.post('https://localhost:64438/predict?imagePath=C%3A%5CUsers%5CAndre%20Uy%5COneDrive%20-%20Cebu%20Institute%20of%20Technology%20University%5C3rdYr2ndSem%5CIntel%20System%5CFire_Detection_AI%5Cdataset%5CFire-Detection%5CFire%20Photo%5C' + imgPath)
      .then(res => {
        setDetails(res.data);
        console.log("Working");
      })
      .catch(error => {
        console.log(error);
      });
  }, [imgPath]);
  
  function handleImgPath(event) {
    if (event !== "") {
      setImgPath(event);
    }
  }
  
  return (
    <div className='container'>
    <Navbar />
    <Routes>
      <Route path='/' element ={ <Home/> } />
      <Route path='/fire-detection' element ={ <FireDetection imgPath = {handleImgPath} data = {details} img = {imgPath} /> }/> 
    </Routes>
    </div>
  );
}

export default App;
