const applicationState = {
    "reservations": []
}

const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

export const sendReservations = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
        return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
} 

export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (submittedReservations) => {
                // Store the external state in application state
                applicationState.reservations = submittedReservations
            }
        )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (clowns) => {
                // Store the external state in application state
                applicationState.clowns = clowns
            }
        )
}

export const denyReservation = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const saveClown = (clownCompletion) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(clownCompletion)
    }
        return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}

export const getReservations = () => {
    return applicationState.reservations.map(reservation =>({...reservation}))
}

export const getClowns = () => {
    return applicationState.clowns.map(clown =>({...clown}))
}