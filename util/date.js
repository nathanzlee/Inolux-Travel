export function dateInputValue(date) {
    if (!date) return null 
    const local = new Date(date)
    local.setMinutes(date.getMinutes() - date.getTimezoneOffset())
    return local.toJSON().slice(0, 10)
}

export function getDateFromInput(date) {
    date.setDate(date.getDate() + 1);
    return new Date(date);
}