import './App.css'
import Home from './pages/home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rooms from './pages/Rooms.tsx';
import Contact from './pages/Contact.tsx';
import Dining_Bar from './pages/Dining_Bar.tsx';


function App() {
  return(
    <div>
      
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/room" element={<Rooms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/dining' element={<Dining_Bar/>}/>
          
        </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App
