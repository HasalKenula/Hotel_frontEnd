import Man1 from '../assets/man1.jpg'
import Man2 from '../assets/man2.jpg'
import Woman1 from '../assets/woman1.jpg'
import HalfRating from './one';

function Comments() {
    return (
        <div className="flex flex-col justify-center items-center w-full lg:h-[700px] h-[1500px] md:h-[1300px] m-auto ">

            <div className="m-6 font-bold lg:text-6xl md:text-4xl text-3xl text-center">
                <p>Our Satisfied Guests says</p>

            </div>

            <div className="text-slate-500 lg:mb-16 md:mb-8 mb-4 text-center">
                <p>We love to tell our successful far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>

            <div className="lg:flex lg:flex-row  flex-col w-full flex-bg-blue-400 lg:h-1/2 lg:m-0 lg:flex-nowrap flex-wrap  ">
                <div className="lg:w-1/3 p-4  lg:mr-8  rounded-3xl lg:ml-10 mt-5 md:w-4/6 lg:m-0 m-auto  lg:border-0 border-2 lg:shadow-2xl shadow-xl ">
                    <div className="h-2/5  rounded-3xl flex  justify-center items-center ">
                        <img
                            src={Man1}
                            className="object-cover w-32 h-32 rounded-full"
                            alt="Double room"
                        />

                    </div>
                    <div className="flex font-bold justify-center m-1">
                        <p> Brian Doe</p>

                    </div>
                    <div className="flex justify-center m-1">
                        <p>Satisfied Customer</p>
                    </div>
                    <div className="flex justify-center ">
                    "The rooms are incredibly clean and spacious, offering a perfect blend of luxury and comfort. The view from the balcony was breathtaking, making our stay truly unforgettable!"
                    </div>
                    <div className="flex justify-center ">
                        <HalfRating/>
                    </div>
                </div>


                <div className="lg:w-1/3 p-4 lg:mr-8  rounded-3xl lg:ml-10 mt-5 md:w-4/6 lg:m-0 m-auto lg:border-0 border-2 lg:shadow-2xl shadow-xl">
                    <div className="h-2/5 rounded-3xl flex  justify-center items-center ">
                        <img
                            src={Woman1}
                            className="object-cover w-32 h-32 rounded-full"
                            alt="Double room"
                        />

                    </div>
                    <div className="flex font-bold justify-center m-1">
                        <p>Shara Jones </p>

                    </div>
                    <div className="flex justify-center m-1">
                        <p>Satisfied Customer</p>
                    </div>
                    <div className="flex justify-center ">
                  
                    "The hotel's restaurant is a gem! The diverse menu and fresh ingredients made every meal a delight. The staff's attention to detail was the cherry on top."

                    </div>
                    <div className="flex justify-center ">
                        <HalfRating/>
                    </div>
                </div>


               <div className="lg:w-1/3 p-4  lg:mr-8  rounded-3xl lg:ml-10 mt-5 md:w-4/6 lg:m-0 m-auto  lg:border-0 border-2 lg:shadow-2xl shadow-xl">
                    <div className="h-2/5 rounded-3xl flex  justify-center items-center ">
                        <img
                            src={Man2}
                            className="object-cover w-32 h-32 rounded-full"
                            alt="Double room"
                        />

                    </div>
                    <div className="flex font-bold justify-center m-1">
                        <p>Nathalie Miller</p>

                    </div>
                    <div className="flex justify-center m-1">
                        <p>Satisfied Customer</p>
                    </div>
                    <div className="flex justify-center ">
                    "Top-notch facilities! The swimming pool and spa were immaculate, and the gym had everything I needed for a good workout. Highly recommended for a relaxing getaway."

                    </div>
                    <div className="flex justify-center ">
                        <HalfRating/>
                    </div>
                </div>




               


            </div>
        </div>
    );
}

export default Comments;