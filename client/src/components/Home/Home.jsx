import Navbar from "../Navbar/Navbar.jsx"
import Cards from "../Cards/Cards.jsx"
import axios from "axios"
import { useState, useEffect } from "react"

export default function Home() {
    let [countries, setCountries] = useState([])

    useEffect(() => {
        async function getData() {
            try {
                const { data } = await axios("http://localhost:3001/countries")
                setCountries(data)
            } catch(error) {
                console.log(error)
            }
        }

        getData()
    }, [])

    return(
        <div className="Home">
            <Navbar></Navbar>
            <h1>Home page</h1>

            <Cards countries={countries}></Cards>
        </div>
    )
}