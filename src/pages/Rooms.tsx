import Dining from "./dining.tsx";
import Facilities from "./facilities.tsx";
import Swimming from "./swimming.tsx";
import One from './welcome.tsx'
import Two from './accomodation.tsx'
import Single from '../assets/double.jpg'
import { useEffect, useState } from 'react';
import Gallary from './two.tsx';
import Comment from './Comments.tsx'
import Footer from "./Footer.tsx";
import RoomDetails from "./RoomDetails.tsx";
import { Link } from "react-router-dom";



function Rooms() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    // Detect when the page is scrolled past the navbar
    if (window.scrollY > 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    // Listen to the scroll event when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div>
      <div className="relative w-full h-[400px] overflow-hidden">

        <img src={Single} className="object-cover w-full h-full" alt="Double room" />

      </div>
      <div className="absolute top-0 left-0 w-full h-[400px] bg-black opacity-50"></div>

      {/* Navbar */}
      <nav className={`fixed   top-0 left-0 w-full  text-white py-4 z-10 ${isFixed ? "bg-black text-white" : "bg-transparent text-white"
        } `}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* Logo or Website Title */}
          <div className="text-2xl font-bold text-blue-400">Marina</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {/* <Link to="/" className="hover:text-gray-400">Home</Link> */}
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="/about" className="hover:text-blue-400">About</a>
            <a href="/room" className="hover:text-blue-400">Accomodation</a>
            <a href="/dining" className="hover:text-blue-400">Dining</a>
            <a href="/contact" className="hover:text-blue-400">Contact</a>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "->" : "☰"} {/* Toggle between '☰' and '×' */}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-800 text-white`}>
          <div className="flex flex-col items-center py-4 space-y-4">
            {/* <Link to="/" className="hover:text-gray-400">Home</Link> */}
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="/about" className="hover:text-blue-400">About</a>
            <a href="/room" className="hover:text-blue-400">Accomodation</a>
            <a href="/dining" className="hover:text-blue-400">Dining</a>
            <a href="/contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      <div className="absolute top-0 left-0 w-full  h-[400px] flex flex-col items-center justify-center text-white px-4">
        {/* Title */}
        <div className="md:text-9xl text-7xl font-bold mb-4">
          <span className='md:text-5xl text-3xl'>Hotel </span> Rooms
        </div>
        {/* Caption */}
        <div className="text-xl font-light">
          Discover a hotel that defines a new dimension of luxury.
        </div>
      </div>



      <RoomDetails />


    </div>


  )
}


export default Rooms;