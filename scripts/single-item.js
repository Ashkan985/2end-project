//  declarations
const nameElement = document.querySelector("#name");
const genresElement = document.querySelector("#genres");
const summaryElement = document.querySelector("#summary");
const posterURL = document.querySelector("#poster");

// get string from url and keep only 3digit ID (substring)
const searchedItem = document.location.search.substring(9);

// create DOM elements
const insertElements = (element) => {
    nameElement.textContent = `${element.name}`;
    genresElement.textContent = `${element.genres}`;
    summaryElement.innerHTML = `${element.summary}`;
    posterURL.innerHTML = posterURL.src=element.image.medium;
    return;
};

// fetch from TVMaze
fetch(`https://api.tvmaze.com/shows/${searchedItem}`).then((response) => {
    response.json().then((body) => {
        insertElements(body);
        // console.log(body.name)

        // page title
        document.title = `${body.name}`;
    });
});