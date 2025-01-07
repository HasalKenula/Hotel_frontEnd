import Welcome1 from '../assets/welcome1.jpg'


function Welcome() {
    return (

        <div className=" lg:bg-opacity-90 lg:bg-black lg:flex justify-center items-center w-full lg:h-[700px] md:h-[980px] h-[900px] m-auto ">

            <div className="lg:w-1/2 lg:p-5  relative w-full bg-opacity-90 bg-black rounded-lg lg:h-2/3 m-0 lg:ml-8 p-3">

                {/* <div className="lg:text-xl font-bold text-sm  md:text-xl text-slate-400 pt-4">Our Hotel</div> */}
                <div className="lg:text-2xl font-bold text-2xl  md:text-xl text-blue-400 pt-2 pb-8">Welcome To  Hotel Marina</div>
                <p className='text-white lg:leading-8'>
                    Experience comfort and luxury like never before. Nestled in the heart of Matara,
                    our hotel offers a perfect blend of modern amenities and personalized service.
                    Whether you're visiting for business or leisure, we provide a range of elegantly
                    designed rooms, each thoughtfully equipped to ensure a relaxing and enjoyable stay.
                    Indulge in world-class dining, unwind with exclusive amenities, and take advantage of our
                    prime location to explore the best of the city. Our dedicated team is here to make every moment
                    of your stay special, offering tailored experiences to meet your unique needs. Book your stay
                    with us and discover a welcoming atmosphere where comfort meets convenience.
                </p>

                <button className="bg-blue-400  text-white font-semibold mt-8 py-2 px-4 rounded-lg hover:bg-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200">
                    Learn More
                </button>

            </div>




            <div className="lg:w-1/2 m-10">
                <img
                    src={Welcome1}
                    alt="Hotel Welcome"
                    className="w-full md:h-[600px] h-[250px] object-cover rounded-lg shadow-lg" // Ensures responsive, scalable image
                />
            </div>



        </div>








    )
}

export default Welcome;