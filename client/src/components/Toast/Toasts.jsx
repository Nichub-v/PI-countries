import { useState, useEffect } from "react"
import Toast from "./Toast.jsx";

import { useSelector } from "react-redux"
import { connect } from "react-redux";

export default function Toasts() {
    const toasts = useSelector((state) => state.toasts);

    return (
        toasts.map((toast) => {return(<Toast text={toast}/>)})
    )
}