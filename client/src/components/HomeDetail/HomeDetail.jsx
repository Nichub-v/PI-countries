import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "../../styles/HomeDetail.styled.js"
import { serverIp, serverPort } from "../../config.js"

export default function Detail() {
    const { id } = useParams(true)
    const [country, setCountry] = useState({})
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get(`http://${serverIp}:${serverPort}/countries/${id}`).then(({ data }) => {
        setCountry(data)
    }).catch((error) => {
        console.log(error)
    })
    }, [id])
    
    function close() {
        navigate("/home")
    }
    
    return (
        <Container>
            {country.name ? (
                <div>
                    <button onClick={close}>X</button>

                    <p>ID: {country.id}</p>
                    <p>{country.name.official}</p>
                    <p>({Object.values(country.name.nativeName)[Object.values(country.name.nativeName).length - 1].official})</p>

                    <img width="100px" src={`${country.flags.svg}`}></img>
                    
                    <ul>Continente/s:
                        {country.continents.map((continent)=><li>{continent}</li>)}
                    </ul>

                    {country.capital ? (
                        <ul>Capital/es: {country.capital.map((capital)=><li>{capital}</li>)}</ul>
                    ) : (
                        <span>Este país no tiene capital</span>
                    )}
                    

                    <p>Subregión: {country.subregion}</p>
                    <p>Área: {country.area}</p>
                    <p>Población: {country.population}</p>
                    
                </div>
            ) : (
                <p>Cargando</p>
            )}
        </Container>
    )
}