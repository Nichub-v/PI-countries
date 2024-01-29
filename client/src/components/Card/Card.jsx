import { Container } from "../../styles/Card.styled"
import { Link } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";

import { useDispatch } from "react-redux"
import { connect } from "react-redux";
import { createToast } from "../../redux/actions.js"

export default function Card(props) {
    let [weatherData, setWeatherData] = useState({})
    const dispatch = useDispatch()

    useEffect(()=> {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=918ed331b81947debe420149242501&q=${props.name}&aqi=yes`).then(({data})=> {
            if (data.current) {
                setWeatherData(data.current)
            }
        }).catch((error)=> {
            console.warn(error)
        })
    }, [props.name])
    
    return (
        <Link className="title" to={`/home/country/${props.id}`}>
            <Container flagUrl={props.flag}>
            <div className="info-container">
                <ul className="info-ul">
                {weatherData.condition ? (
                        <li className="weather-container">
                            <span className="weather-span weather-item">{weatherData.condition.text}</span>
                            <img className="weather-img weather-item" src={weatherData.condition.icon}></img>
                        </li>
                    ) : (
                        <li className="weather-container"><span className="weather-span weather-item">No hay información climática.</span></li>
                    )}

                    <li><h3>{props.name}</h3></li>
                    <li>{props.continents[0]}</li>
                </ul>
            </div>
        </Container>
        </Link>
        
    )
}