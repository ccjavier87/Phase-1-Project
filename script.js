//'Accept', 'application/json'

let joke = {
    getJoke: function (searchTerm) {
        fetch("https://icanhazdadjoke.com/search?term=" + searchTerm + "", {
            headers: {
                'Accept': 'application/json'
            }
        }
        )
            .then((response) => response.json())
            //.then((data) => this.displayJoke(data))
            .then((data) => {
                console.log(data.results)
            })

    },

    //get a random joke (prefer when loading page)
    getRandom: function () { },

    //search for a joke
    searchJoke: function () { },

    //display the joke searched
    displayJoke: function () { }

};

//random joke happens when page is loaded
//when random button is clicked/selected, run random joke function
document.querySelector("#randomButton").addEventListener("click", function () {
    joke.getRandom();
});

//search for a joke when type in search bar
//search for a joke when search button clicked or tap or selected
document.querySelector(".searchButton").addEventListener("click", function () {
    joke.searchJoke();
});

//run random joke if search bar is empty

joke.getJoke();