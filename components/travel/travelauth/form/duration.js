const Duration = ({ start, end, edit, onStartChange, onEndChange }) => {

    function dateInputValue(date) {
        if (!date) return null 
        const local = new Date(date)
        local.setMinutes(date.getMinutes() - date.getTimezoneOffset())
        return local.toJSON().slice(0, 10)
    }

    return (
        <div className="my-4 space-y-4">
            <div className="flex items-center">
                {/* <div className="flex max-w-lg rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 bg-white border-gray-300 text-gray-500 sm:text-sm">
                        Start Date
                    </span>
                    <input
                        type="date"
                        className="border-gray-300 mr-2 text-[var(--primary-color) focus:ring-text-[var(--primary-color)"
                        value={(start) ? dateInputValue(new Date(start)) : null}
                        onChange={onStartChange}
                        disabled={!edit}
                    />
                </div>
                <div className="flex max-w-lg rounded-md shadow-sm">
                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 text-gray-500 sm:text-sm">
                        End Date
                    </span>
                    <input
                        type="date"
                        className="border-gray-300 text-[var(--primary-color) focus:ring-text-[var(--primary-color)"
                        value={(end) ? dateInputValue(new Date(end)) : null}
                        onChange={onEndChange}
                        disabled={!edit}
                    />
                </div> */}
                <label
                    htmlFor="push-everything"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Start Date
                </label>
                <input
                    type="date"
                    className="border-gray-300 ml-2 text-[var(--primary-color) focus:ring-text-[var(--primary-color)"
                    value={(start) ? dateInputValue(new Date(start)) : null}
                    onChange={onStartChange}
                    disabled={!edit}
                />
                <label
                    htmlFor="push-everything"
                    className="ml-2 block text-sm font-medium leading-6 text-gray-900"
                >
                    End Date
                </label>
                <input
                    type="date"
                    className="border-gray-300 ml-2 text-[var(--primary-color) focus:ring-text-[var(--primary-color)"
                    value={(end) ? dateInputValue(new Date(end)) : null}
                    onChange={onEndChange}
                    disabled={!edit}
                />
            </div>
        </div>
    )
}

export default Duration