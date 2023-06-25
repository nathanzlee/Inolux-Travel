import { useState } from 'react'
import RadioOptions from '../form/radioOptions'

const TripPurpose = ({ data, edit, onChange }) => {
    const [selectedOption, setSelectedOption] = useState(data)

    function handleOnChange(e) {
        setSelectedOption(e.target.value)
    }
    const options = [
        {label: "Customer Visit", value: "Customer Visit"},
        {label: "Supplier Visit", value: "Supplier Visit"},
        {label: "Show", value: "Show"}
    ]
    return (
        <div className="space-y-6 divide-y divide-gray-200 sm:space-y-5">
            <div className="pt-6 sm:pt-5">
                <div role="group" aria-labelledby="label-notifications">
                    <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                        <div>
                            <div className="text-sm font-semibold leading-6 text-gray-900" id="label-notifications">
                            Purpose of Trip
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <div className="max-w-lg">
                                <RadioOptions options={options} selected={selectedOption} edit={edit} onChange={(e) => {
                                    handleOnChange(e)
                                    onChange(e)
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripPurpose