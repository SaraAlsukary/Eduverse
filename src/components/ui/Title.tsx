const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mx-auto relative mb-5">
            <h2 className="text-center bg-linear-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text font-bold text-4xl">
                {children}
            </h2>
            <span className="h-1 w-20 bg-linear-to-r from-blue-700 to-purple-700 absolute mt-1 left-[50%] translate-x-[-50%]"></span>
        </div>
    )
}

export default Title