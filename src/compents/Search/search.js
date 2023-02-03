import axios from "axios";
import React, {useEffect, useState} from "react";
import useStyles from "./searchStyle.style";

const URLSearch = `https://api.openweathermap.org/data/2.5/weather`
const API_SEARCH = `778759979311b061bf5ccf5f21bd59ac`

function Search({data}) {
    let city = data;
    const [temperature, setTemperature] = useState(null);
    const classes = useStyles();
    useEffect(() => {
        axios.get(`${URLSearch}?q=${city}&appid=${API_SEARCH}`).then((details) => {
            setTemperature(details.data.main.feels_like - 273.15)
        })
    }, [city])

    useEffect(() => {
        let interval;
        interval = setInterval(() => {
            axios.get(`${URLSearch}?q=${city}&appid=${API_SEARCH}`).then((details) => {
                console.log(data.toLocaleString())
                setTemperature(details.data.main.feels_like - 273.15)
            })
        }, 10000);
        return () => clearInterval(interval)
    }, [])
    return (
        <div>
            <div className={classes.cardTitle}>Weather details</div>
            <div className={classes.cardDetails}>The temperature in {data} is {Math.floor(temperature)} </div>
        </div>
    )
}

export default Search;

