import Card from "../Card/Card.jsx"
import { Container } from "../../styles/Cards.styled"
import { useEffect, useState } from "react"
import { switchPage, filterByActivity, filterByContinent } from "../../redux/actions.js"
import { useDispatch, useSelector } from "react-redux"


export default function Cards(props) {
    const countries = useSelector((state) => state.pagedCountries);
    const filteredCountries = useSelector((state) => state.filteredCountries);
    const allActivities = useSelector((state) => state.allActivities);
    const [force, setForce] = useState(false)
    const [page, setPage] = useState(1)
    const [nPages, setPagesNum] = useState(filteredCountries.length / 10)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(switchPage(1))
        setPagesNum(filteredCountries.length / 10)
        setPage(1)
    }, [force, filteredCountries])

    useEffect(() => {
        dispatch(switchPage(page))
    }, [page])

    function handlePageSwitch(pageToSwitch) {
        
        if (pageToSwitch < 1 || pageToSwitch >= (nPages + 1)) {
            return 0
        }
        
        setPage(pageToSwitch)
    }

    function createButtons() {
        let buttons = []
        for (let i = 1; i < nPages + 1; i++) {
            buttons.push(i)
        }

        return buttons
    }

    function handleContinentSelect(e) {
        dispatch(filterByContinent(e.target.value))
        setForce(!force)
    }

    function handleActivitySelect(e) {
        dispatch(filterByActivity(e.target.value))
        setForce(!force)
    }

    return (
        <Container>
            <div>
                <select onChange={handleContinentSelect}>
                    <option value="Reset">Continent</option>
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Asia">Asia</option>
                    <option value="South America">South America</option>
                    <option value="North America">North America</option>
                    <option value="Antarctica">Antarctica</option>
                </select>


                {/* acá irán las actividades. traerlas de la base de datos y crear una opción para cada actividad */}
                <select onChange={handleActivitySelect}>
                    <option value="Reset">Activities</option>
                    {allActivities.map((activity) => {
                        return <option key={activity.id} value={activity.name}>{activity.name}</option>
                    })}
                </select>
            </div>
            

            <div>
                {countries.map((country) => {return <Card
                    id={country.id}
                    flag={country.flags.svg}
                    name={country.name.common}
                    continents={country.continents}
                />})}
            </div>
            
            <div>
                <h3>Pág. {page}</h3>
                <button onClick={()=>{handlePageSwitch(Number(page) - 1)}}>prev</button>
                    {createButtons().map((nButton) => {return <button key={nButton} onClick={(e)=>{handlePageSwitch(e.target.name)}} name={nButton}>{nButton}</button>})}
                <button onClick={()=>{handlePageSwitch(Number(page) + 1)}}>next</button>
            </div>
        </Container>
    )
}