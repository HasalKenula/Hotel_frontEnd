import Single from '../assets/single.jpg'
import { Icon } from "@iconify/react";
function Footer() {
    return (
        <div className="flex flex-col justify-center items-center w-full lg:h-[550px] h-[1450px] md:h-[1500px] m-auto bg-opacity-90 bg-black">





            <div className="lg:flex lg:flex-row  flex-col w-full flex-bg-blue-400 lg:h-2/3 lg:m-0 lg:flex-nowrap flex-wrap text-white text-sm">
                <div className="lg:w-1/4 p-4   lg:mr-8  rounded-3xl lg:ml-10 mt-5 md:w-4/6 lg:m-0 m-auto lg:border-0 border-slate-500 border-b-4 ">

                    <div className="flex font-bold justify-center m-2 text-slate-500 lg:mb-8">
                        About

                    </div>
                    <div className="flex font-bold justify-center  text-blue-400">
                        Hotel

                    </div>
                    <div className="flex font-bold text-3xl justify-center text-blue-400">
                        Marina

                    </div>
                    <div className="flex justify-center m-2 lg:leading-4 lg:mt-8 text-sm text-center">
                       <p> Mariina is a premier destination offering exceptional hospitality and world-class amenities. Located in the heart of Colombo 7, we provide comfortable accommodations, exquisite dining, and personalized service to make every stay unforgettable. Whether traveling for business or leisure, we strive to create an experience that feels like home.</p>
                    </div>

                </div>


                <div className="lg:w-1/4 p-4  lg:mr-8  lg:ml-8 rounded-3xl lg:m-0 mt-5 md:w-4/6 m-auto lg:border-0 border-slate-500 border-b-4">

                    <div className="flex font-bold justify-center text-slate-500  m-2 mb-3">
                        Navigation Links
                    </div>
                    <div className="flex flex-col items-start items-center m-2">
                        <div className='mb-12'>
                            Home
                        </div>
                        <div className='mb-12'>
                            Accomadation
                        </div>
                        <div className='mb-12'>
                            Dining
                        </div>
                        <div >
                            Contact
                        </div>
                    </div>

                </div>


                <div className="lg:w-1/4 p-4 lg:mr-8  lg:ml-8 rounded-3xl lg:m-0 mt-5 md:w-4/6 m-auto lg:border-0 border-slate-500 border-b-4">

                    <div className="flex font-bold justify-center text-slate-500 m-2 mb-3">
                        Contact
                    </div>
                    <div className="flex flex-col items-start items-center m-2">
                        <div className='flex flex-col  items-start items-center gap-4'>

                            <Icon icon="material-symbols:location-on-outline" width="30px" height="30px" color="#60a5fa" />

                            <div className='m-0 p-0'>
                                "No 23, Ramaanayaka <br /> Road,Colombo 07"
                            </div>

                        </div>
                        <div className='flex flex-col  items-center gap-4'>

                            <Icon icon="material-symbols:call-outline" width="30px" height="30px" color="#60a5fa" />

                            <div>
                                034-2240334
                            </div>
                        </div>
                        <div className='flex flex-col  items-center gap-4'>

                            <Icon icon="material-symbols:mail-outline" width="30px" height="30px" color="#60a5fa" />

                            <div>
                                Marina@gmail.com
                            </div>
                        </div>
                        <div className='flex flex-col  items-center gap-4'>

                            <Icon icon="material-symbols:alarm-outline-rounded" width="30px" height="30px" color="#60a5fa" />

                            <div>
                                Monday-Friday<br />8:00am-5:00pm
                            </div>

                        </div>
                    </div>

                    {/* <div className="flex justify-center m-2 mt-4">
                        <button className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200">
                            Contact Now
                        </button>

                    </div> */}
                </div>


                <div className="lg:w-1/4 p-4  lg:ml-8 rounded-3xl lg:mr-8 lg:m-0 mt-5 md:w-4/6 m-auto lg:border-0 border-slate-500 border-b-4">

                    <div className="flex font-bold justify-center text-slate-500 m-2">
                        InstaFeed

                    </div>
                    <div className="flex flex-col justify-center  m-2 lg:m-8">
                        <div className='flex  justify-center  lg:flex-wrap gap-4   m-2'>
                            <div className="h-2/5 w-2/5">
                                <img src={Single} className="object-cover w-full h-full " alt="Double room" />
                            </div>
                            <div className="h-2/5 w-2/5 ">
                                <img src={Single} className="object-cover w-full h-full " alt="Double room" />
                            </div>
                            <div className="h-2/5 w-2/5">
                                <img src={Single} className="object-cover w-full h-full " alt="Double room" />
                            </div>
                            <div className="h-2/5 w-2/5 ">
                                <img src={Single} className="object-cover w-full h-full " alt="Double room" />
                            </div>
                        </div>

                        <div className='flex  justify-center  lg:flex-wrap gap-4  m-2'>
                            <div className="h-2/5 w-2/5 ">
                                <img src={Single} className="object-cover w-full h-full " alt="Double room" />
                            </div>
                            <div className="h-2/5 w-2/5 ">
                                <img src={Single} className="object-cover w-full h-full " alt="Double room" />
                            </div>
                            <div className="h-2/5 w-2/5 ">
                                <img src={Single} className="object-cover w-full h-full " alt="Double room" />
                            </div>
                            <div className="h-2/5 w-2/5   ">
                                <img src={Single} className="object-cover w-full h-full " alt="Double room" />
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div className="text-slate-500 mt-8  pt-4 border-slatee-500 border-t-2  flex gap-4">
               
            
                    
                    <Icon icon="stash:social-whatsapp" width="30px" height="30px" color="#64748B" />
                    
                    
                    <Icon icon="si:twitter-line" width="30px" height="30px" color="#64748B" />
                    
                
                    <Icon icon="ri:facebook-circle-line" width="30px" height="30px" color="#64748B" />
                
                    
                    <Icon icon="si:youtube-line" width="30px" height="30px" color="#64748B" />
                    


                
            </div>
        </div>
    );
}

export default Footer;