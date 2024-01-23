import axios from "axios";
import { serverIp, serverPort } from "../config.js"

export function storeCountries() {
    return (dispatch) => {
        axios(`http://${serverIp}:${serverPort}/countries`).then(({ data })=> {
            return dispatch({
                type: "STORE_COUNTRIES",
                payload: data
            })
        }).catch((error)=> {
            console.log(error)
        })   
    }
}

export function storeActivities() {
    return (dispatch) => {
        axios(`http://${serverIp}:${serverPort}/activities`).then(({ data })=> {
            return dispatch({
                type: "STORE_ACTIVITIES",
                payload: data
            })
        }).catch((error)=> {
            console.log(error)
        })   
    }
}

export function filterByActivity(activityName) {
    if (activityName === "Reset") {
        return {
            type: "RESET",
            payload: null
        }
    }

    return (dispatch) => {
        axios(`http://${serverIp}:${serverPort}/activity_countries/${activityName}`).then(({ data })=> {
            return dispatch({
                type: "FILTER_BY_ACTIVITY",
                payload: data
            })
        }).catch((error)=> {
            console.log(error)
        })      
    }

}

export function filterByContinent(continentName) {
    if (continentName === "Reset") {
        return {
            type: "RESET",
            payload: null
        }
    }

    return {
        type: "FILTER_BY_CONTINENT",
        payload: continentName
    }
}

export function switchPage(page) {
    return {
        type: "SWITCH_PAGE",
        payload: page
    }
}