
const cityContainer = document.querySelector("#citycontainer");
const insertName = (name) => {
    const nameElement = document.createElement("p");
    nameElement.textContent = `${name.name} is ${name.height} cm tall & weighs ${name.mass}`;
    document.body.appendChild(nameElement);
};



// fetch from TVMaze
// replace "batman" with the search item from main page js file
fetch("https://api.tvmaze.com/singlesearch/shows?q=batman").then((response) => {
    response.json().then((body) => {
        console.log("Name: " + body.name);
        console.log("Genres: " + body.genres);
        console.log("Summary: " + body.summary);
        // createCharacterElement(body);
    });
})