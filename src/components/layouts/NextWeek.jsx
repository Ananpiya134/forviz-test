import {Search} from '../../services/searchBookings'
import Schedule from "../cards/Schedule"

export default function NextWeek (){
    const scheduleList = Search(7)
    return (
        <div className="right-bottom-container"  >
            {scheduleList.map((obj, index) => {
                if (obj.length !== 0){
                return <Schedule key={index} dayArr={obj}/>
                }
            })}
         </div>
    )
}