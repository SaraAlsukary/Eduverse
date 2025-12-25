import Title from "../ui/Title"
import image from '../../assets/imgs/AdobeStock_565290230.jpeg'

const About = () => {
    return (
        <div className=" px-10 sm:px-20 py-40 lg:py-40 md:py-40 mx-auto text-center bg-gray-100 ">
            <Title>About Us</Title>
            <img src={image} alt="" className="w-100 lg:w-150 md:w-150 mx-auto my-10 border-2 border-purple-400 rounded-md" />
            <p className=" md:w-200 lg:w-200 mx-auto">At Eduverse, we believe that learning should be boundless, accessible, and transformative. Our platform brings together a vast "verse" of courses—from technology and business to arts and personal development—all in one place. With easy-to-follow content, practical projects, and a supportive community, we're here to help you achieve your goals. Thank you for choosing us to be part of your journey. Let's learn, grow, and succeed together.</p>
        </div>
    )
}

export default About