import { useState, useEffect } from 'react'
import RadioOptions from '../form/radioOptions'
import Duration from '../form/duration'

const PersonalTravel = ({ data, edit, onChange }) => {
    const [selectedOption, setSelectedOption] = useState(data.personal)
    const [startDate, setStartDate] = useState(data.startDate)
    const [endDate, setEndDate] = useState(data.endDate)

    useEffect(() => {
        onChange({
            personal: selectedOption, 
            start: startDate,
            end: endDate
        })
    }, [selectedOption, startDate, endDate])
    
    function getDateFromInput(date) {
        date.setDate(date.getDate() + 1);
        return new Date(date);
    }

    function handleStartChange(e) {
        const newDate = getDateFromInput(e.target.valueAsDate)
        setStartDate(newDate)
    }

    function handleEndChange(e) {
        const newDate = getDateFromInput(e.target.valueAsDate)
        setEndDate(newDate)
    }

    function handleOnChange(e) {
        setSelectedOption(e.target.value === 'true')
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
                            Personal Travel 
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <div className="max-w-lg">
                                <RadioOptions options={options} selected={selectedOption} edit={edit} onChange={(e) => {
                                    handleOnChange(e)
                                    onChange(e)
                                }}/>
                                <Duration start={startDate} end={endDate} edit={edit} onStartChange={(e) => {handleStartChange(e)}} onEndChange={(e) => {handleEndChange(e)}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalTravel