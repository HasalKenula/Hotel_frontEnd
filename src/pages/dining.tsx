import Table from '../assets/table.jpg';
import { fadeIn } from '../types/FadeIn';
import { motion } from 'framer-motion';
function Dining() {
    return (
        <div className="lg:flex justify-center items-center w-full lg:h-[600px] md:h-[1000px] h-[850px] m-auto ">


            <div className="lg:w-1/2 m-10 ">
                <motion.div
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    
                >
                    <img
                        src={Table}
                        alt="Hotel Welcome"
                        className=" rounded-lg w-full lg:h-[400px] md:h-[600px] h-[300px] object-cover" // Ensures responsive, scalable image
                    />
                </motion.div>
            </div>



            <div className="lg:w-1/2 lg:p-5  relative w-full  rounded-lg lg:h-2/3 m-0 lg:mr-8 p-3">

                <div className="lg:text-xl font-bold text-sm  md:text-xl text-slate-400 pt-4">Our resturent</div>
                <div className="lg:text-2xl font-bold text-2xl  md:text-xl text-blue-400 pt-2 pb-8">Dining & Drinks</div>
                <p className=' lg:leading-6'>
                    "Indulge in a delightful dining experience with our carefully curated menu featuring fresh,
                    seasonal ingredients. From delectable appetizers to signature mains and irresistible desserts,
                    every dish is crafted with passion and flair. Pair your meal with our exceptional selection of wines,
                    cocktails, and non-alcoholic beverages to elevate your experience. Whether you're here for a casual meal
                    or a special occasion, our inviting atmosphere ensures a memorable time."
                </p>

                <button className="bg-blue-400  text-white font-semibold md:mt-12 py-2 px-4 rounded-lg hover:bg-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-200">
                    Learn More
                </button>

            </div>

        </div>

    )
}

export default Dining;