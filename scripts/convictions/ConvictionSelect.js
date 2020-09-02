
/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered

const eventHub = document.querySelector(".container")
const domElement = document.querySelector(".filters__crime");


    eventHub.addEventListener("change", event => {
        if (event.target.id === "crimeSelect") {
            const customEvent = new CustomEvent ("crimeChosen", {
                detail: {
                    crimeThatWasChosen: event.target.value
                }
            })
            eventHub.dispatchEvent(customEvent)
        }
    })


    const render = (convictionsCollection) => {
       
        domElement.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictionsCollection.map(listMap => {
                        const selecting = listMap.name
                        return `<option>${selecting}</option>`
                    })
                }
            </select>
        `
    }
    export const ConvictionSelect = () => {
        getConvictions() 
        .then (() => {
        const convictionsList = useConvictions()
    render(convictionsList)
    }

    )}
    
   