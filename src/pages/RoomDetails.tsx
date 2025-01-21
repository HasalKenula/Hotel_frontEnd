import Welcome1 from '../assets/welcome1.jpg'
import Welcome2 from '../assets/welcome2.jpg'
import Double from '../assets/double.jpg'
import Single from '../assets/single.jpg'
import Honeymoon from '../assets/honeymoon.jpg'
import Economy from '../assets/economy.jpg'
import Booking from './Booking'
import { Icon } from "@iconify/react";
import Footer from './Footer'


function RoomDetails() {
    return (
        <div>
            <div className="lg:flex justify-center items-center w-full lg:h-[700px] md:h-[1200px] h-[1050px] m-auto  ">


                <div className="lg:w-1/2 m-10  ">
                    <img
                        src={Double}
                        alt="Hotel Welcome"
                        className="w-full lg:h-[400px] md:h-[600px] h-[300px] object-cover rounded-lg shadow-lg" // Ensures responsive, scalable image
                    />
                </div>



                <div className="lg:w-1/2 lg:p-5  relative w-full bg-opacity-30 border-0 shadow-2xl bg-white rounded-lg lg:h-3/4 m-0 lg:mr-8 p-3">

                    <div className="lg:text-xl font-bold text-sm  md:text-xl text-slate-400 pt-4">$250/night</div>
                    <div className="lg:text-2xl font-bold text-2xl  md:text-xl text-blue-400 pt-2 pb-8">Double Deluxe Room</div>
                    <p >
                        Our Double Deluxe Room offers a spacious and elegant retreat for couples or friends. With a blend of modern luxury and comfort, this room is designed to provide a relaxing and memorable experience. Whether you're here for business or leisure, it's the perfect choice for a peaceful stay.
                    </p>
                    <div className='text-2xl'>Facilities:</div>
                    <div className="space-y-4">
                        <ul className="list-disc pl-6">
                            <li>King-sized bed or two twin beds with premium linens</li>
                            <li>En-suite bathroom with a rain shower and high-end toiletries</li>
                            <li>Complimentary high-speed Wi-Fi</li>
                            <li>Flat-screen TV with satellite channels</li>
                            <li>Air conditioning with adjustable climate control</li>
                            <li>In-room safe for secure storage</li>
                            <li>Coffee and tea making facilities</li>

                        </ul>
                    </div>
                    <p>Enjoy the ultimate comfort and convenience in our Double Deluxe Room, where every detail is tailored for your satisfaction.</p>



                </div>

            </div>






            <div className="lg:flex justify-center items-center w-full lg:h-[700px] md:h-[1200px] h-[950px] m-auto  ">





                <div className="lg:w-1/2 lg:p-5  relative w-full bg-opacity-30 border-0 shadow-2xl bg-white rounded-lg lg:h-3/4 m-0 lg:ml-8 p-3 ">

                    <div className="lg:text-xl font-bold text-sm  md:text-xl text-slate-400 pt-4">$200/night</div>
                    <div className="lg:text-2xl font-bold text-2xl  md:text-xl text-blue-400 pt-2 pb-8">Single Deluxe Room</div>
                    <p >
                        Our Single Deluxe Room offers a comfortable and stylish space for solo travelers. Featuring a plush single bed, modern decor, and essential amenities, it's the ideal retreat for both relaxation and productivity.
                    </p>
                    <div className='text-2xl'>Facilities:</div>
                    <div className="space-y-4">
                        <ul className="list-disc pl-6">
                            <li>Single bed with premium bedding</li>
                            <li>Private bathroom with rain showeri</li>
                            <li>Complimentary Wi-Fi</li>
                            <li>Flat-screen TV with satellite channels</li>
                            <li>Air conditioning</li>
                            <li>In-room safe</li>
                            <li>Mini-bar and coffee/tea maker</li>
                            <li>Work desk and room service</li>
                        </ul>
                    </div>
                    <p>Enjoy a cozy and convenient stay with all the comforts you need.</p>



                </div>


                <div className="lg:w-1/2 m-10">
                    <img
                        src={Single}
                        alt="Hotel Welcome"
                        className="w-full lg:h-[400px] md:h-[600px] h-[300px] object-cover rounded-lg shadow-lg" // Ensures responsive, scalable image
                    />
                </div>

            </div>








            <div className="lg:flex justify-center items-center w-full lg:h-[700px] md:h-[1200px] h-[950px] m-auto ">


                <div className="lg:w-1/2 lg:m-10 ml-10 mr-10 mb-10">
                    <img
                        src={Honeymoon}
                        alt="Hotel Welcome"
                        className="w-full lg:h-[400px] md:h-[600px] h-[300px] object-cover rounded-lg shadow-lg" // Ensures responsive, scalable image
                    />
                </div>



                <div className="lg:w-1/2 lg:p-5  relative w-full bg-opacity-30 border-0 shadow-2xl bg-white rounded-lg lg:h-3/4 m-0 lg:mr-8 p-3">

                    <div className="lg:text-xl font-bold text-sm  md:text-xl text-slate-400 pt-4">$750/night</div>
                    <div className="lg:text-2xl font-bold text-2xl  md:text-xl text-blue-400 pt-2 pb-8">Honeymoon Suit</div>
                    <p >
                        Our Honeymoon Suite is a romantic haven designed for couples looking to celebrate their special moments. With luxurious amenities and an intimate atmosphere, it provides the perfect setting for a memorable stay.
                    </p>
                    <div className='text-2xl'>Facilities:</div>
                    <div className="space-y-4">
                        <ul className="list-disc pl-6">
                            <li>King-sized bed with premium linens</li>
                            <li>En-suite bathroom with Jacuzzi or bathtub</li>
                            <li>Complimentary high-speed Wi-Fi</li>
                            <li>Flat-screen TV with satellite channels</li>
                            <li>Air conditioning</li>
                            <li>Mini-bar and coffee/tea maker</li>
                            <li>Private balcony with stunning views</li>

                        </ul>
                    </div>
                    <p> Escape to the Honeymoon Suite for a truly unforgettable experience, where comfort and romance come together seamlessly.</p>



                </div>

            </div>




            <div className="lg:flex justify-center items-center w-full lg:h-[700px] md:h-[1200px] h-[1050px] m-auto ">





                <div className="lg:w-1/2 lg:p-5  relative w-full bg-opacity-30 border-0 shadow-2xl bg-white rounded-lg lg:h-3/4 m-0 lg:ml-8 p-3 ">

                    <div className="lg:text-xl font-bold text-sm  md:text-xl text-slate-400 pt-4">$200/night</div>
                    <div className="lg:text-2xl font-bold text-2xl  md:text-xl text-blue-400 pt-2 pb-8">Economy Double</div>
                    <p >
                        Our Economy Double Room offers a comfortable and affordable option for couples or friends. With essential amenities and a cozy atmosphere, it provides everything you need for a pleasant stay without compromising on quality.
                    </p>
                    <div className='text-2xl'>Facilities:</div>
                    <div className="space-y-4">
                        <ul className="list-disc pl-6">
                            <li>Comfortable double bed with premium bedding</li>
                            <li>Private bathroom with essential toiletries</li>
                            <li>Complimentary Wi-Fi</li>
                            <li>Flat-screen TV with cable channels</li>
                            <li>Air conditioning</li>
                            <li>In-room safe</li>
                            <li>Coffee and tea making facilities</li>
                            <li>24-hour room service</li>
                        </ul>
                    </div>
                    <p>Ideal for travelers seeking value and comfort, the Economy Double Room ensures a relaxing and convenient stay.</p>



                </div>


                <div className="lg:w-1/2 m-10">
                    <img
                        src={Economy}
                        alt="Hotel Welcome"
                        className="w-full lg:h-[400px] md:h-[600px] h-[300px] object-cover rounded-lg shadow-lg" // Ensures responsive, scalable image
                    />
                </div>

            </div>






            <div className="lg:flex justify-center items-center w-full lg:h-[700px] md:h-[1200px] h-[1250px] m-auto  aligns-items">

                <div className="lg:w-1/2 lg:p-5  relative w-full bg-opacity-90 bg-black rounded-lg lg:h-3/3 m-0 lg:ml-8 p-3 flex flex-col items-center justify-center ">
                    <div className='m-4 text-6xl font-bold text-blue-400'>
                        Hotel Booking
                    </div>




                    <p className='text-slate-500'>Experience something new every moment</p>


                    <Icon icon="material-symbols:double-arrow" width="400px" height="400px" color="#60a5fa" className="animate-pulse " />

                </div>


                <div className="lg:w-1/2 lg:p-5  relative w-full rounded-lg lg:h-3/3 m-0 lg:mr-8 p-3 flex justify-center">


                    <Booking />

                </div>

            </div>

            <div className='m-0 p-0'>
                <Footer />
            </div>










        </div>
    )
}

export default RoomDetails;
;