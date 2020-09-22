// prepare to display //
const eventHub = document.querySelector(".container")


export const NoteHTMLConverter = (noteObject) => {
    console.log("hey")
    return `
        <section class="note">
            <div class="note--title">Criminal: ${ noteObject.suspectObj.name }</div>
            <div class="note--content">${ noteObject.noteText }</div>
            <div class="note--timestamp">Timestamp: ${ new Date(noteObject.date).toLocaleDateString('en-US')  }</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
            </section>
    `
}