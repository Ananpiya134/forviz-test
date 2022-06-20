import logo from './logo.svg';
import './App.css';

function App() {
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
            <div className='today-event'>
              <h4 style={{color:'white', opacity:'0.5'}}>12:00 - 13:00</h4>
              <h3 style={{color:'white'}}>Watch Buzz Light year</h3>
            </div>
            <div className='today-event'>
              <h4 style={{color:'white', opacity:'0.5'}}>12:00 - 13:00</h4>
              <h3 style={{color:'white'}}>Watch Buzz Light year</h3>
            </div>
          </div>

        </div>
        <div className='left-bottom-container'></div>
      </div>



      {/* RIGHT SIDE CONTAINER */}
      <div className="right-container" >
        <div className='navbar-container'>
          <button className='navbar-button active'><h2>THIS WEEK</h2></button>
          <button className='navbar-button'><h2>NEXT WEEK</h2></button>
          <button className='navbar-button'><h2>NEXT MONTH</h2></button>
        </div>

        <div className="right-bottom-container"  >
{/*  */}
            <div className="schedule-header">
              <p>Today(Mon, 28 Sep)</p>
            </div>
            <div className='schedule-detail'>
            <div className="vertical-dotted-line"></div>
            <div className="dot"></div>
            <div className='event-description'>
              <h4>13:00 - 14:00</h4>
              <h3>Lunch with Harry Potter</h3>
            </div>
            </div>



            <div className="schedule-detail">
              <div className="vertical-dotted-line"></div>
            </div>
            <div className='schedule-detail'>
            <div className="vertical-dotted-line"></div>
            <div className="dot"></div>
            <div className='event-description'>
              <h4>13:00 - 14:00</h4>
              <h3>Lunch with Harry Potter</h3>
            </div>
            </div>
            <div className='schedule-detail'>
            <div className="vertical-dotted-line"/>
            <div className="dot"></div>
            <div className='event-description'>
              <h4>13:00 - 14:00</h4>
              <h3>Lunch with Harry Potter</h3>
            </div>
            </div>
            <div className="schedule-detail">
              <div className="vertical-dotted-line"></div>
            </div>
            <div className='schedule-detail'>
            <div className="vertical-dotted-line"></div>
            <div className="dot"></div>
            <div className='event-description'>
              <h4>13:00 - 14:00</h4>
              <h3>Lunch with Harry Potter</h3>
            </div>
            
            </div>
            
          </div>

          {/*  */}
          <div className="schedule-header">
              <p>Today(Mon, 28 Sep)</p>
            </div>
            <div className='schedule-detail'>
            <div className="vertical-dotted-line"></div>
            <div className="dot"></div>
            <div className='event-description'>
              <h4>13:00 - 14:00</h4>
              <h3>Lunch with Harry Potter</h3>
            </div>
            </div>



            <div className="schedule-detail">
              <div className="vertical-dotted-line"></div>
            </div>
            <div className='schedule-detail'>
            <div className="vertical-dotted-line"></div>
            <div className="dot"></div>
            <div className='event-description'>
              <h4>13:00 - 14:00</h4>
              <h3>Lunch with Harry Potter</h3>
            </div>
            </div>
            <div className='schedule-detail'>
            <div className="vertical-dotted-line"/>
            <div className="dot"></div>
            <div className='event-description'>
              <h4>13:00 - 14:00</h4>
              <h3>Lunch with Harry Potter</h3>
            </div>
            </div>
            <div className="schedule-detail">
              <div className="vertical-dotted-line"></div>
            </div>
            <div className='schedule-detail'>
            <div className="vertical-dotted-line"></div>
            <div className="dot"></div>
            <div className='event-description'>
              <h4>13:00 - 14:00</h4>
              <h3>Lunch with Harry Potter</h3>
            </div>
            
            </div>
            
          </div>

        
          {/*  */}
        </div>
  );
}

export default App;
