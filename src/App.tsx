import './App.css'
import Home from './pages/home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rooms from './pages/Rooms.tsx';
import Contact from './pages/Contact.tsx';


function App() {
  return(
    <div>
      
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/room" element={<Rooms />} />
            <Route path="/contact" element={<Contact />} />
            
          
        </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App
