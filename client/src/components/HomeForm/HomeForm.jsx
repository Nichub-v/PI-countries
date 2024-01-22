import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function HomeForm() {
    const [formData, setFormData] = useState({countries: []})
    const [results, setResults] = useState([])
    const navigate = useNavigate()

    function onClose() {
        navigate("/home")
    }

    function searchCountry(name) {
        if (name.length < 3) {
            setResults([])
            return 0
        }

        axios.get(`http://localhost:3001/countries/?name=${name}`).then(({ data }) => {
            setResults(data)
        }).catch((error) => {
            setResults([])
        })
    }

    function addCountry(e) {
        e.preventDefault()
        
        if (formData.countries.some(country => country.name === e.target.name)) {
                console.log("Este país ya se encuentra agregado.")
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
        if (e.target.name === "country-search") {
            searchCountry(e.target.value)
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value})
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post("http://localhost:3001/activities", formData).catch((error) => {
        })
    }



    return (
        <div>
            <button onClick={onClose}>X</button>
            <h3>Agregar una actividad turística</h3>
            <form>
                <label>Nombre</label>
                <input onChange={changeHandler} placeholder="Nombre" name="name"></input>

                <label>1</label>
                <input onChange={changeHandler} type="radio" name="difficulty" value="1"></input>
                <label>2</label>
                <input onChange={changeHandler} type="radio" name="difficulty" value="2"></input>
                <label>3</label>
                <input onChange={changeHandler} type="radio" name="difficulty" value="3"></input>
                <label>4</label>
                <input onChange={changeHandler} type="radio" name="difficulty" value="4"></input>
                <label>5</label>
                <input onChange={changeHandler} type="radio" name="difficulty" value="5"></input>

                <label>Duración</label>
                <input onChange={changeHandler} type="number" name="duration"></input>

                <label>Temporada</label>
                <input onChange={changeHandler} type="text" name="season"></input>
                <br></br>
                <label>Buscar país/países</label>
                <input placeholder="Min. 3 letras" onChange={changeHandler} type="text" name="country-search"></input>

                <label>Resultados</label>
                <div>
                    <ul>
                        {results.map((country) => {return <li><button value={country.id} name={country.name.common} onClick={addCountry}>{country.name.common}</button></li>})}
                    </ul>
                </div>

                <label>Agregados</label>
                <div>
                    <ul>
                        {formData.countries.map((country) => {
                            return <li><button value={country.id} onClick={removeCountry}>{country.name}</button></li>
                        })}
                    </ul>
                </div>

                <button onClick={handleSubmit}>Enviar</button>
            </form>
        </div>
    )
}