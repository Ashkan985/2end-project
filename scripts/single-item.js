// document title
document.title = "test";


//  declarations
const nameElement = document.querySelector("#name");
const genresElement = document.querySelector("#genres");
const summaryElement = document.querySelector("#summary");

// create DOM elements
const insertElements = (element) => {
    nameElement.textContent = `${element.name}`;
    genresElement.textContent = `${element.genres}`;
    summaryElement.innerHTML = `${element.summary}`;
    return;
};

// fetch from TVMaze

fetch("https://api.tvmaze.com/singlesearch/shows?q=batman").then((response) => {
    response.json().then((body) => {
        insertElements(body);
    });
})

//  TO DO
// document.title to change dynamically
// in fetch, replace "batman" with the search item from main page js file
