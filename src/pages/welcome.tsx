import Welcome1 from '../assets/welcome1.jpg'
import Welcome2 from '../assets/welcome2.jpg'

function Welcome() {
    return (
        <div className="lg:flex w-full lg:h-[700px] md:h-[950px] h-[900px] m-auto bg-green-400">
            <div className="lg:w-1/2 md:p-5 p-2">
                <div className="lg:text-6xl font-bold text-3xl lg:pt-20 md:text-4xl lg:pb-20 pb-5">Welcome To  Hotel Marina</div>
                <p className='lg:leading-9 '>Experience comfort and luxury like never before. Nestled in the heart of Matara,
                    our hotel offers a perfect blend of modern amenities and personalized service.
                    Whether you're visiting for business or leisure, we provide a range of elegantly
                    designed rooms, each thoughtfully equipped to ensure a relaxing and enjoyable stay.
                    Indulge in world-class dining, unwind with exclusive amenities, and take advantage of our
                    prime location to explore the best of the city. Our dedicated team is here to make every moment
                    of your stay special, offering tailored experiences to meet your unique needs. Book your stay
                    with us and discover a welcoming atmosphere where comfort meets convenience.</p>
            </div>
            <div className="lg:w-1/2 lg:p-5  relative w-full mt-10">

                
                    <img
                        src={Welcome1}
                        alt="Cat"
                        className="lg:w-4/5 w-3/5 lg:h-2/3 h-2/3 object-contain" // Adjust image size here
                    />



                    {/* <img
                        src={Welcome2}
                        alt="Cat"
                        className="w-4/12 h-3/6 object-contain absolute lg:bottom-12 bottom-0 lg:left-80 md:right-20 right-10 w-full h-3/4 " // Adjust image size here
                    /> */}

                


            </div>
        </div>
    )
}

export default Welcome;