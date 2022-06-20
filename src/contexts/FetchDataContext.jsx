import {useState, useEffect, createContext} from 'react'
import {useLocation} from 'react-router-dom'
import rawData from '../data/data.json'

const FetchDataContext = createContext()

export default function FetchDataContextProvider({children}){

    

    const [roomId, setRoomId] = useState("A101");
	const [searchType, setSearchType] = useState("thisweek");
	const [todayBookings, setTodayBookings] = useState([]);
	const [searchBookings, setSearchBookings] = useState([]);
	const [additionalTimeValue, setAdditionalTimeValue] = useState();
	const location = useLocation();

	const FetchingData = (id, weekNo) => {
		const filteredRoomId = rawData.filter((obj) => obj.roomId === id);

		const filteredSearchBookings = filteredRoomId.filter((obj) => {
			return (
				(new Date(obj.startTime).valueOf() >
					new Date("2019-09-28 00:00:00").valueOf() &&
					new Date(obj.startTime).valueOf() <
						new Date("2019-09-28 00:00:00").valueOf() + additionalTimeValue) ||
				(new Date(obj.endTime).valueOf() >
					new Date("2019-09-28 00:00:00").valueOf() &&
					new Date(obj.endTime).valueOf() <
						new Date("2019-09-28 00:00:00").valueOf() + additionalTimeValue) ||
				(new Date(obj.startTime).valueOf() <
					new Date("2019-09-28 00:00:00").valueOf() &&
					new Date(obj.endTime).valueOf() >
						new Date("2019-09-28 00:00:00").valueOf() + additionalTimeValue)
			);
		});
		switch (weekNo) {
			case "today":
				setAdditionalTimeValue(86399000);
				setTodayBookings(filteredSearchBookings);
				break;
			case "thisweek":
				setAdditionalTimeValue(604799000);
				break;
			case "nextweek":
				setAdditionalTimeValue(1209599000);
				setSearchBookings(filteredSearchBookings);
				break;
			case "nextmonth":
				setAdditionalTimeValue(2591999000);
				setSearchBookings(filteredSearchBookings);
				break;
			default:
				setAdditionalTimeValue(604799000);
				setSearchBookings(filteredSearchBookings);
				break;
		}

		
	};
	useEffect(() => {
		setRoomId(
			location.search.split("=")[location.search.split("=").length - 1]
		);
		setSearchType(
			location.pathname.split("/")[location.pathname.split("/").length - 1]
		);
		roomId !== "" && searchType !== "" && FetchingData(roomId, "today");
		roomId !== "" && searchType !== "" && FetchingData(roomId, searchType);
	}, []);

	console.log(searchBookings);
	console.log(todayBookings);

    return (
        <>
            <FetchDataContext.Provider value={{setSearchType, searchType}}>
                {children}
            </FetchDataContext.Provider>
        </>
    )
}

export {FetchDataContext}

