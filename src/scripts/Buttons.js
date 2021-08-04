import { ReservationForm } from "./ReservationForm.js"


export const Buttons = () => {
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <section class="serviceForm">
        ${ReservationForm()}
    </section>
    `
}

