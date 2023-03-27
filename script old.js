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
    randButt.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm33.8 161.7l80-48c11.6-6.9 24 7.7 15.4 18L343.6 180l33.6 40.3c8.7 10.4-3.9 24.8-15.4 18l-80-48c-7.7-4.7-7.7-15.9 0-20.6zm-163-30c-8.6-10.3 3.8-24.9 15.4-18l80 48c7.8 4.7 7.8 15.9 0 20.6l-80 48c-11.5 6.8-24-7.6-15.4-18l33.6-40.3-33.6-40.3zM398.9 306C390 377 329.4 432 256 432h-16c-73.4 0-134-55-142.9-126-1.2-9.5 6.3-18 15.9-18h270c9.6 0 17.1 8.4 15.9 18z"></path></svg>';
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
    e.preventDefault();
//     //document.querySelector(".searchButton").click();
    // joke.searchJoke();
    if (e.key === "Enter") {
        //e.preventDefault()
        document.querySelector(".searchButton").click();
        //document.querySelector("#form").reset();
        
    }
});


//run random joke if search bar is empty



joke.getRandom();

