const Status = ({ status }) => {
    const approvedStyle = "inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
    const pendingStyle = "inline-flex rounded-full bg-orange-100 px-2 text-xs font-semibold leading-5 text-orange-800"
    const deniedStyle = "inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800"

    let style, text 

    if (status == "approved") {
        style = approvedStyle
        text = "Approved"
    } else if (status == "pending") {
        style = pendingStyle
        text = "Pending"
    } else {
        style = deniedStyle
        text = "Denied"
    }

    return (
        <span className={style}>
            {text}
        </span>
    )
}

export default Status