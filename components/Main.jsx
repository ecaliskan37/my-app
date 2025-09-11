import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
import data from '../public/apartments.json'

const Main = () => {
    const [basDate, setBasDate] = useState("2025-07-22")
    const [endDate, setEndDate] = useState("2025-11-25")
    const [list, setList] = useState(data)
    const nav = useNavigate()

    // useEffect(() => {
    //     if (typeof document !== "undefined") {
    //         setList(data.filter(item => item.date >= basDate && item.date <= endDate))
    //     }
    // }, [endDate, basDate])

    return (
        <>
            <div>
                <center>Project 10 AirBnB</center>
                <div><input
                    type="date"
                    id="start"
                    name="date-start"
                    value={basDate}
                    placeholder="gg.aa.yyyy"
                    onChange={(e) => setBasDate(e.target.value)}
                    required />
                </div>
                <div>
                    <input
                        type="date"
                        id="start"
                        name="date-end"
                        value={endDate}
                        placeholder="gg.aa.yyyy"
                        onChange={(e) => setEndDate(e.target.value)}
                        required />
                </div >
            </div >
            <div>
                {list.map((apartment) => {
                    return <div key={apartment.id}
                        className="flex border rounded-lg shadow-lg justify-around p-4 m-4">
                        < div className="flex-shrink-0 mr-4" >
                            <img src={apartment.image} alt={apartment.title} className="w-40 h-24" />
                        </div>
                        <div className="flex-1">
                            <h2>{apartment.title}</h2>
                            <p>{apartment.description}</p>
                            <p>${apartment.price} /Night </p>
                            <button
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => nav(`/detail/:${apartment.id}`)}
                            >
                                View Details</button>
                        </div>
                    </div >
                })
                }
            </div >
        </>)

}

export default Main
