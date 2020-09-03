//add to DOM
import {useCriminals} from "./CriminalProvider.js"
import {getCriminals} from "./CriminalProvider.js"
import {criminalHTML} from "./Criminal.js"

//referenece the container
const eventHub = document.querySelector(".container")


//EVENT LISTENER FOR CRIME CHOSEN

//listen for event
eventHub.addEventListener("crimeChosen", event => {
  //callback for when event happens
  if ("crimeThatWasChosen" in event.detail) {
    const CriminalArray = useCriminals()
  const filteredCriminalArray = CriminalArray.filter(theConviction => {
    return theConviction.conviction === event.detail.crimeThatWasChosen
  })
  toDom(filteredCriminalArray)
  }
})

//EVENT lISTENER FOR OFFICER CHOSEN//

eventHub.addEventListener("officerSelected", event => {
  if ("officer" in event.detail){
  const officerName = event.detail.officer
  const criminals = useCriminals()
  criminals.filter(criminalObject => {
          if (criminalObject.arrestingOfficer === officerName) {
              return true
  }
})
  }}
)
export const listOfCriminals = () => {
    getCriminals()
    .then ( () => {
        const criminalArray = useCriminals();
        // console.log("listOfCriminals", listOfCriminals)
        toDom(criminalArray);
    })
}


  const toDom = (aCriminalArray) => {
    const domElement = document.querySelector(".criminalsContainer");

    let HTMLArray = aCriminalArray.map(oneCriminal => {
        return criminalHTML(oneCriminal);
    })
    // console.log("htmlArray", HTMLArray)
    domElement.innerHTML= HTMLArray.join("");
  }
