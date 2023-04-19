import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import "./list.css"
import {useLocation} from "react-router-dom";
import {useState} from "react";
import {format} from "date-fns";
import {DateRange} from "react-date-range";
const List = () => {
    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text"/>
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span>{`${format(date[0].startDate, "MM/dd/yyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            <DateRange
                                onChange={item => setDate([item.selection])}
                                minDate={new Date()}
                            />
                        </div>
                    </div>
                    <div className="listResult"></div>
                </div>
            </div>
        </div>
    )
}

export default List