import {useContext} from 'react'
import {FetchDataContext} from '../contexts/FetchDataContext'

function Search (day){
    const {searchBookings, todayDetail} = useContext(FetchDataContext)
    const result = []

    for(let i = 0; i < day; i++){
        const today = Number(todayDetail.date) + i
        const filterSearchBookingsByDate = searchBookings.filter(obj => {
            return Number(new Date(obj.startTime).toDateString().split(' ')[2]) === Number(today)
        })
    result.push(filterSearchBookingsByDate)
    }

    return result

}


export {Search}