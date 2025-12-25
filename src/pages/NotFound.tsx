import Lottie from "lottie-react"
import ReturnButton from "../components/ui/ReturnButton"
import notFound from '../assets/lottiefiles/404.json'
const NotFound = () => {
  return (
    <div className="px-10 sm:px-20 py-30 flex flex-col items-center justify-center">
      <Lottie loop animationData={notFound} className="w-75 mx-auto" />
      <p className="text-2xl font-bold my-4 text-transparent bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text">Page Not Found</p>
      <ReturnButton style={{ width: "200px" }} />
    </div>
  )
}

export default NotFound