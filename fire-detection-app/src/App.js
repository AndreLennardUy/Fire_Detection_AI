import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import { Navbar } from './Components/Navbar';
import './index.css';
import FireDetection from './Components/Fire-Detection';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [details, setDetails] = useState([]);
  const [imgPath, setImgPath] = useState("");

  useEffect(() => {
    console.log(imgPath)
    axios.post('https://localhost:64438/predict?imagePath=C%3A%5CIS%5CFire_Detection_AI%5Cdataset%5CFire-Detection%5CFire%20Photo%5C' + imgPath)
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

  const location = useLocation();

  return (
    <div className='container'>
      <Navbar activeRoute={location.pathname} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fire-detection' element={<FireDetection imgPath={handleImgPath} data={details} img={imgPath} />} />
      </Routes>
    </div>
  );
}

export default App;
