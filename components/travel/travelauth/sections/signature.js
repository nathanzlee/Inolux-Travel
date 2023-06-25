import { useState, useEffect } from 'react'

const Signature = ({ label, user, data, edit, onChange }) => {
    const [signature, setSignature] = useState((data == null) ? '' : data.signature)

    function handleOnChange(e) {
        setSignature(e.target.value)
        onChange({
            signature: e.target.value,
            date: new Date()
        })
    }
    
    return (
        <div className="space-y-6 divide-y divide-gray-200 sm:space-y-5">
            <div className="pt-6 sm:pt-5">
                <div role="group" aria-labelledby="label-notifications">
                    <div className="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
                        <div>
                            <div className="text-sm font-semibold leading-6 text-gray-900" id="label-notifications">
                                {label}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <div className="max-w-lg">
                                <input 
                                    className="mr-5"
                                    type="text"
                                    placeholder={(user) ? user.firstName + ' ' + user.lastName : ''}
                                    onChange={(e) => {handleOnChange(e)}}
                                    value={signature}
                                    disabled={!edit}
                                />
                                <label>
                                    {new Date(Date.now()).toLocaleDateString()}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signature