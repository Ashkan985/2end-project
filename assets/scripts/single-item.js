//  declarations
const nameElement = document.querySelector("#name");
const genresElement = document.querySelector("#genres");
const summaryElement = document.querySelector("#summary");
const posterURL = document.querySelector("#poster");
const runTimeElement = document.querySelector("#runtime");
const broadcastElement = document.querySelector("#broadcast");


// get string from url and keep only 3digit ID (substring)
// const searchedItem = document.location.search.substring(9);
// const searchedItem = document.location.search.slice(9);
const searchedItem = document.location.search.split('=')[1];

// create DOM elements
const insertElements = (element) => {
    nameElement.textContent = element.name;
    genresElement.textContent = element.genres.join(" - ");
    summaryElement.innerHTML = element.summary;
    runTimeElement.textContent = `${element.runtime} minutes`;
    broadcastElement.textContent = element.premiered;
    posterURL.src = element.image.medium;
    return;
};

// fetch from TVMaze
fetch(`https://api.tvmaze.com/shows/${searchedItem}`).then((response) => {
    response.json().then((data) => {
        insertElements(data);
        // console.log(data.name)

        // page title
        document.title = `${data.name}`;
    });
});
