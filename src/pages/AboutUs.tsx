import { useEffect, useState } from 'react';
import Footer from "./Footer.tsx";
import Single from '../assets/single.jpg'



function AboutUs() {
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
                        <div className="text-2xl font-bold">Marina</div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-4">
                            <a href="#" className="hover:text-gray-400">Home</a>
                            <a href="#" className="hover:text-gray-400">About</a>
                            <a href="#" className="hover:text-gray-400">Services</a>
                            <a href="#" className="hover:text-gray-400">Contact</a>
                        </div>

                        {/* Hamburger Icon for Mobile */}
                        <button
                            className="md:hidden text-2xl"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? "×" : "☰"} {/* Toggle between '☰' and '×' */}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-800 text-white`}>
                        <div className="flex flex-col items-center py-4 space-y-4">
                            <a href="#" className="hover:text-gray-400">Home</a>
                            <a href="#" className="hover:text-gray-400">About</a>
                            <a href="#" className="hover:text-gray-400">Services</a>
                            <a href="#" className="hover:text-gray-400">Contact</a>
                        </div>
                    </div>
                </nav>

                <div className="absolute top-0 left-0 w-full  h-[400px] flex flex-col items-center justify-center text-white px-4">
                    {/* Title */}
                    <div className="md:text-9xl text-7xl font-bold mb-4">
                        <span className='md:text-5xl text-3xl'>Hotel </span> Marina
                    </div>
                    {/* Caption */}
                    <div className="text-xl font-light">
                        Discover a hotel that defines a new dimension of luxury.
                    </div>
                </div>



            </div>

            <div className="lg:flex justify-center items-center w-full min-lg:h-[700px] min-md:h-[1000px] min-h-[850px] m-auto bg-green-200 ">


                <div className="lg:w-1/2 m-10">
                    <img
                        src={Single}
                        alt="Hotel Welcome"
                        className="w-full md:h-[600px] h-[300px] object-cover rounded-lg shadow-lg" // Ensures responsive, scalable image
                    />
                </div>



                <div className="lg:w-1/2 lg:p-5  relative w-full bg-opacity-90 bg-slate-100  rounded-lg min-lg:h-2/3 m-0 lg:mr-8 p-3">

                    <div className="lg:text-xl font-bold text-sm  md:text-xl text-slate-400 pt-4">Stay with our luxury rooms</div>
                    <div className="lg:text-2xl font-bold text-2xl  md:text-xl text-blue-400 pt-2 pb-8 ">Our Story</div>
                    <p className="mb-4">
                        Welcome to Hotel Marina, a destination where tradition meets modern elegance.
                        Established in 2000, our hotel has been a cornerstone of Colombo 07,
                        providing exceptional hospitality to travelers from around the globe for over 23  years.
                    </p>
                    <p className="mb-4">
                        What began as a humble guesthouse has grown into a
                        landmark of comfort and luxury. Built on the foundation of
                        Mr. John Smith's vision,
                        our property has preserved its timeless charm while evolving to meet the needs of contemporary travelers.
                    </p>
                    <p className="mb-4">
                        Over the decades, Hotel Marina has hostedcelebrities. Each room and corner tells a story—be it of
                        the grandeur of the Victorian Era or the modern refinements added through our recent renovations in 2000.
                    </p>

                    <p className="mb-4">
                        Today, Hotel Marina continues to blend its rich heritage with modern amenities,
                        offering guests the perfect balance of comfort, style, and personalized service. Whether you're
                        here for business or leisure, our commitment to hospitality ensures that every stay is memorable.
                    </p>

                    <p className="mb-2">
                        We invite you to become part of our story. Stay with us and experience the legacy
                        of Hotel Marina—where history, elegance, and excellence converge.
                    </p>

                    <button className="bg-blue-400  text-white font-semibold mt-12 py-2 px-4 rounded-lg hover:bg-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200">
                        Learn More
                    </button>

                </div>

            </div>




            <div className="flex flex-col justify-center items-center w-full lg:h-[900px] md:h-[1400px] min-h-[900px]  m-auto  bg-slate-100">


                <div className="text-slate-500 lg:mb-4 mb-2 font-bold">
                    <p>OUR KIND STAFF</p>
                </div>

                <div className="m-6 font-bold lg:text-6xl md:text-4xl text-3xl">
                    <p>Our Staff</p>

                </div>

                <div className="lg:flex lg:flex-row  flex-col w-full flex-bg-blue-400 lg:h-2/3 lg:m-0 lg:flex-nowrap flex-wrap  ">
                    <div className="lg:w-1/3 p-4  lg:mr-8  md:rounded-3xl lg:ml-10 mt-5 md:w-4/6 lg:m-0 m-auto  lg:border-0 md:border-2 lg:shadow-2xl md:shadow-xl ">
                        <div className="h-2/5  rounded-3xl flex  justify-center items-center ">
                            <img
                                src={Single}
                                className="object-cover w-32 h-32 rounded-full"
                                alt="Double room"
                            />

                        </div>

                        <div className="flex justify-center m-1 font-bold text-slate-500">
                            <p>General Manager</p>
                        </div>

                        <div className="flex font-bold justify-center m-1 text-2xl text-blue-400">
                            <p> Michelle Aguilar</p>

                        </div>
                       
                        <div className="flex justify-center text-center">
                            Michelle Aguilar leads Hotel Marina with a passion for exceptional
                            hospitality and over 17 years of industry experience. Dedicated
                            to creating memorable guest experiences, she combines expert leadership with a focus on personalized
                            service. Under her guidance, the hotel continues to thrive as a premier destination for comfort and elegance.
                        </div>

                    </div>


                    <div className="lg:w-1/3 p-4 lg:mr-8  md:rounded-3xl lg:ml-10 mt-5 md:w-4/6 lg:m-0 m-auto lg:border-0 md:border-2 lg:shadow-2xl md:shadow-xl">
                        <div className="h-2/5 rounded-3xl flex  justify-center items-center ">
                            <img
                                src={Single}
                                className="object-cover w-32 h-32 rounded-full"
                                alt="Double room"
                            />

                        </div>
                        
                        <div className="flex justify-center m-1 font-bold text-slate-500">
                            <p>Assistant General Manager</p>
                        </div>

                        <div className="flex font-bold justify-center m-1  text-2xl text-blue-400">
                            <p>Chris Standworth</p>

                        </div>

                        <div className="flex justify-center text-center ">

                            Chris Standworth brings 15 years of hospitality expertise to his role as Assistant
                            General Manager at Hotel Marina. With a focus on delivering exceptional guest
                            experiences and ensuring smooth daily operations, Chris works closely with the team to maintain
                            the hotel's high standards. Known for his leadership and dedication, Chris is
                            passionate about creating a welcoming environment for every guest.

                        </div>

                    </div>


                    <div className="lg:w-1/3 p-4  lg:mr-8  md:rounded-3xl lg:ml-10 mt-5 md:w-4/6 lg:m-0 m-auto  lg:border-0 md:border-2 lg:shadow-2xl md:shadow-xl">
                        <div className="h-2/5 rounded-3xl flex  justify-center items-center ">
                            <img
                                src={Single}
                                className="object-cover w-32 h-32 rounded-full"
                                alt="Double room"
                            />

                        </div>
                       
                        <div className="flex justify-center m-1 font-bold text-slate-500">
                            <p>Front Office Manager</p>
                        </div>

                        <div className="flex font-bold justify-center m-1  text-2xl text-blue-400">
                            <p>Rob McDonald</p>

                        </div>


                        <div className="flex justify-center text-center">
                            With over 12 years of experience in hospitality, Rob McDonald leads
                            the front office team at Hotel Marina, ensuring every guest receives
                            exceptional service. Known for his attention to detail and friendly approach,
                            Rob oversees guest check-ins, reservations, and concierge services, creating a seamless and welcoming experience.
                            His commitment to excellence makes him a key part of the Hotel Marina family, dedicated to making every stay memorable.

                        </div>

                    </div>

                </div>
            </div>
            <Footer/>


        </div>


    )
}


export default AboutUs;