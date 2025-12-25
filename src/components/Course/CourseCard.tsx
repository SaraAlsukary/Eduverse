import { useNavigate } from "react-router-dom"
import Button from "../ui/Button"
import SecondaryButton from "../ui/SecondaryButton"
type TProps = {
    id: number,
    title: string,
    price: number,
    description: string,
    level: string,
    onClick:()=>void
}
const CourseCard = ({ id, title, price, description, level,onClick }: TProps) => {

    const navigate = useNavigate()
    const style = { width: "100%", padding: "4px 10px", marginTop: "10px", borderRadius: "4px" }
    return (
        <div className="w-60 group bg-gray-100 px-6 py-4 relative rounded-md  hover:translate-x-1 ease-in duration-200 transition-transform shadow-sm shadow-gray-500">
            <h2 className="text-2xl font-bold bg-linear-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text ">{title}</h2>
            <div className="text-md text-gray-600">{description}</div>
            <div className="text-md font-bold bg-linear-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text ">{level}</div>
            <div className="font-bold">${price}</div>
            <SecondaryButton style={style} onClick={() => navigate(`/home/courses/${id}`)}>View Details</SecondaryButton>
            <Button style={style} onClick={onClick}>Add to cart</Button>
            <span className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-linear-to-r from-blue-700 to-purple-700 transition-all duration-300 "></span>
        </div>
    )
}

export default CourseCard