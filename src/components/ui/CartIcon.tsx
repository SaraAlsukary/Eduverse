import { HiMiniShoppingCart } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"

const CartIcon = ({ totalCourse }: { totalCourse: number }) => {
    const navigate = useNavigate()
    return (
        <div className="flex justify-end relative">
            <HiMiniShoppingCart size={40} className="text-purple-700 cursor-pointer" onClick={() => navigate('/home/cart')} />
            {totalCourse ? <span className="bg-blue-700 h-5 w-5 rounded-full text-white flex items-center justify-center absolute right-2">{totalCourse}</span>
                : ""}</div>
    )
}

export default CartIcon