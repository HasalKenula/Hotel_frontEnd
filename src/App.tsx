
import './App.css'

import Home from './pages/home.tsx'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <div>
      
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Home />} />
            
          

          
        </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App
