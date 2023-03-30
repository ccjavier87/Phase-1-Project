let jokeBox = [];

let page = 1;

let joke = {

    allJokes: function (page) {
        let searchTerm = "&page=" + page;
        this.getData(searchTerm)
        .then ((response) => response.json()) 
        .then((data) => {
          if (data.current_page <= data.total_pages) 
            {
              let jokeMap = data.results.map((jokes) => jokes.joke)
              for (let item of jokeMap) 
                {
                  jokeBox.push(item)
               
                }
              this.allJokes (page + 1)
            }
        })
    },

    filterJokes: function (searchTerm) {
        joke.allJokes(1)
        let filtered = jokeBox.filter(item => item.includes(`${searchTerm}`));
        document.querySelector(".jokeList").innerHTML = '';
        filtered.forEach((e) => {
            document.querySelector(".jokeList").innerHTML = "";
            const newP = document.createElement("p");
            newP.innerText = e;
            document.querySelector(".jokeList").appendChild(newP)
        })
        
    },

    getData: function (searchTerm) {
        return fetch("https://icanhazdadjoke.com/search?term=" + searchTerm + ""
        , {
            headers: {
                'Accept': 'application/json'
            }
        })
    },

    getJoke: function (searchTerm) {
        this.getData(searchTerm)
        .then((response) => response.json())
            .then((data) => {
                let randNum = Math.floor(Math.random() * data.results.length);
                return this.displayJoke(data.results[randNum])
               
            })
               
            },
    

    getRandom: function () {
        fetch("https://icanhazdadjoke.com/",
        {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((randJoke) => this.displayJoke(randJoke))
            .catch((error) => console.log("error"))
    },

    searchJoke: function () {
        
        this.getJoke(document.querySelector(".searchBar").value);
        this.filterJokes(document.querySelector(".searchBar").value);
        document.querySelector(".searchBar").value = "";
    },

    displayJoke: function (data) {
        const joke = data.joke;
        document.querySelector(".theJoke").innerText = joke;
    }


};

var randButt = document.querySelector("#randomButton")
randButt.addEventListener("click", function () {
    joke.getRandom();
});
randButt.addEventListener("mouseover", function () {
    randButt.innerText = 'Random Dad Joke';
});

randButt.addEventListener("mouseout", function () {
    randButt.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm33.8 161.7l80-48c11.6-6.9 24 7.7 15.4 18L343.6 180l33.6 40.3c8.7 10.4-3.9 24.8-15.4 18l-80-48c-7.7-4.7-7.7-15.9 0-20.6zm-163-30c-8.6-10.3 3.8-24.9 15.4-18l80 48c7.8 4.7 7.8 15.9 0 20.6l-80 48c-11.5 6.8-24-7.6-15.4-18l33.6-40.3-33.6-40.3zM398.9 306C390 377 329.4 432 256 432h-16c-73.4 0-134-55-142.9-126-1.2-9.5 6.3-18 15.9-18h270c9.6 0 17.1 8.4 15.9 18z"></path></svg>';
});

var searchButt = document.querySelector(".searchButton");

searchButt.addEventListener("click", function() {
    joke.searchJoke();

    if (document.querySelector(".searchBar").value === null || "") {
        joke.getRandom();
    }});

searchButt.addEventListener("mouseover", function () {
    searchButt.setAttribute("style", "background-color:white;")
}, false);
searchButt.addEventListener("mouseout", function () {
    searchButt.setAttribute("style", "background-color:#7c7c7c2b;")
}, false);

document.querySelector(".searchBar").addEventListener("keyup", function (e) {

    if (e.key === "Enter") {
        e.preventDefault()
        document.querySelector(".searchButton").click();
    }
});

joke.getRandom();

