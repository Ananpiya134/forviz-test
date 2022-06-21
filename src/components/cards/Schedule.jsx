import Events from "./Events"

export default function Schedule ({dayArr}){
    console.log(dayArr)
    
    return (
        <>
        <div className="schedule-header" style={{marginTop:'78px'}}>
                  <p>Today(day, 28 Sep)</p>
                </div>
                <Events/>
                <Events/>
                <Events/>
                <Events/>
                </>
                
    )
}