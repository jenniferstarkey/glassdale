export const criminalHTML = (criminalObj) => {
    return `
    <section id="criminal-card"${criminalObj.id} class="criminal-card">
    <h2>${criminalObj.name}</h2>
    <p>Age: ${criminalObj.age}</p>
    <p>Crime: ${criminalObj.conviction}</p>
    <p>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}}</p>
    <p>Term End: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}}</p>

    </section>
    `
}