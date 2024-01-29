import { Container } from "../../styles/FeedbackForm.styled.js"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { createToast } from "../../redux/actions.js"
import { useDispatch } from "react-redux"
import { validateName, validateMessage } from "./validations.js"
import { serverIp, serverPort } from "../../config.js"

export default function FeedbackForm() {
    let [formData, setFormData] = useState({name: "", message: ""})
    let [errors, setErrors] = useState({name: " ", message: " "})
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        if (Object.values(errors).some((error) => { return error !== "" })) {
            dispatch(createToast("Despeja todos los errores antes de enviar"))
            return 0
        }

        axios.post(`http://${serverIp}:${serverPort}/feedback`, formData).then(({data}) => {
            dispatch(createToast(data.success))
        }).catch((error) => {
            dispatch(createToast(error.data?.error ?? error))
        })
    }

    function handleOnChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        setErrors({...errors, name: validateName(formData.name), message: validateMessage(formData.message)})
    }, [formData])
    
    return(
        <Container>
            <div className="form-container">
            <h2 className="title">Feedback</h2>
            <p className="subtitle">Comenta qué te pareció para ayudarme a mejorar :)<br/>Los comentarios se guardan en la base de datos.</p>

            <form className="form">

                <div className="form-item">
                    <label className="label-title">Nombre</label>
                    <div className="icon-input-container">
                        <input name="name" placeholder="Nombre" type="text" onChange={handleOnChange}></input>
                    </div>
                </div>
                

                <p className="error-text">{errors.name}</p>

                <div className="form-item">
                    <label className="label-title">Mensaje</label>
                    <div className="icon-input-container">
                        <textarea maxLength={1000} placeholder="Tu mensaje" name="message" onChange={handleOnChange}></textarea>
                    </div>
                </div>
                <p className="textarea-length">{formData.message.length} / 1000 caracteres</p>

                <p className="error-text">{errors.message}</p>
                
                <button className={Object.values(errors).some((error) => { return error !== "" }) ? "submit-btn grayed-out" : "submit-btn"} onClick={handleSubmit} type="submit">Enviar</button>
            </form>

            <Link to="/home" type="submit">Volver</Link>
            </div>
        </Container>
    )
}