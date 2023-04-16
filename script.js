const searchButton = document.querySelector(".searchButton");
const randomButton = document.getElementById("randomButton");

// let theJoke = document.querySelector(".theJoke").innerHTML;

document.addEventListener("DOMContentLoaded", () => {
    search = "";
    findJokes();
});

function findJokes() {
    const search = document.querySelector("#searchBar").value;
    fetch (`https://v2.jokeapi.dev/joke/Any?contains=${search}&type=twopart&amount=3`)
        .then ((response) => response.json())
        .then ((data) => { 
            console.log(data);
            // if (data.error === true){
            //     document.querySelector(".theJoke").innerHTML = data.message + ` with \"${search}\"`
            // } else getJokes (data)
        })
};

function getJokes(data) {
    console.log ('category:', data.category)
    document.body.style.background= `url(https://source.unsplash.com/random/?${data.category})`;
      if (data.type === 'twopart') {
        document.querySelector(".theJoke").innerHTML = data.setup + "<br />" + data.delivery;
      } else if (data.type === 'single') {
        document.querySelector(".theJoke").innerHTML = data.joke
      }
};


randomButton.addEventListener("click", function () {
    search = "";
    document.querySelector(".theJoke").innerText = findJokes();

});

randomButton.addEventListener("mouseover", function () {
    randomButton.innerText = 'Random Joke';
});

randomButton.addEventListener("mouseout", function () {
    randomButton.innerHTML = '&#128512;';
});


searchButton.addEventListener("click", function () {

    if (document.querySelector("#searchBar").value === "") {
        document.querySelector('.jokeList').innerHTML = "";
        randomButton.click();
    }
    else {
        findJokes();
    }
});

searchButton.addEventListener("mouseover", function () {
    searchButton.setAttribute("style", "background-color:white;");
});

searchButton.addEventListener("mouseout", function () {
    searchButton.setAttribute("style", "background-color:#7c7c7c2b;");
});

document.querySelector(".searchBar").addEventListener("keyup", function (event) {

    if (event.key === "Enter") {
        event.preventDefault();
        searchButton.click();
    }
});



