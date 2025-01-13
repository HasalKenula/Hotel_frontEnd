import { Icon } from "@iconify/react";


function Facilities() {
    return (
        <div className="flex flex-col justify-center items-center w-full lg:h-[800px] h-[1500px] md:h-[1200px] m-auto bg-yellow-400 ">

            <div className="m-4 font-bold lg:text-6xl md:text-4xl  text-blue-400 text-3xl">
                <p>Royal Facilities</p>

            </div>

            <div className="text-slate-400 mb-8">
                <p>Who are in extremely love with eco friendly system.</p>
            </div>

            <div className="lg:flex lg:flex-row  flex-col w-full flex-bg-blue-400 lg:h-1/3 lg:m-0 lg:flex-nowrap flex-wrap   ">
                <div className="lg:w-1/3 p-4 bg-opacity-90 bg-black lg:mr-8  rounded-3xl lg:ml-10 mt-5 md:w-4/6 lg:m-0 m-auto">
                    <div className="rounded-3xl flex justify-center items-center mb-2">
                        <div className='mr-5 '>
                            <Icon icon="lucide-lab:fork-knife" width="40px" height="40px" color="#60a5fa" style={{ strokeWidth: 100 }} />

                        </div>
                        <div className='font-bold  text-xl text-white '>
                            Restaurant
                        </div>
                    </div>
                    <div className="flex justify-center  text-white m-auto lg:leading-8 lg:pt-8">
                        <p>"Our hotels restaurant offers a variety of gourmet dishes in a elegant setting. Enjoy  international and local flavors, with room service available for added convenience."</p>

                    </div>

                </div>


                <div className="lg:w-1/3 p-4 bg-opacity-90 bg-black lg:mr-8  rounded-3xl lg:ml-10 mt-5 md:w-4/6 lg:m-0 m-auto">
                    <div className="rounded-3xl flex justify-center items-center mb-2">
                        <div className='mr-5 '>
                            <Icon icon="icon-park-outline:riding" width="40px" height="40px" color="#60a5fa" />

                        </div>
                        <div className='font-bold  text-xl text-white '>
                            Sports Club
                        </div>
                    </div>
                    <div className="flex justify-center  text-white m-auto lg:leading-8 lg:pt-8">
                        <p>"Our hotel features a state-of-the-art sports club with a gym and tennis courts. Stay active with personalized training or enjoy group activities and relaxation in our wellness area"</p>

                    </div>

                </div>


                <div className="lg:w-1/3 p-4 bg-opacity-90 bg-black lg:mr-8  rounded-3xl lg:ml-10 mt-5 md:w-4/6 lg:m-0 m-auto">
                    <div className="rounded-3xl flex justify-center items-center mb-2">
                        <div className='mr-5 '>
                            <Icon icon="hugeicons:swimming" width="40px" height="40px" color="#60a5fa" />

                        </div>
                        <div className='font-bold  text-xl text-white '>
                            Swimming Pool
                        </div>
                    </div>
                    <div className="flex justify-center  text-white m-auto lg:leading-8 lg:pt-8">
                        <p>"Our hotel features a relaxing swimming pool, ideal for both swimming and lounging. Enjoy stunning views and comfortable seating for a perfect poolside experience."</p>

                    </div>
                </div>




            </div>




            <div className="lg:flex lg:flex-row  flex-col w-full flex-bg-blue-400 lg:h-1/3 lg:mt-20 lg:flex-nowrap flex-wrap  ">
                <div className="lg:w-1/3 p-4 bg-opacity-90 bg-black lg:mr-8  rounded-3xl lg:ml-10 mt-5 md:w-4/6 lg:m-0 m-auto">
                    <div className="rounded-3xl flex justify-center items-center mb-2">
                        <div className='mr-5 '>
                            <Icon icon="material-symbols:directions-car-outline-sharp" width="40px" height="40px" color="#60a5fa" />

                        </div>
                        <div className='font-bold  text-xl text-white '>
                            Rent a Car
                        </div>
                    </div>
                    <div className="flex justify-center  text-white m-auto lg:leading-8 lg:pt-8">
                        <p>" Our hotel provides a car rental service for  comfortable transportation during your stay. Choose from a range of well-maintained vehicles to explore at your own pace."</p>

                    </div>
                </div>


                <div className="lg:w-1/3 p-4 bg-opacity-90 bg-black lg:mr-8  rounded-3xl lg:ml-10 mt-5 md:w-4/6 lg:m-0 m-auto">
                    <div className="rounded-3xl flex justify-center items-center mb-2">
                        <div className='mr-5 '>
                            <Icon icon="map:gym" width="40px" height="40px" color="#60a5fa" />

                        </div>
                        <div className='font-bold  text-xl text-white '>
                            Gymnesium
                        </div>
                    </div>
                    <div className="flex justify-center  text-white m-auto lg:leading-8 lg:pt-8">
                        <p>"Our hotel's gym features modern equipment for an energizing workout experience. Stay fit and active during your stay with cardio machines and free weights."</p>

                    </div>

                </div>


                <div className="lg:w-1/3 p-4 bg-opacity-90 bg-black lg:mr-8  rounded-3xl lg:ml-10 mt-5 md:w-4/6 lg:m-0 m-auto">
                    <div className="rounded-3xl flex justify-center items-center mb-2">
                        <div className='mr-5 '>
                            <Icon icon="material-symbols:wine-bar-outline-rounded" width="40px" height="40px" color="#60a5fa" />

                        </div>
                        <div className='font-bold  text-xl text-white '>
                            Bar
                        </div>
                    </div>
                    <div className="flex justify-center  text-white m-auto lg:leading-8 lg:pt-8" >
                        <p>"Our hotel bar offers a variety of premium drinks and cocktails in a relaxed, stylish atmosphere. It's the perfect spot to unwind or socialize with friends and guests."</p>

                    </div>

                </div>



            </div>




        </div>

    )
}

export default Facilities;