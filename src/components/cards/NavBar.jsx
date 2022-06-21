import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { FetchDataContext } from '../../contexts/FetchDataContext'

export default function NavBar (){

    const {setSearchType, searchType, roomId} = useContext(FetchDataContext)
    const navigate = useNavigate()

    const handleClickNavigate = e => {
        // console.log(e.target.value)
        setSearchType(e.target.value)
        navigate(`${e.target.value}?roomId=${roomId}`)
        
    }
    
    return (
        <div className='navbar-container'>
              <button className={`navbar-button ${searchType === 'thisweek' ? `active`:``}`} value={'thisweek'} onClick={ handleClickNavigate}>THIS WEEK</button>
              <button className={`navbar-button ${searchType === 'nextweek' ? `active`:``}`} value={'nextweek'} onClick={handleClickNavigate}>NEXT WEEK</button>
              <button className={`navbar-button ${searchType === 'nextmonth' ? `active`:``}`} value={'nextmonth'} onClick={handleClickNavigate}>NEXT MONTH</button>
            </div>
    )
}