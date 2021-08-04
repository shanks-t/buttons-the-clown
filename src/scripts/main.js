import { Buttons } from "./Buttons.js"


const mainContainer = document.querySelector("#container")

const render = () => {
mainContainer.innerHTML = Buttons()
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render() 
    }
)

