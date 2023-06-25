const RadioOptions = ({ options, selected, edit, onChange }) => {

    return (
        <div className="mt-4 space-y-4">
            {options.map((option, index) => {
                return (
                    <div className="flex items-center" key={index}>
                        <input
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-[var(--primary-color) focus:ring-text-[var(--primary-color)"
                            value={option.value}
                            checked={selected == option.value}
                            onChange={onChange}
                            disabled={!edit}
                        />
                        <label
                            htmlFor="push-everything"
                            className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                            {option.label}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}

export default RadioOptions