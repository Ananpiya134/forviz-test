import {Routes, Route} from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import ThisWeek from '../components/layouts/ThisWeek'
import NextWeek from '../components/layouts/NextWeek'
import NextMonth from '../components/layouts/NextMonth'

export default function RouteConfig () {


    return  (
        <Routes>
            <Route path='/bookings' element={<MainLayout/>}>
                <Route path='thisweek' element={<ThisWeek/>}/>
                <Route path='nextweek' element={<NextWeek/>}/>
                <Route path='nextmonth' element={<NextMonth/>}/>
            </Route>
        </Routes>
    )
}