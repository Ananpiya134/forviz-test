import {Routes, Route} from 'react-router-dom'

export default function RouteConfig () {


    return  (
        <Routes>
            <Route path='/bookings'>
                <Route path='/thisweek'/>
                <Route path='/nextweel'/>
                <Route path='/nextmonth'/>
            </Route>
        </Routes>
    )
}