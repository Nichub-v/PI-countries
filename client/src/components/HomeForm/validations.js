function validateName(data) {
	let nameFormat = /^[a-zA-Z\s]+$/

    if (!nameFormat.test(data)) {
        return "Solo se admiten letras (A-Z)"
    }

    if (data.length === 0) {
        return "Completa este campo"
    }

    if (data.length < 3) {
        return "Debe tener 3 o más caracteres"
    }

	return ""
}

function validateDifficulty(data) {
    console.log(data)
    if (data === "") return "Debes selecionar una dificultad"

    if (data < 1 || data > 5) return "El valor debe ser de 1 a 5"

    if (typeof(Number(data)) !== "number") return "Valor inválido"

    return ""
}

function validateDuration(data) {
    if (data === "") return "Debes indicar una duración"

    if (typeof(Number(data)) !== "number") return "Valor inválido"

    if (data < 0) return "No puede ser negativo"

    if (data > 100) return "La duración de la actividad es muy alta"

    return ""
}

function validateSeasons(data) {
    if (data.length === 0 || data === "") {
        return "Elige al menos una estación"
    }

    return ""
}

function validateCountries(data) {
    if (data.length === 0) {
        return "Selecciona al menos 1 país"
    }

    return ""
}


export { validateCountries, validateDuration, validateDifficulty, validateName, validateSeasons };