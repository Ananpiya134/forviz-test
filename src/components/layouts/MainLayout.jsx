import { Outlet } from "react-router-dom"
import NavBar from "../cards/NavBar"
import TodaysEvents from "../cards/TodaysEvent"
export default function MainLayout (){

    return (
        <div className="window-container">

        {/* LEFT SIDE CONTAINER */}
          <div className="left-container">
            <div className='left-top-container'>
              <div className='roomId-container'>
                <h1>A101</h1>
              </div>
              <div className='today-date-container'>
                <h6 style={{marginLeft:'7px'}}>Upcoming</h6>
                <h5 style={{opacity:'0.5'}}>Monday</h5>
                <h5 >28 Sep</h5>
              </div>
    
              <div className='today-event-container'>
                <TodaysEvents/>
                <TodaysEvents/>
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