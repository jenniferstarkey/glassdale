//add to DOM
import {useCriminals} from "./CriminalProvider.js"
import {getCriminals} from "./CriminalProvider.js"
import {criminalHTML} from "./Criminal.js"

export const listOfCriminals = () => {
    getCriminals()
    .then ( () => {
        const criminalArray = useCriminals();
        console.log("listOfCriminals", listOfCriminals)
        toDom(criminalArray);
    })
}


  const toDom = (aCriminalArray) => {
    const domElement = document.querySelector(".criminalsContainer");

    let HTMLArray = aCriminalArray.map(oneCriminal => {
        return criminalHTML(oneCriminal);
    })
    console.log("htmlArray", HTMLArray)
    domElement.innerHTML= HTMLArray.join("");
  }