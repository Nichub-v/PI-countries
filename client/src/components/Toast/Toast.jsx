import style from "./Toast.module.css"
import { useState, useEffect } from "react"

export default function Toast(props) {
    let [currentDisplay, setCurrentDisplay] = useState("flex")
    
    setTimeout(()=> {
        setCurrentDisplay("none")
    }, "5000")


    return (
        <>
            {currentDisplay === "flex" && (
                <div style={{display: currentDisplay}} className={style.toastContainer}>
                    <p className={style.p}>{`${props.text}`}</p>
                </div>
            )}
        </>
        
    )
}