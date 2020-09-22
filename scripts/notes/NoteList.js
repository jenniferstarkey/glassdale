import { getNotes, useNotes,deleteNote } from "./NotesProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js";

const contentTarget = document.querySelector(".noteListContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => {	
    const newNotes = useNotes()
    render(newNotes, useCriminals())
})

const render = (notes, suspects) => {
    contentTarget.innerHTML = notes.map((noteObject) => {
        noteObject.suspectObj = suspects.find(suspect =>{
            return suspect.id === parseInt(noteObject.suspectId)
        })
            return NoteHTMLConverter(noteObject)
        }).join("");
}

export const NoteList = () => {
    getNotes()
    .then(getCriminals)
    .then(() =>{
            const notes = useNotes();
            const suspects = useCriminals();
            render(notes, suspects)
    })
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})

