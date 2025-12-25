import { FaArrowLeft } from 'react-icons/fa'
import SecondaryButton from './SecondaryButton'
import { useNavigate } from 'react-router-dom'
import type { CSSProperties } from 'react'

const ReturnButton = ({ style }: { style?: CSSProperties }) => {
    const navigate = useNavigate()
    return (
        <SecondaryButton
            onClick={() => navigate(-1)}
            style={{ ...style, padding: "12px 24px", borderRadius: "8px", gap: '8px', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
            <FaArrowLeft />
            Return
        </SecondaryButton>
    )
}

export default ReturnButton