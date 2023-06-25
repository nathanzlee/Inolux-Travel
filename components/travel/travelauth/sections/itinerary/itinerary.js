import Table from './table'

const Itinerary = ({ data, edit, onChange }) => {
    return (
        <div className="space-y-6 divide-y divide-gray-200 sm:space-y-5">
            <div className="pt-6 sm:pt-5">
                <div role="group" aria-labelledby="label-notifications">
                    <div className="sm:grid sm:grid-cols-[1fr_2fr] sm:items-baseline">
                        <div>
                            <div className="text-sm font-semibold leading-6 text-gray-900" id="label-notifications">
                            Itinerary
                            </div>
                        </div>
                        <div>
                            <div>
                                <Table data={data} edit={edit} onChange={onChange}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itinerary