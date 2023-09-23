import {useEffect, useRef, useState} from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import './index.css'
import {API_GET_DATA} from "../../global/constants";

async function fetchData(setData) {
    const res = await fetch(API_GET_DATA)
    const {data} = await res.json()
    setData(data)
}

async function fetchSetData(data) {
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({data})
    })
}

const Home = () => {

    const [data, setData] = useState([])
    const submittingData = useRef(false)

    useEffect(() => {
        if (!submittingData.current) {
            return
        }
        fetchSetData(data).then(data => submittingData.current = false)
    }, [data])

    useEffect(() => {
        fetchData(setData)
    }, [])

    return <div className="app">
        <Edit add={setData} submittingData={submittingData}/>
        <List listData={data} deleteData={setData} submittingData={submittingData}/>
    </div>
}


export default Home
