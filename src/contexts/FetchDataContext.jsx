import {useState, useEffect, createContext} from 'react'
import {useLocation} from 'react-router-dom'
import rawData from '../data/data.json'

const FetchDataContext = createContext()

export default function FetchDataContextProvider({children}){

  const [roomId, setRoomId] = useState("");
	const [searchType, setSearchType] = useState("");
	const [todayBookings, setTodayBookings] = useState([]);
	const [searchBookings, setSearchBookings] = useState([]);
	const location = useLocation();

	const fetchingData = (id, weekNo) => {
		const now = new Date().toDateString()+' 00:00:00'
		let additionalTimeValue 

		switch (weekNo) {
			case 'today':
				additionalTimeValue = 86399000
				break;
			case 'thisweek':
				additionalTimeValue = 604799000
				break;
			case 'nextweek':
				additionalTimeValue = 1209599000
				break;
			case 'nextmonth':
				additionalTimeValue = 2591999000
				break;
			default:
				additionalTimeValue = 604799000
				break;
		}

		const filteredRoomId = rawData.filter((obj) => obj.roomId === id);
		const filteredSearchBookings = filteredRoomId.filter((obj) => {
			return (
				(new Date(obj.startTime).valueOf() >
					new Date(now).valueOf() &&
					new Date(obj.startTime).valueOf() <
						new Date(now).valueOf() + additionalTimeValue) ||
				(new Date(obj.endTime).valueOf() >
					new Date(now).valueOf() &&
					new Date(obj.endTime).valueOf() <
						new Date(now).valueOf() + additionalTimeValue) ||
				(new Date(obj.startTime).valueOf() <
					new Date(now).valueOf() &&
					new Date(obj.endTime).valueOf() >
						new Date(now).valueOf() + additionalTimeValue)
			);
		});

		switch (weekNo) {
			case 'today':
				setTodayBookings(filteredSearchBookings)
				break;
			default:
				setSearchBookings(filteredSearchBookings)
				break;
		}

	}
	useEffect(() => {
		
		fetchingData(roomId,'today')
	},[])
	useEffect(() => {
		setRoomId(
			location.search.split("=")[location.search.split("=").length - 1]
		);
		setSearchType(
			location.pathname.split("/")[location.pathname.split("/").length - 1]
		);
		fetchingData(roomId,searchType)
	},[ searchType, roomId])
	
    return (
        <>
            <FetchDataContext.Provider value={{setSearchType, searchType, roomId, todayBookings, searchBookings}}>
                {children}
            </FetchDataContext.Provider>
        </>
    )
}

export {FetchDataContext}

