
import './App.css'

import Home from './pages/home.tsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rooms from './pages/Rooms.tsx';

function App() {
  return(
    <div>
      
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/room" element={<Rooms />} />
          

          
        </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App
