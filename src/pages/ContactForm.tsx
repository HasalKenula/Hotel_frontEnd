import SubContactForm from './SubContactForm';
import ContactMap from "./ContactMap";
import { Icon } from "@iconify/react";
import Footer from './Footer';
function ContactForm() {
    return (
        <div>
            <div className="lg:flex lg:flex-col justify-center items-center w-full lg:h-[300px] md:h-[600px] h-[600px] m-auto  aligns-items ">
                <div className="flex font-bold justify-center text-slate-500 m-2  mb-12 lg:text-2xl playfair-display-uniquifier">
                    Contact
                </div>
                <div className="flex flex-col lg:flex-row  items-start items-center m-2 lg:gap-40">
                    <div className='flex flex-col  items-start items-center lg:m-0 gap-4 mb-12'>

                        <Icon icon="material-symbols:location-on-outline" width="30px" height="30px" color="#60a5fa" />

                        <div className='m-0 p-0'>
                            "No 23, Ramaanayaka <br /> Road,Colombo 07"
                        </div>

                    </div>
                    <div className='flex flex-col  items-center lg:m-0 gap-4 mb-12'>

                        <Icon icon="material-symbols:call-outline" width="30px" height="30px" color="#60a5fa" />

                        <div className='mb-6'>
                            034-2240334
                        </div>
                    </div>
                    <div className='flex flex-col  items-center lg:m-0 gap-4 mb-12'>

                        <Icon icon="material-symbols:mail-outline" width="30px" height="30px" color="#60a5fa" />

                        <div className='mb-6'>
                            Marina@gmail.com
                        </div>
                    </div>
                    <div className='flex flex-col  lg:m-0 items-center gap-4'>

                        <Icon icon="material-symbols:alarm-outline-rounded" width="30px" height="30px" color="#60a5fa" />

                        <div>
                            Monday-Friday<br />8:00am-5:00pm
                        </div>

                    </div>
                </div>
            </div>

            <div className="lg:flex justify-center items-center w-full lg:h-[700px] md:h-[1020px] h-[1020px] m-auto  aligns-items ">

                <div className="lg:w-1/2 lg:p-5  relative w-full  lg:h-3/3 m-0 lg:ml-8 p-3  ">






                    <ContactMap />


                </div>


                <div className="lg:w-1/2 lg:p-5  relative w-full rounded-lg lg:h-3/3 m-0 lg:mr-8 p-3 flex justify-center ">


                    <SubContactForm />

                </div>

            </div>
            <Footer/>
        </div>

    );
}

export default ContactForm;