import Dining from "./dining.tsx";
import Facilities from "./facilities.tsx";
import Swimming from "./swimming.tsx";
import One from './welcome.tsx'
import Two from './accomodation.tsx'
import videoFile from '../assets/v.mp4'
import { useEffect, useState } from 'react';
import Gallary from './two.tsx';
import Comment from './Comments.tsx'
import Footer from "./Footer.tsx";
import { Link } from "react-router-dom";



function Home() {
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
      <div className="relative w-full h-screen overflow-hidden">

        <video
          className="w-full h-screen object-cover"
          autoPlay={true}
          loop={true}
          muted={true}
          controls={false}

        >

          <source src={videoFile} type="video/mp4" />

        </video>

      </div>
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50"></div>

      {/* Navbar */}
      <nav className={`fixed   top-0 left-0 w-full  text-white py-4 z-10 ${isFixed ? "bg-black text-white" : "bg-transparent text-white"
        } `}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* Logo or Website Title */}
          <div className="text-2xl font-bold text-blue-400">Marina</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
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
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="/about" className="hover:text-blue-400">About</a>
            <a href="/room" className="hover:text-blue-400">Accomodation</a>
            <a href="/dining" className="hover:text-blue-400">Dining</a>
            <a href="/contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      <div className="absolute top-0 left-0 w-full  h-screen flex flex-col items-center justify-center text-white px-4">
        {/* Title */}
        <div className="md:text-9xl text-7xl font-bold mb-4">
          <span className='md:text-5xl text-3xl'>Hotel </span> Marina
        </div>
        {/* Caption */}
        <div className="text-xl font-light">
          Discover a hotel that defines a new dimension of luxury.
        </div>
      </div>

      <div className='m-5'>
        <One />
      </div>
      <div className='m-5'>
        <Two />
      </div>
      <div className='m-5'>
        <Dining />
      </div>
      <div className='m-5'>
        <Swimming />
      </div>
      <Gallary />
      <div className='m-5'>
        <Facilities />
      </div>
      <div className='m-5'>
        <Comment />
      </div>

      <Footer />



    </div>


  )
}


export default Home;