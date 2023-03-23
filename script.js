//'Accept', 'application/json'

let joke = {
    getJoke: function (searchTerm) {
        fetch("https://icanhazdadjoke.com/search?term=" + searchTerm + ""
        , {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            //.then((data) => this.displayJoke(data))
            .then((data) => {
                //console.log(data.results)
                let randNum = Math.floor(Math.random() * data.results.length);
                //console.log("value", value)
                //let resulted = Object.keys
                //console.log (data.results[value].joke)
                return this.displayJoke(data.results[randNum])
               
            })
    },

    //get a random joke (prefer when loading page)
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

    //search for a joke
    searchJoke: function () {
        
        this.getJoke(document.querySelector(".searchBar").value);
        document.querySelector(".searchBar").value = "";
        //document.querySelector("form").reset();
        // e.preventDefault();
        // return false;
    },

    //display the joke searched
    displayJoke: function (data) {
        const joke = data.joke;
        document.querySelector(".theJoke").innerText = joke;
    }
};

//random joke happens when page is loaded
//when random button is clicked/selected, run random joke function
// document.querySelector("#randomButton").addEventListener("click", function () {
//     joke.getRandom();
// });
var randButt = document.querySelector("#randomButton")
randButt.addEventListener("click", function () {
    joke.getRandom();
});
randButt.addEventListener("mouseover", function () {
    randButt.innerText = 'Random Dad Joke';
});

randButt.addEventListener("mouseout", function () {
    randButt.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm20.1 198.1c4-25.2 34.2-42.1 59.9-42.1s55.9 16.9 59.9 42.1c1.7 11.1-11.4 18.3-19.8 10.8l-9.5-8.5c-14.8-13.2-46.2-13.2-61 0L288 217c-8.4 7.4-21.6.3-19.9-10.9zM168 160c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm230.9 146C390 377 329.4 432 256 432h-16c-73.4 0-134-55-142.9-126-1.2-9.5 6.3-18 15.9-18h270c9.6 0 17.1 8.4 15.9 18z"></path></svg>';
});


//search button
var searchButt = document.querySelector(".searchButton");

//search for a joke when search button clicked or tap or selected
searchButt.addEventListener("click", function() {
    joke.searchJoke();

    //run random joke if search bar is empty
///... if (document.querySelector(".searchBar").value === null)
});

//change search button to solid when mouse over
searchButt.addEventListener("mouseover", function () {
    searchButt.setAttribute("style", "background-color:white;")
}, false);
//change search button back to original when mouse out
searchButt.addEventListener("mouseout", function () {
    searchButt.setAttribute("style", "background-color:#7c7c7c2b;")
}, false);


//search for joke when press Enter key
//document.querySelector("form").addEventListener("submit", function (e) {
document.querySelector(".searchBar").addEventListener("keyup", function (e) {
//     //document.querySelector(".searchButton").click();
    // joke.searchJoke();
    if (e.key === "Enter") {
        //e.preventDefault()
        document.querySelector(".searchButton").click();
        //document.querySelector("#form").reset();
        e.preventDefault();
    }
});


//run random joke if search bar is empty



joke.getRandom();

