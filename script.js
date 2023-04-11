const jokeBox = [];
const page = 1;
const searchTerm = "";
const searchButton = document.querySelector(".searchButton");
const randomButton = document.getElementById("randomButton");
let searchedValue = document.querySelector("#searchBar").value;
   
document.addEventListener("DOMContentLoaded", () => {
    allJokes(1);
    getJoke(jokeBox);
});

function allJokes(page) {
    fetch(`https://icanhazdadjoke.com/search?term=&page=${page}`
        , {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => { 
            if (data.current_page <= data.total_pages) {
                data.results.map((item) => { jokeBox.push(item.joke) });
                allJokes(page + 1)
            }
            else { getJoke(jokeBox) }
        })
};

function filterJokes() {
    searchedValue = document.querySelector("#searchBar").value;
    const filtered = jokeBox.filter(item => item.includes(searchedValue));
    document.querySelector(".theJoke").innerText = getJoke(filtered);

    const jokeUl = document.querySelector('.jokeList');
    jokeUl.innerHTML="";
    if (filtered.length > 5) {
        for (i=1; i<=5; i++) {
            const jokeLi = document.createElement('li');
            jokeLi.innerHTML = getJoke(filtered);
            jokeUl.appendChild(jokeLi);
        }
    } else {
        for (i=1; i<filtered.length; i++) {
            const jokeLi = document.createElement('li');
            jokeLi.innerHTML = getJoke(filtered);
            jokeUl.appendChild(jokeLi);
        }
    }
};

function getJoke(jokeArray) {
    let randNum = Math.floor(Math.random() * jokeArray.length);
    return jokeArray[randNum];
};


randomButton.addEventListener("click", function () {
    document.querySelector(".theJoke").innerText = getJoke(jokeBox);

});

randomButton.addEventListener("mouseover", function () {
    randomButton.innerText = 'Random Dad Joke';
});

randomButton.addEventListener("mouseout", function () {
    randomButton.innerHTML = '&#128512;';
});


searchButton.addEventListener("click", function () {

    if (document.querySelector("#searchBar").value === "") {
        document.querySelector('.jokeList').innerHTML = ""
        document.querySelector(".theJoke").innerText = getJoke(jokeBox);
    }
    else {
    filterJokes();
    }
});

searchButton.addEventListener("mouseover", function () {
    searchButton.setAttribute("style", "background-color:white;")
});

searchButton.addEventListener("mouseout", function () {
    searchButton.setAttribute("style", "background-color:#7c7c7c2b;")
});

document.querySelector(".searchBar").addEventListener("keyup", function (e) {

    if (e.key === "Enter") {
        e.preventDefault()
        searchButton.click();
    }
});



