import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState} from "react";
import { Container } from "../../styles/HomeDetail.styled.js"
import { serverIp, serverPort } from "../../config.js"
import loading from "../../../svg/loading.svg";
import bgImg from "../../../img/bgDetail.jpg"
import { IoCloseCircle } from "react-icons/io5";

import { useDispatch } from "react-redux"
import { connect } from "react-redux";
import { createToast } from "../../redux/actions.js"


export default function Detail() {

    const { id } = useParams(true)
    const [country, setCountry] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=> {
        axios.get(`http://${serverIp}:${serverPort}/countries/${id}`).then(({ data }) => {
        setCountry(data)
    }).catch((error) => {
        dispatch(createToast(error.response?.data?.error ?? error))
    })
    }, [id])
    
    function close() {
        navigate("/home")
    }
    
    return (
        <Container bgImg={bgImg}>
            {country.name ? (
                <div className="info-container">
                    <ul className="info-ul">
                        <li className="flag-li"><img className="flag-img" alt={`SVG image of ${country.name.common}'s flag`} width="100px" src={`${country.flags.svg}`}></img></li>

                        <li>
                            <div className="li-div">
                                <span className="li-div-title-span">ID</span>
                                <span className="li-div-content-span">{country.id}</span>
                            </div>
                        </li>

                        <li>
                            <div className="li-div">
                                <span className="li-div-title-span">Nombre Común</span>
                                <span className="li-div-content-span">{country.name.common}</span>
                            </div>
                        </li>

                        <li>
                            <div className="li-div">
                                <span className="li-div-title-span">Nombre oficial</span>
                                <span className="li-div-content-span">{country.name.official}</span>
                            </div>
                        </li>

                        <li>
                            <div className="li-div">
                                <span className="li-div-title-span">Nombre nativo</span>
                                <span className="li-div-content-span">{Object.values(country.name.nativeName)[Object.values(country.name.nativeName).length - 1].official}</span>
                            </div>
                        </li>

                        <li>
                            <div className="li-div">
                                <span className="li-div-title-span">Continente</span>
                                <span className="li-div-content-span">{country.continents[0]}</span>
                            </div>
                        </li>

                        <li>
                            <div className="li-div">
                                <span className="li-div-title-span">Capital/es</span>
                                {country.capital ? (
                                    <ul className="li-div-ul">{country.capital.map((capital)=>
                                        <li><span className="li-div-content-span">{capital}</span></li>)}
                                    </ul>
                                ) : (
                                    <span className="li-div-content-span">Este país no tiene capital</span>
                                )}
                            </div>
                            
                        </li>

                        <li>
                            <div className="li-div">
                                <span className="li-div-title-span">Subregión</span>
                                <span className="li-div-content-span">{country.subregion}</span>
                            </div>
                        </li>

                        <li>
                            <div className="li-div">
                                <span className="li-div-title-span">Área</span>
                                <span className="li-div-content-span">{Number(country.area).toLocaleString('es-ES')} Km.</span>
                            </div>
                        </li>

                        <li>
                            <div className="li-div">
                                <span className="li-div-title-span">Población</span>
                                <span className="li-div-content-span">{Number(country.population).toLocaleString('es-ES')/*agrega puntos al número*/}</span>
                            </div>
                        </li>
                    </ul>

                    <div className="detail-bottom">
                        <button className="close-btn" onClick={close}><IoCloseCircle className="close-btn-icon"/></button>
                    </div>
                    
                </div>
            ) : (
                <div className="loading-container">
                    <img className="loading-container-item loading-animation" src={loading}></img>
                    <span className="loading-container-item">Cargando...</span>
                </div>
                
            )}
        </Container>
    )
}