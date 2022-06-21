import { timeRange } from "../../services/dateConverter"

export default function TodaysEvents ({obj}){
    
    const period  = timeRange(obj)
    return (
        <div className='today-event'>
                  <h4 style={{color:'white', opacity:'0.5'}}>{period}</h4>
                  <h3 style={{color:'white'}}>{obj.title}</h3>
                </div>
    )
}