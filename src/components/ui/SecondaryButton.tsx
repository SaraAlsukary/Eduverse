import type { CSSProperties } from "react"

type TButton = {
    children: React.ReactNode,
    disabled?: boolean,
    type?: "reset" | 'button' | "submit",
    style?: CSSProperties,
    onClick?: () => void
}

const SecondaryButton = ({ children, disabled, type = "button", style, onClick }: TButton) => {
    return (
        <button className="border-purple-700 border cursor-pointer text-purple-700 hover:bg-purple-700 hover:text-white ease-in duration-200 transition-colors"
            style={style} type={type} disabled={disabled} onClick={onClick}>{children}</button>
    )
}

export default SecondaryButton