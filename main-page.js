


const Btn = document.querySelector(".btn")
const input = document.querySelector(".users-input")



Btn.addEventListener("click", () => {
    
    fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`).then(
      (res) => {
        res.json().then((newversion) => {

            newversion.forEach(element => {
                
           const result = document.createElement('')
          console.log(newversion);
        //  `<div>${newversion.id}</div><div>${newversion.url}</div><div>${newversion.summary}</div>`;
        });
      }
    );
  });
 });