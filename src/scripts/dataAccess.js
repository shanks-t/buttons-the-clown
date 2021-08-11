const applicationState = {
    "reservations": []
}

const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

export const sendReservations = (userServiceRequest) => {
    debugger
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