import type { CSSProperties } from "react"

type TButton = {
    children: React.ReactNode,
    disabled?: boolean,
    type?: "reset" | 'button' | "submit",
    style?: CSSProperties,
    onClick?: () => void
}

const Button = ({ children, disabled, type = "button", style, onClick }: TButton) => {
    return (
        <button className="bg-linear-to-r from-blue-700 to-purple-700 text-white font-bold hover:opacity-90 transition-all duration-150 ease-in cursor-pointer"
            style={style} type={type} disabled={disabled} onClick={onClick}>{children}</button>
    )
}

export default Button