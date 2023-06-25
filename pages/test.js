import SearchSelect from '../components/buy/purchaseOrders/searchSelect'

const options = [
    {id: 1, name: 'Option 1'},
    {id: 2, name: 'Option 2'}
]

export default function Test() {
    return (
        <SearchSelect options={options} current={options[0]} />
    )
}