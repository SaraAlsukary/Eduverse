import { Suspense } from "react"
import loading from '../assets/lottiefiles/loading.json';
import Lottie from "lottie-react";
const SuspensePage = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense
            fallback={
                <div>
                    <Lottie loop animationData={loading} className="w-75 mx-auto mt-40" />
                    <h2 className="text-center text-blue-500 text-3xl font-bold">Loading...</h2>
                </div>
            }
        >{children}</Suspense>
    )
}

export default SuspensePage