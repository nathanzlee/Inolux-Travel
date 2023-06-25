import { useState, useEffect } from 'react'
import RadioOptions from '../form/radioOptions'

const TravelAdvance = ({ data, edit, onChange }) => {
    const [selectedOption, setSelectedOption] = useState(data ? data.advance : null)
    const [amount, setAmount] = useState(data ? data.amount : null)

    useEffect(() => {
        onChange({
            advance: selectedOption, 
            amount: amount
        })
    }, [selectedOption, amount])

    function handleOnChange(e) {
        setSelectedOption(e.target.value === 'true')
    }

    function handleAmountChange(e) {
        setAmount(e.target.value)
    }

    const options = [
        {label: "Yes", value: true},
        {label: "No", value: false}
    ]

    return (
        <div className="space-y-6 divide-y divide-gray-200 sm:space-y-5">
            <div className="pt-6 sm:pt-5">
                <div role="group" aria-labelledby="label-notifications">
                    <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                        <div>
                            <div className="text-sm font-semibold leading-6 text-gray-900" id="label-notifications">
                            Travel Advance
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <div className="max-w-lg">
                                <RadioOptions options={options} selected={selectedOption} edit={edit} onChange={(e) => {
                                    handleOnChange(e)
                                    onChange(e)
                                }}/>
                                <div className="my-4 space-y-4">
                                    <div className="flex items-center">
                                        <label
                                            htmlFor="push-everything"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Amount 
                                        </label>
                                        <input
                                            type="number"
                                            className="border-gray-300 ml-2 text-[var(--primary-color) focus:ring-text-[var(--primary-color)"
                                            value={amount}
                                            onChange={(e) => {handleAmountChange(e)}}
                                            disabled={!edit}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelAdvance