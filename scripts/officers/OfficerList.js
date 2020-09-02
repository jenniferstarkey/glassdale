import {officerHTML} from "./Officer.js"
import {useOfficers} from "./OfficerProvider.js"
import { getOfficers } from "./OfficerProvider.js"

export const officerList = () => {
    getOfficers()
    .then(()=>{
        const officerArray = useOfficers();
        // console.log("officerArray", officerArray)
        addToDOM(officerArray);

    })

}

const addToDOM = (theOfficerArray) => {
    const domElement = document.querySelector(".officersContainer");
    
    let HTMLArray = theOfficerArray.map(singleOfficer => {
        return officerHTML(singleOfficer);
    })

// console.log("HTMLArray", HTMLArray);

domElement.innerHTML = HTMLArray.join("");
}