import {useContext} from 'react'
import { FetchDataContext } from '../../contexts/FetchDataContext'
import { Outlet } from "react-router-dom"
import NavBar from "../cards/NavBar"
import TodaysEvents from "../cards/TodaysEvent"
export default function MainLayout (){

  const {roomId, todayBookings, todayDetail} = useContext(FetchDataContext)
  
    return (
        <div className="window-container">

        {/* LEFT SIDE CONTAINER */}
          <div className="left-container">
            <div className='left-top-container'>
              <div className='roomId-container'>
                <h1>{roomId}</h1>
              </div>
              <div className='today-date-container'>
                <h6 style={{marginLeft:'7px'}}>Upcoming</h6>
                <h5 style={{opacity:'0.5'}}>{todayDetail.day}</h5>
                <h5 >{`${todayDetail.date} ${todayDetail.month}`}</h5>
              </div>
    
              <div className='today-event-container'>
                {todayBookings.map(obj => {
                  return <TodaysEvents obj={obj} key={obj.id}/>
                })}
              </div>
    
            </div>
            <div className='left-bottom-container'></div>
          </div>
    
    
    
          {/* RIGHT SIDE CONTAINER */}
          <div className="right-container" >
            <NavBar/>
            <Outlet/>
            
        </div>
   
    </div>
    )
}