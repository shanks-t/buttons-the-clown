import { Buttons } from "./Buttons.js"
import { fetchReservations, fetchClowns } from "./dataAccess.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations()
    .then(
        () => {
           return fetchClowns()
        }
    )
    .then(
        () => {
            mainContainer.innerHTML = Buttons()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render() 
    }
)

