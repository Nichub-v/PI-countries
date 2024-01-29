import axios from "axios";
import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";
import { serverIp, serverPort } from "../../config.js"
import { Container } from "../../styles/HomeForm.styled.js"
import { validateCountries, validateDuration, validateDifficulty, validateName, validateSeasons } from "./validations.js"

import { useDispatch } from "react-redux"
import { connect } from "react-redux";
import { createToast, storeActivities } from "../../redux/actions.js"

import { PiTextAa } from "react-icons/pi";
import { PiStar } from "react-icons/pi";
import { PiClock } from "react-icons/pi";
import { PiTree } from "react-icons/pi";
import { PiCheck } from "react-icons/pi";
import { PiBuildings } from "react-icons/pi";
import { BsSearch } from "react-icons/bs";

import { RxCross2 } from "react-icons/rx";
import { IoIosAdd } from "react-icons/io";

import bgUrl from "../../../img/formBg.jpg"


export default function HomeForm() {
    const [formData, setFormData] = useState({name: "", difficulty: "", duration: "", countries: [], seasons: []})
    let [errors, setErrors] = useState({name: " ", difficulty: " ", duration: " ", seasons: " ", countries: " "})
    const [results, setResults] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        setErrors({...errors, 
            name: validateName(formData.name), 
            difficulty: validateDifficulty(formData.difficulty), 
            duration: validateDuration(formData.duration), 
            seasons: validateSeasons(formData.seasons), 
            countries: validateCountries(formData.countries)
        })
    }, [formData])

    function onClose() {
        navigate("/home")
    }

    function searchCountry(name) {
        if (name.length < 3) {
            setResults([])
            return 0
        }

        axios.get(`http://${serverIp}:${serverPort}/countries/?name=${name}`).then(({ data }) => {
            setResults(data)
        }).catch((error) => {
            setResults([])
        })
    }

    function addCountry(e) {
        e.preventDefault()
        
        if (formData.countries.some(country => country.name === e.target.name)) {
                dispatch(createToast("Este país ya se encuentra agregado"))
                return 0
            }
        setFormData({
            ...formData,
            countries: formData.countries.concat({id: e.target.value, name: e.target.name})
        });
        
    }

    function removeCountry(e) {
        e.preventDefault()

        setFormData({
            ...formData,
            countries: formData.countries.filter(country => {return country.id !== e.target.value})
        });
    }

    function changeHandler(e) {
        if (e.target.type === "checkbox" && e.target.checked) {
            setFormData({ ...formData, seasons: [...formData.seasons, e.target.value]})
        }

        else if (e.target.type === "checkbox" && !e.target.checked) {
            setFormData({ ...formData, seasons: formData.seasons.filter((season) => season !== e.target.value)})
        }

        else if (e.target.name === "country-search") {
            searchCountry(e.target.value)
        }

        else {
            setFormData({ ...formData, [e.target.name]: e.target.value})
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (Object.values(errors).some((error) => { return error !== "" })) {
            dispatch(createToast("Despeja todos los errores antes de enviar"))
            return 0
        }

        axios.post(`http://${serverIp}:${serverPort}/activities`, formData).then(()=> {
            dispatch(createToast("Se creó la actividad correctamente"))
            dispatch(storeActivities())
        }).catch((error) => {
            dispatch(createToast(error.response?.data?.error ?? error));
        })
        
    }



    return (
        <Container bgUrl={bgUrl}>
            <div className="form-container">
                <h3 className="form-title">Crea una nueva actividad turística</h3>

                <form className="form">

                    <div className="form-item">
                        <label className="label-title">Nombre</label>

                        <div className="icon-input-container">
                            <PiTextAa className="input-svg"/>
                            <input onChange={changeHandler} placeholder="Ciclismo" name="name"></input>
                        </div>
                    </div>

                    <p>{errors.name}</p>

                    <div className="form-item">
                        <div className="icon-text-container">
                            <PiStar className="title-svg"/>
                            <label>Dificultad</label>
                        </div>
                        <div className="radio-field">
                            <div className="radio-container">
                                <label>1</label>
                                <input className="radio" onChange={changeHandler} type="radio" name="difficulty" value="1"></input>
                            </div>

                            <div className="radio-container">
                                <label>2</label>
                                <input onChange={changeHandler} type="radio" name="difficulty" value="2"></input>
                            </div>

                            <div className="radio-container">
                                <label>3</label>
                                <input onChange={changeHandler} type="radio" name="difficulty" value="3"></input>
                            </div>

                            <div className="radio-container">
                                <label>4</label>
                                <input onChange={changeHandler} type="radio" name="difficulty" value="4"></input>
                            </div>

                            <div className="radio-container">
                                <label>5</label>
                                <input onChange={changeHandler} type="radio" name="difficulty" value="5"></input>
                            </div>
                        </div>
                        
                    </div>

                    <p>{errors.difficulty}</p>
                    

                    <div className="form-item">
                        <label className="label-title">Duración</label>
                        <div className="icon-input-container">
                            <PiClock className="input-svg"/>
                            <input placeholder="2" onChange={changeHandler} type="number" name="duration"></input>
                        </div>
                        
                    </div>

                    <p>{errors.duration}</p>
                    
                    <div className="form-item">
                        <div className="icon-text-container">
                            <PiTree className="title-svg"/>
                            <label>Temporada</label>
                        </div>
                        
                        <div>
                            
                            <input onChange={changeHandler} type="checkbox" name="season" value="Verano"></input>
                            <label>Verano</label>
                        </div>

                        <div>
                            <input onChange={changeHandler} type="checkbox" name="season" value="Otoño"></input>
                            <label>Otoño</label>
                        </div>

                        <div>
                            <input onChange={changeHandler} type="checkbox" name="season" value="Invierno"></input>
                            <label>Invierno</label>
                        </div>

                        <div>
                            <input onChange={changeHandler} type="checkbox" name="season" value="Primavera"></input>
                            <label>Verano</label>
                        </div>
                    </div>

                    <p>{errors.seasons}</p>
                    
                    
                    <div className="form-item">
                        <label className="label-title">Buscar país/países</label>
                        <div className="icon-input-container">
                            <PiBuildings className="input-svg"/>
                            <input placeholder="Argentina" onChange={changeHandler} type="text" name="country-search"></input>
                        </div>
                    </div>
                    
                    {results.length > 0 && (
                        <div className="form-item">
                            <div className="icon-text-container">
                                <BsSearch className="title-svg"/>
                                <label>Resultados</label>  
                            </div>
                            
                            
                            <ul>
                                {results.map((country) => {return <li key={country.id}><IoIosAdd className="countries-icon"/><button className="country-btn" key={country.id} value={country.id} name={country.name.common} onClick={addCountry}>{country.name.common}</button></li>})}
                            </ul>
                        </div>
                    )}
                    
                    
                    {formData.countries.length > 0 && (
                        <div className="form-item">
                            <div className="icon-text-container">
                                <PiCheck className="title-svg"/>
                                <label>Agregados</label>
                            </div>
                        
                            <ul>
                                {formData.countries.map((country) => {
                                    return <li key={country.id}><RxCross2 className="countries-icon"/><button className="country-btn" key={country.id} value={country.id} onClick={removeCountry}>{country.name}</button></li>
                                })}
                            </ul>
                        </div>
                    )}

                    <p>{errors.countries}</p>
                    

                    <div className="submit-btn-container">
                        <button className={Object.values(errors).some((error) => { return error !== "" }) ? "submit-btn grayed-out" : "submit-btn"} onClick={handleSubmit}>Enviar</button>
                        <Link to="/home" onClick={onClose}>Volver</Link>
                    </div>
                </form>
            </div>
        </Container>
    )
}