import { useOfficers, getOfficers } from "./OfficerProvider.js"

const eventHub = document.querySelector(".container")
const domElement = document.querySelector(".filters__officer")


eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = event.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

const render = (officerCollection) => {
       
    domElement.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officerCollection.map(officerMap => {
                    const selecting = officerMap.name
                    return `<option>${selecting}</option>`
                })
            }
        </select>
    `
}
export const OfficerSelect = () => {
    getOfficers() 
    .then (() => {
    const officerList = useOfficers()
render(officerList)
}

)}