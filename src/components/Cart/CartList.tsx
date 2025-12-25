import type { ICart } from "../../types/cart"
import ReturnButton from "../ui/ReturnButton"
import CartCard from "./CartCard"

const CartList = ({ cart, totalPrice, totalCourses, deleteItemCart }: { cart: ICart[], totalCourses: number, totalPrice: number } & { deleteItemCart: (id: number) => void }) => {

    const cartItemsCard = cart?.map((ca, idx) => <CartCard key={ca.id} id={ca.id} serial={idx + 1} price={ca.price} title={ca.title} deleteItemCart={deleteItemCart} />)
    return (
        <>
            {cart?.length === 0 ? <h2 className="text-xl text-center font-bold">No Cart Items Found</h2> :
                <>
                    <div>
                        {cartItemsCard}
                    </div>                <div className="flex items-center justify-center mt-20 gap-5">
                        <div className="text-xl text-center sm:text-left">Total Price: <span className="font-bold">${totalPrice}</span> </div>
                        <div className="text-xl text-center sm:text-left">Total Courses: <span className="font-bold">{totalCourses}</span> </div>
                    </div>
                </>
            }
            <div className="flex justify-center mt-10">
                <ReturnButton />
            </div>
        </>
    )
}

export default CartList



