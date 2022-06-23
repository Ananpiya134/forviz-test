import {timeRange} from '../../services/dateConverter'

export default function Events ({obj}){

  const period = timeRange(obj)
    return (
        <div className='schedule-detail'>
                <div className="vertical-dotted-line"></div>
                <div className="dot"></div>
                <div className='event-description'>
                  <h4>{period}</h4>
                  <h3>{obj.title}</h3>
                </div>
                </div>
    )
}