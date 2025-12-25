import { Link, useLocation, useNavigate } from "react-router-dom"
import img from '../../assets/imgs/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import SecondaryButton from "../ui/SecondaryButton";
import { toast } from "react-toastify";
const Navbar = () => {
    const [show, setShow] = useState(false)
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        const getUser = () => {
            const user = JSON.parse(localStorage.getItem('user')!)
            setIsLoggedIn(user?.isLoggedIn)
        }
        getUser()
    }, [])
    const logoutHandler = () => {
        localStorage.removeItem('user')
        toast.success('logout successfull!')
        navigate('/')
    }
    return (
        <header className="shadow-md w-full bg-white">
            <div className=" flex justify-between items-center px-10 lg:px-20 md:px-20 mx-auto ">
                <Link to={'/'} className="logo w-15" >
                    <img src={img} className="w-full" alt="" />
                </Link>
                {/* large screen */}
                <ul className={`hidden md:flex lg:flex items-center justify-center gap-5 font-medium text-md     `}>
                    <li className={`duration-100 transition-colors ease-in hover:text-purple-700 ${pathname === '/home' ? "text-purple-700" : ""}`}><Link to={'/home'}>Home</Link></li>
                    <li className={`duration-100 transition-colors ease-in hover:text-purple-700 ${pathname === '/home/courses' ? "text-purple-700" : ""}`}><Link to={'courses'}>Courses</Link></li>
                    <li className={`duration-100 transition-colors ease-in hover:text-purple-700 ${pathname === '/home/cart' ? "text-purple-700" : ""}`}><Link to={'cart'}>Cart</Link></li>
                    <li>
                        {isLoggedIn ?
                            <SecondaryButton onClick={logoutHandler} style={{ borderRadius: "4px", padding: "4px 12px" }}>Logout</SecondaryButton>
                            : <Button style={{ borderRadius: "4px", padding: "4px 12px" }} onClick={() => navigate('/')}>Login</Button>
                        }
                    </li>
                </ul>

                {/* mobile */}
                <div className="block lg:hidden md:hidden cursor-pointer " onClick={() => setShow(prev => !prev)}>
                    {show ?
                        <FaWindowClose size={25} color="rgb(129 0 219)" /> :
                        <GiHamburgerMenu size={25} color="rgb(22 71 230)" />
                    }
                </div>
                <ul className={`${show ? "-translate-y-15 opacity-100" : "-translate-y-90 opacity-0"} border-b border-t shadow-md border-purple-700 transition-all ease-in-out duration-500 flex flex-col md:hidden lg:hidden items-center justify-center gap-12  font-medium text-md 
               absolute left-[50%] z-10 text-center top-30 bg-white w-full translate-x-[-50%]  py-4`}>
                    <li className={`duration-100 transition-colors ease-in hover:text-purple-700 ${pathname === '/home' ? "text-purple-700" : ""}`}><Link to={'/home'}>Home</Link></li>
                    <li className={`duration-100 transition-colors ease-in hover:text-purple-700 ${pathname === '/home/courses' ? "text-purple-700" : ""}`}><Link to={'courses'}>Courses</Link></li>
                    <li className={`duration-100 transition-colors ease-in hover:text-purple-700 ${pathname === '/home/cart' ? "text-purple-700" : ""}`}><Link to={'cart'}>Cart</Link></li>
                    <li>
                        {isLoggedIn ?
                            <SecondaryButton onClick={logoutHandler} style={{ borderRadius: "4px", padding: "4px 12px" }}>Logout</SecondaryButton>
                            : <Button style={{ borderRadius: "4px", padding: "4px 12px" }} onClick={() => navigate('/')}>Login</Button>
                        }
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar