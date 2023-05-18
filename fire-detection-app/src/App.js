import { Route , Routes } from 'react-router-dom';
import Home from './Components/Home';
import { Navbar } from './Components/Navbar';
import './index.css';

function App() {
  return (
    <div className='container'>
    <Navbar />
    <Routes>
      <Route path='/' element ={ <Home/> } />
    </Routes>
    </div>
  );
}

export default App;
