import type { ICart } from "../../types/cart"
import { IoIosCloseCircle } from "react-icons/io";
const CartCard = ({ id, serial, title, price, deleteItemCart }: ICart & { deleteItemCart: (id: number) => void, serial :number}) => {
    return (
        <div className="flex items-center mt-5">
            <div className="text-2xl font-bold w-15">{serial} #</div>
            <div className="flex flex-col w-full">
                <div className="flex justify-between items-center gap-5 group bg-gray-100 px-6 py-4 relative rounded-md  hover:translate-x-1 ease-in duration-200 transition-transform shadow-sm shadow-gray-500">
                    <IoIosCloseCircle className="text-purple-700 cursor-pointer hover:opacity-80 ease-in duration-100 transition-opacity" size={30} onClick={() => deleteItemCart(id)} />
                    <div className="flex flex-col items-end justify-center text-right">
                        <h2 className="text-md sm:text-2xl  font-bold bg-linear-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text ">{title}</h2>
                        <div className="font-bold ">${price}</div>
                    </div>
                    <span className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-linear-to-r from-blue-700 to-purple-700 transition-all duration-300 "></span>
                </div>
            </div>
        </div>
    )
}

export default CartCard