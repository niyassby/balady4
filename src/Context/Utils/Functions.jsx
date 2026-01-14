export const newDate = (nwdate)=>{
    const date =new Date(nwdate)
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    const yy = date.getFullYear()
    const mm = date.getMonth()
    const dd = date.getDate()
    const mn = month[mm]

    return `${dd} ${mn} ${yy}`
}