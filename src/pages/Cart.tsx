import { useEffect, useState } from "react"
import CartList from "../components/Cart/CartList"
import Title from "../components/ui/Title"
import type { ICart } from "../types/cart"

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalCourses, setTotalCourses] = useState(0)
  const [cart, setCart] = useState<null | ICart[]>(null)

  useEffect(() => {
    const getCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart')!) || []
      setCart(cart)
    }
    getCart()
  }, [])

  useEffect(() => {
    const cartTotals = () => {
      const total = cart?.reduce((acc, item) => item.price + acc, 0) as number
      setTotalPrice(total)
      setTotalCourses(cart?.length!)

    }
    cartTotals()
  }, [cart])

  const deleteItemCart = (id: number) => {
    const cartItems = cart?.filter(ca => ca.id !== id)
    setCart(cartItems!)
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  return (
    <div className="px-10 sm:px-20 py-40 mx-auto">
      <Title>Cart</Title>
      <div className="mt-16 bg-purple-50 rounded-xl p-8 md:p-12 shadow-lg">
        <CartList cart={cart!} totalCourses={totalCourses} totalPrice={totalPrice} deleteItemCart={deleteItemCart} />
      </div>
    </div>
  )
}

export default Cart