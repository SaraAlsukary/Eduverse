import Lottie from 'lottie-react'
import edu from '../../assets/lottiefiles/home.json'
const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row justify-start md:justify-between lg:justify-between items-center h-150 lg:h-screen md:h-screen bg-linear-to-r from-blue-700 to-purple-300 px-10 sm:px-20 mx-auto ">
            <div className="text-center lg:text-left md:text-left w-100 md:w-200 lg:w-200 pl-0 md:pl-10lg:pl-10 mt-20 lg:mt-0 md:mt-0">
                <h1 className='text-3xl md:text-5xl lg:text-5xl font-bold text-white'>Welcome to Eduverse!</h1>
                <p className='text-2xl lg:text-3xl md:text-3xl'>your gateway to mastering new skills. Explore thousands of expert-led courses and start learning today</p>
            </div>
            <Lottie animationData={edu} loop={true} className='w-100 lg:w-220 md:w-220' />
        </div>
    )
}

export default Hero