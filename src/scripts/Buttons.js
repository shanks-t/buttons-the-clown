import { ReservationForm } from "./ReservationForm.js"
import { SubmittedReservations } from "./SubmittedReservations.js"


export const Buttons = () => {
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="form">
        ${ReservationForm()}
    </section>

    <section class="submittedReservations">
    <h2>Reservations</h2>
        ${SubmittedReservations()}
    </section>
    `
}

