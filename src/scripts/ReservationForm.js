import { sendReservations } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userPartySize = document.querySelector("input[name='partySize']").value
        const userAddress = document.querySelector("input[name='partyDate']").value
        const userDate = document.querySelector("input[name='partyDuration']").value
        const userDuration = document.querySelector("input[name='partyDuration']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            partySize: userPartySize,
            address: userAddress,
            date: userDate,
            duration: userDuration
        }

        // Send the data to the API for permanent storage
        sendReservations(dataToSendToAPI)
    }
})

export const ReservationForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="parentName">parent name</label>
        <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="childName">child name</label>
        <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="partySize">size of party</label>
        <input type="number" name="partySize" class="input" min="1" step="1" />
    </div>
    <div class="field">
        <label class="label" for="partyAddress">address</label>
        <input type="text" name="partyAddress" class="input" />
    </div>
    <div class="field">
        <label class="label" for="partyDate">Date needed</label>
        <input type="date" name="partyDate" class="input" />
    </div>
    <div class="field">
        <label class="label" for="partyBudget">budget</label>
        <input type="number" name="partyBudget" class="input" min="250" step="50" />
    </div>
    <div class="field">
        <label class="label" for="partyDuration">duration</label>
        <input type="number" name="partyDuration" class="input" min="60" step="30" />
    </div>
    <div>
    <button class="button" id="submitRequest">Submit Request</button>
    </div>
    
    `
    return html
}
    