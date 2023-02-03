import axios from "axios";
import React, {useEffect, useState} from "react";
import {Card} from 'semantic-ui-react'
import useStyles from "./researchResult.style";

const URLSearch = `https://api.openweathermap.org/data/2.5/weather`
const API_SEARCH = `8057622060cb458ef0e1956d1c2dd288`

function SearchTem({data}) {
    let city = data;
    const [temperature, setTemperature] = useState(null);
    const classes = useStyles();
    useEffect(() => {
        axios.get(`${URLSearch}?q=${city}&appid=${API_SEARCH}`).then((details) => {
            setTemperature(details.data.main.feels_like - 273.15)
        })
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?city = " + ${city} + "')`;
        document.body.style.backgroundRepeat = "none";
        document.body.style.backgroundSize = "100";
        document.body.style.width = "100%";
        document.body.style.height = "100%";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }, [city])

    return (
        <Card>
            <Card.Content>
                <div className={classes.resultHeader}>
                    <Card.Header>Weather details</Card.Header>
                </div>
                <div className={classes.resultContext}>
                    <div>The temperature in {data} is {Math.floor(temperature)}</div>
                </div>
            </Card.Content>
        </Card>
    )
}

export default SearchTem;
