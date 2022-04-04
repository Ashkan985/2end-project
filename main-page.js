const Btn = document.querySelector(".btn");
const input = document.querySelector(".users-input");

Btn.addEventListener("click", () => {
  fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`).then((res) => {
    res.json().then((newversion) => {
      newversion.forEach((element) => {
        const result = document.createElement("div");
        document.querySelector(".suggested-movies").appendChild(result);
        result.classList.add("suggested-movie")
        
        const movieImg = document.createElement("img");
        result.appendChild(movieImg);
        movieImg.src = element.show.image.medium;

        const movieName = document.createElement("h3");
        result.appendChild(movieName);
        movieName.textContent = element.show.name;

        const movieDescription = document.createElement("p");
        result.appendChild(movieDescription);
        movieDescription.innerHTML = element.show.summary;

       
      });
      console.log(newversion);
    });
  });
});

