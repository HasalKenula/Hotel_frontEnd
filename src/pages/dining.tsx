import Welcome1 from '../assets/welcome1.jpg'
import Welcome2 from '../assets/welcome2.jpg'

function Dining() {
    return (
        <div className="lg:flex justify-center items-center w-full lg:h-[700px] md:h-[1000px] h-[850px] m-auto ">


            <div className="lg:w-1/2 m-10">
                <img
                    src={Welcome1}
                    alt="Hotel Welcome"
                    className="w-full md:h-[600px] h-[300px] object-cover rounded-lg shadow-lg" // Ensures responsive, scalable image
                />
            </div>



            <div className="lg:w-1/2 lg:p-5  relative w-full bg-opacity-90 bg-black rounded-lg lg:h-2/3 m-0 lg:mr-8 p-3">

                <div className="lg:text-xl font-bold text-sm  md:text-xl text-slate-400 pt-4">Our resturent</div>
                <div className="lg:text-2xl font-bold text-2xl  md:text-xl text-blue-400 pt-2 pb-8">Dining & Drinks</div>
                <p className='text-white lg:leading-8'>
                    "Indulge in a delightful dining experience with our carefully curated menu featuring fresh,
                    seasonal ingredients. From delectable appetizers to signature mains and irresistible desserts,
                    every dish is crafted with passion and flair. Pair your meal with our exceptional selection of wines,
                    cocktails, and non-alcoholic beverages to elevate your experience. Whether you're here for a casual meal
                    or a special occasion, our inviting atmosphere ensures a memorable time."
                </p>

                <button className="bg-blue-400  text-white font-semibold mt-12 py-2 px-4 rounded-lg hover:bg-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200">
                    Learn More
                </button>

            </div>

        </div>

    )
}

export default Dining;