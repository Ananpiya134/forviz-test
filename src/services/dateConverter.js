function getsTodayDetail (){
    const todayArr = new Date().toDateString().split(' ') 
    let fullDay
    switch (todayArr[0]) {
        case 'Sun':
            fullDay = 'Sunday'
            break;
        case 'Mon':
            fullDay = 'Monday'
        break;
        case 'Tue':
            fullDay = 'Tuesday'
        break;
        case 'Wed':
            fullDay = 'Wednesday'
        break;
        case 'Thu':
            fullDay = 'Thursday'
        break;
        case 'Fri':
            fullDay = 'Friday'
        break;
        case 'Sat':
            fullDay = 'Saturday'
        break;
        default:
            break;
    }

    return {day:fullDay, date: todayArr[2], month:todayArr[1] }
}

const  timeRange = (obj) => {
    const sTimeArr = new Date(obj.startTime).toString().split(' ')[4].split(':')
    const nTimeArr = new Date(obj.endTime).toString().split(' ')[4].split(':')
    const sTime = `${sTimeArr[0]}:${sTimeArr[1]}`
    const nTime = `${nTimeArr[0]}:${nTimeArr[1]}`

    return `${sTime} - ${nTime}`

}

export {getsTodayDetail, timeRange}