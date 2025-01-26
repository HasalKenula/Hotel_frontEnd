import Double from '../assets/double.jpg'
import Single from '../assets/single.jpg'
import Honeymoon from '../assets/honeymoon.jpg'
import Economy from '../assets/economy.jpg'
function Accomodation() {
    return (
        <div className="flex flex-col justify-center items-center w-full lg:h-[700px] h-[1800px] md:h-[2150px] m-auto ">

            <div className="m-6 font-bold lg:text-6xl md:text-4xl text-3xl playfair-display-uniquifier">
                <p>Hotel Accomodation</p>

            </div>

            <div className="text-slate-500 mb-8 playfair-display-uniquifier">
                <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast,</p>
            </div>

            <div className="lg:flex lg:flex-row  flex-col w-full flex  lg:h-1/2 lg:m-0 lg:flex-nowrap flex-wrap  ">
                <div className="lg:w-1/4 p-4  lg:mr-8  rounded-3xl lg:ml-10 mt-5 md:w-4/6 lg:m-0 m-auto">
                    <div className="h-4/6 bg-gray-200 rounded-3xl ">
                        <img src={Double} className="object-cover w-full h-full rounded-3xl" alt="Double room" />
                    </div>
                    <div className="flex font-bold justify-center m-2">
                        <p> Double Deluxe Room</p>

                    </div>
                    <div className="flex justify-center m-2">
                        <p>$250/night</p>
                    </div>
                    <div className="flex justify-center m-2">
                        <a href='/room'>
                            <button className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200">
                                Book Now
                            </button>
                        </a>
                    </div>
                </div>


                <div className="lg:w-1/4 p-4  lg:mr-8  lg:ml-8 rounded-3xl lg:m-0 mt-5 md:w-4/6 m-auto">
                    <div className="h-4/6 bg-gray-200 rounded-3xl">
                        <img src={Single} className="object-cover w-full h-full rounded-3xl" alt="Double room" />
                    </div>
                    <div className="flex font-bold justify-center  m-2">
                        <p>Single Deluxe Room</p>

                    </div>
                    <div className="flex justify-center  m-2">
                        <p> $200/night</p>
                    </div>
                    <div className="flex justify-center m-2">
                        <a href='/room'>
                            <button className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200">
                                Book Now
                            </button>
                        </a>
                    </div>
                </div>


                <div className="lg:w-1/4 p-4 lg:mr-8  lg:ml-8 rounded-3xl lg:m-0 mt-5 md:w-4/6 m-auto">
                    <div className="h-4/6 bg-gray-200 rounded-3xl">
                        <img src={Honeymoon} className="object-cover w-full h-full rounded-3xl" alt="Double room" />
                    </div>
                    <div className="flex font-bold justify-center  m-2">
                        <p>Honeymoon Suit</p>
                    </div>
                    <div className="flex justify-center  m-2">
                        <p>$750/night</p>
                    </div>
                    <div className="flex justify-center m-2">
                        <a href='/room'>
                            <button className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200">
                                Book Now
                            </button>
                        </a>
                    </div>
                </div>


                <div className="lg:w-1/4 p-4  lg:ml-8 rounded-3xl lg:mr-8 lg:m-0 mt-5 md:w-4/6 m-auto">
                    <div className="h-4/6 bg-gray-200 rounded-3xl">
                        <img src={Economy} className="object-cover w-full h-full rounded-3xl" alt="Double room" />
                    </div>
                    <div className="flex font-bold justify-center  m-2">
                        <p>Economy Double</p>


                    </div>
                    <div className="flex justify-center  m-2">
                        <p>$200/night</p>
                    </div>
                    <div className="flex justify-center m-2">
                        <a href='/room'>
                            <button className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200">
                                Book Now
                            </button>
                        </a>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Accomodation;