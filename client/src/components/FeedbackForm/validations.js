function validateName(data) {
	let nameFormat = /^[a-zA-Z\s]+$/
    console.log(data)
    if (!nameFormat.test(data)) {
        return "Solo se admiten letras (A-Z)"
    }

    if (data.length === 0) {
        return "Completa este campo"
    }

    if (data.length < 3) {
        return "Debe tener 3 o más caracteres"
    }

    if (data.length > 40) {
        return "No puede tener más de 40 caracteres"
    }

	return ""
}

function validateMessage(data) {
    if (data.length === 0) {
        return "Completa este campo"
    }

    if (data.length < 30) {
        return "Debe tener 30 o más caracteres"
    }

    if (data.length > 1000) {
        return "No puede tener más de 1000 caracteres"
    }

    return ""
}

export {validateMessage, validateName}