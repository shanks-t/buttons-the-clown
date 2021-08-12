import { getReservations, denyReservation, getClowns, saveClown } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        denyReservation(parseInt(reservationId))
    }
})


mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reservationId, clownId] = event.target.value.split("--")
            const clownCompletion = {
                reservationId: reservationId,
                clownId: clownId,
                date: new Date(),
            }
            saveClown(clownCompletion)
        }
    }
)

export const SubmittedReservations = () => {
    const clowns = getClowns()
    const reservations = getReservations()
    let html = "<ul>"
    const reservationsArray = reservations.map(
        (reservation) => {
            return `
            <li>
                ${reservation.parentName}
                ${reservation.childName}
                ${reservation.partySize}
                ${reservation.address}
                ${reservation.date}
                ${reservation.duration}
                <select class="clowns" id="clowns">
                    <option value="">Choose</option>
                    ${
                        clowns.map(
                            clown => {
                                return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
                            }
                        ).join("")
                    }   
                </select>
                <button class="request__delete"
                    id="reservation--${reservation.id}">
                    Deny
                </button>
            </li>`
        }
    )
    html += reservationsArray.join("")
    html += "</ul>"

    return html
}