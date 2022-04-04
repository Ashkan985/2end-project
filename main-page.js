const Btn = document.querySelector(".btn");
const input = document.querySelector(".users-input");

Btn.addEventListener("click", () => {
  fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`).then((res) => {
    res.json().then((newversion) => {
      newversion.forEach((element) => {
        const result = document.createElement("div");
        document.querySelector(".suggested-movies").appendChild(result);

        const movieName = document.createElement("h3");
        document.querySelector("div").appendChild(movieName);
        movieName.textContent = element.show.name;

        const movieDiscription = document.createElement("p");
        document.querySelector("div").appendChild(movieDiscription);
        movieDiscription.innerHTML = element.show.summary;

        const movieImg = document.createElement("img");
        document.querySelector("div").appendChild(movieImg);
        movieDiscription.innerHTML.src = element.show.image.medium;
      });
      console.log(newversion);
    });
  });
});

