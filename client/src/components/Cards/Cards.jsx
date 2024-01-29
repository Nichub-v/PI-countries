import Card from "../Card/Card.jsx"
import { Container } from "../../styles/Cards.styled"
import { useEffect, useState } from "react"
import { switchPage, filterByActivity, filterByContinent, orderCountries } from "../../redux/actions.js"
import { useDispatch, useSelector } from "react-redux"
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

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

    function handleActivityFilter(e) {
        dispatch(filterByActivity(e.target.value))
        setForce(!force)
    }

    function handleOrder(e) {
        dispatch(orderCountries(e.target.value))
        setForce(!force)
    }

    return (
        <Container>
            <div className="filters">
                <select onChange={handleContinentSelect}>
                    <option value="Reset">Continente</option>
                    <option value="Africa">Africa</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Asia">Asia</option>
                    <option value="South America">South America</option>
                    <option value="North America">North America</option>
                    <option value="Antarctica">Antarctica</option>
                </select>

                <select onChange={handleOrder}>
                    <option value="Reset">Orden</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>

                {/* acá irán las actividades. traerlas de la base de datos y crear una opción para cada actividad */}
                <select onChange={handleActivityFilter}>
                    <option value="Reset">Actividades</option>
                    {allActivities.map((activity) => {
                        return <option key={activity.id} value={activity.name}>{activity.name}</option>
                    })}
                </select>

            </div>
            
            
            <div className="cards-container">
                {countries.length > 0 ? (
                    countries.map((country) => {return <Card
                        id={country.id}
                        flag={country.flags.svg}
                        name={country.name.common}
                        continents={country.continents}
                    />})
                ) : (
                    <p>No hay países con esos filtros</p>
                )}
            </div>
            
            <div className="pages-container">
            {countries.length > 0 && (
                <>
                    <span className="page-indicator">Pg. {page}</span>
                    <button className="prev-button" onClick={()=>{handlePageSwitch(Number(page) - 1)}}><GrFormPrevious/></button>

                    <div className="page-buttons-container">
                            {createButtons().map((nButton) => {return <button key={nButton} onClick={(e)=>{handlePageSwitch(e.target.name)}} name={nButton}>{nButton}</button>})}
                    </div>

                    <button  className="next-button" onClick={()=>{handlePageSwitch(Number(page) + 1)}}><GrFormNext/></button>
                </>
            )}
            </div>
        </Container>
    )
}