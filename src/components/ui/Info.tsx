type TProps = { icon: React.ReactNode, label: string, value: string | number }

const Info = ({ icon, label, value }: TProps) => (
    <div className="flex items-center gap-3">
        <span className="text-purple-700">{icon}</span>
        <span className="font-semibold">{label}:</span>
        <span>{value}</span>
    </div>
);

export default Info