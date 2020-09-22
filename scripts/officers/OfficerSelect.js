import { useOfficers, getOfficers } from "./OfficerProvider.js"

const eventHub = document.querySelector(".container")


eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officerChosen: changeEvent.target.value,
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

const domElement = document.querySelector(".filters__officer")


export const OfficerSelect = () => {
    getOfficers() 
    .then (() => {
    const officerList = useOfficers()
render(officerList)
}

)}


const render = officerCollection => {
       
    domElement.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officerCollection.map(officerObject => {
                    return `<option value="${ officerObject.name }">${officerObject.name}</option>`
                }).join("")
            }
        </select>
    `
}