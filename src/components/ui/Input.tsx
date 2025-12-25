type TProps = {
    label: string;
    type: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: React.ReactNode;
    onIconClick?: () => void;
    name: string;
}
const Input = ({
    label, type, value, onChange, icon, onIconClick, name,
}: TProps) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700">{label}</label>

            <div className="relative">
                <input
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    className="w-full px-4 py-3 rounded-md border outline-none
          focus:border-purple-700 focus:border-2"
                />

                {icon && (
                    <span
                        onClick={onIconClick}
                        className="absolute right-3 top-1/2 -translate-y-1/2
            cursor-pointer text-purple-700"
                    >
                        {icon}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Input;
