import { FaChalkboardTeacher, FaCertificate, FaClock, FaLaptopCode, FaUsers, FaShieldAlt } from "react-icons/fa";
import Title from "../ui/Title";

const features = [
    {
        icon: <FaChalkboardTeacher size={30} />,
        title: "Expert Instructors",
        desc: "Learn from industry professionals with real-world experience.",
    },
    {
        icon: <FaLaptopCode size={30} />,
        title: "Hands-on Courses",
        desc: "Practice with real projects and build a strong portfolio.",
    },
    {
        icon: <FaClock size={30} />,
        title: "Flexible Schedule",
        desc: "Study at your own pace with lifetime access to courses.",
    },
    {
        icon: <FaCertificate size={30} />,
        title: "Certificates",
        desc: "Earn certificates to boost your career opportunities.",
    },
    {
        icon: <FaUsers size={30} />,
        title: "Community Support",
        desc: "Join an active learning community and get support anytime.",
    },
    {
        icon: <FaShieldAlt size={30} />,
        title: "Secure Platform",
        desc: "Your data and payments are fully protected and encrypted.",
    },
];

const Features = () => {
    return (
        <div className="px-10 sm:px-20 py-40 mx-auto">
            <Title>Platform Features</Title>

            <p className="text-center text-gray-500 max-w-2xl mx-auto mt-4">
                Everything you need to learn, grow, and succeed in your tech career —
                all in one platform.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 rounded-xl p-8 shadow-md
                        hover:-translate-y-1 transition duration-200"
                    >
                        <div
                            className="w-14 h-14 rounded-full flex items-center justify-center
                                bg-linear-to-r from-blue-700 to-purple-700 text-white mb-4"
                        >
                            {feature.icon}
                        </div>

                        <h3
                            className="text-xl font-bold bg-linear-to-r
                             from-blue-700 to-purple-700 text-transparent bg-clip-text"
                        >
                            {feature.title}
                        </h3>

                        <p className="text-gray-600 mt-2">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
