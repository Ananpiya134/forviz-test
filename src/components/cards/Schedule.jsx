import {GetDay} from '../../services/searchBookings'
import Events from "./Events"


export default function Schedule ({dayArr}){
	const {day, date, month} = GetDay(dayArr)
    
    return (
        <>
            <div className="schedule-header" style={{marginTop:'78px'}}>
                <p>Today({`${day}, ${date} ${month}`})</p>
            </div>
            {dayArr.map((obj, index)=> {
                return <Events key={index} obj={obj}/>
            })}
         </>
                
    )
}