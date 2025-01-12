import Welcome1 from '../assets/welcome1.jpg'
import Welcome2 from '../assets/welcome2.jpg'

function Swimming() {
    return (
        <div className="lg:flex justify-center items-center w-full lg:h-[700px] md:h-[950px] h-[850px] m-auto ">

            <div className="lg:w-1/2 lg:p-5  relative w-full bg-opacity-90 bg-black rounded-lg lg:h-2/3 m-0 lg:ml-8 p-3">

                <div className="lg:text-xl font-bold text-sm  md:text-xl text-slate-400 pt-4">Our Pool</div>
                <div className="lg:text-2xl font-bold text-2xl  md:text-xl text-blue-400 pt-2 pb-8">Swimming Pool</div>
                <p className='text-white lg:leading-8'>
                    "Relax and unwind in our stunning swimming pool, designed for both leisure and recreation.
                    Whether you're taking a refreshing dip, enjoying the sun on the deck, or simply soaking in the
                    serene surroundings, our pool offers the perfect escape. Dive into
                    relaxation and enjoy a peaceful atmosphere that's ideal for both families and individuals alike."
                </p>

                <button className="bg-blue-400  text-white font-semibold mt-12 py-2 px-4 rounded-lg hover:bg-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200">
                    Learn More
                </button>

            </div>




            <div className="lg:w-1/2 m-10">
                <img
                    src={Welcome1}
                    alt="Hotel Welcome"
                    className="w-full md:h-[600px] h-[300px] object-cover rounded-lg shadow-lg" // Ensures responsive, scalable image
                />
            </div>

        </div>
    )
}

export default Swimming;